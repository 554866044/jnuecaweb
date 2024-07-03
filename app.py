from flask import Flask,session,Response,jsonify
from flask import request
from flask_mysqldb import MySQL
from flask_cors import CORS
from functools import wraps
import secrets
import math

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'
CORS(app,supports_credentials=True)#跨域访问

app.config['MYSQL_HOST'] = 'localhost' # MySQL主机地址
app.config['MYSQL_USER'] = 'root' # MySQL用户名
app.config['MYSQL_PASSWORD'] = 'root' # MySQL密码
app.config['MYSQL_DB'] = 'jnueca' # MySQL数据库名

app.config["SECRET_KEY"]=secrets.token_hex(16)

db = MySQL(app)#连接数据库并创建对象

#api接口前缀
APIPrefix='/api/v1/'
#论坛tag_select接口
url_tag_search='forum/tag_search/'
#论坛搜索接口
url_forum_search='forum/data_search'
#论坛信息加载接口
url_load_forum_data='forum/forum_data_load'
#admin_info_op加载接口
url_admin_info_op='admin/info_load'
#登录信息接口
url_user_login='login'
#登录状态查询接口
url_login_status='login_status'
#发布信息接口
url_submit_info='forum/submit_info'



@app.route(APIPrefix+url_tag_search+'/',methods=['GET'])
def Tag_search():
    keyword = request.args.get('keyword')
    page = request.args.get('page')
    size = request.args.get('size')
    #返回数据模板
    data = {
    'keyword': keyword,
    'page': page,
    'size': size,
    'total': 0,
    'data': []
}
    #连接数据库
    cur = db.connection.cursor()
    print(keyword)
    #sql语句执行
    cur.execute("SELECT COUNT(CASE WHEN info_status = 1 THEN NULL ELSE 1 END) AS total FROM info WHERE tag_id IN (SELECT tag_id FROM tag WHERE tag_name = %s);", (keyword))
    #获取长度结果
    length=cur.fetchone()[0]
    #分页查询的实现
    offset=(int(page)-1)*int(size)
    limit=int(size)
    cur.execute("SELECT * FROM info WHERE tag_id IN (SELECT tag_id FROM tag WHERE tag_name = %s)AND info_status = 0 LIMIT %s OFFSET %s;", (keyword,limit,offset))
    #数据处理
    page_data=cur.fetchall()
    cur.close()
    result = [{'title': t[1], 'content': t[2], 'keyword': keyword} for t in page_data]
    #返回数据处理
    data['total']=length
    data['success']=True
    data['data']=result
    print(data)
    return  jsonify(data)
@app.route(APIPrefix+url_admin_info_op,methods=['GET','POST'])
def op_info():
    if request.method=='GET':
        page = request.args.get('page')
        size = request.args.get('size')
        #返回数据模板
        data = {
        'page': page,
        'size': size,
        'pages': 0,
        'total': 0,
        'data': []
    }
        #连接数据库
        cur = db.connection.cursor()
        #长度
        cur.execute("SELECT COUNT(*) FROM INFO")
        length=cur.fetchall()
        offset=(int(page)-1)*int(size)
        limit=int(size)
        #sql语句执行分页查询
        cur.execute("SELECT i.info_id, i.user_id, i.title, i.content, i.create_time, i.info_status, u.username,t.tag_name FROM info AS i JOIN user AS u ON i.user_id = u.user_id JOIN tag AS t ON i.tag_id = t.tag_id order by i.info_id desc LIMIT %s OFFSET %s;", (limit,offset))
        #获取结果
        info_data=cur.fetchall()
        result = [{'id': t[0], 'title': t[3], 'keyword': t[7],'author':t[6],'create_time':t[4],'status':t[5]} for t in info_data]
        data['total']=length
        data['success']=True
        data['data']=result
        return jsonify(data)
    elif request.method=='POST':
        data=request.json
        id=data.get('id')
        newstatus=data.get('newstatus')
        print(id,newstatus)
        redata={
            'message':''
        }
        cur=db.connection.cursor()
        cur.execute("UPDATE info SET info_status = %s WHERE info_id = %s", (newstatus,id))
        db.connection.commit()
        cur.close()
        txt='正常' if newstatus == 0 else'封禁'
        redata['message']='ID:%s的信息现已修改为%s状态'.format(id,txt)
        redata['success']=True
        return jsonify(redata)
@app.route(APIPrefix+url_user_login,methods=['POST'])
def login():
    if request.method == 'POST':  # 判断是否是 POST 请求
            user_data=request.json
            phone = user_data.get('phone')
            password = user_data.get('password')
            print(phone,password)
            # 连接数据库
            cur = db.connection.cursor()
            #查询用户是否在数据库中
            print("check if the user has already signed up:%s, this is user's phone num".format(phone))
            user_info=check_user_exists(phone=phone)
            print(user_info)
            if user_info:
                print("user all ready exists")
                db_password = user_info[0]
                if password == db_password:
                    print("password correct! password:%s , check it".format(password))
                    user={'user_id':user_info[1],'username':user_info[2],'account_status':user_info[3]}
                    user_data['user_data']=user
                    user_data['success']=True
                    user_data['islogin']=True
                    user_data['message']='登陆成功'
                    session['id']=user_info[1]
                    print(session.get('id'))
                    session.permanent=True
                    return jsonify(user_data)
                else:
                    user_data['successs']=False
                    user_data['message']='密码错误'
                    return jsonify(user_data)
            else:
                # 插入新用户
                try:
                    print("inserting new user, phone number:%s".format(phone))
                    cur = db.connection.cursor()
                    cur.execute("INSERT INTO user (phone, user_password) VALUES (%s, '%s');", (phone,password))
                    # 改为不容易被sql注入的版本
                    db.connection.commit()
                    cur.close()
                    #返回数据组装
                    user_data['success']=True
                    user_data['message']='新用户注册，欢迎！！'
                    user_data['islogin']=True
                    user_data['userdata']=[]
                    return jsonify(user_data)
                except Exception as e:
                    print("Error inserting user:", e)
                    user_data['success']=False
                    user_data['message']='插入用户失败'
                    return jsonify(user_data)
@app.route(APIPrefix+url_submit_info,methods=['POST'])
def submit_info():
    print(session.get('id'))
    data=request.json
    cur=db.connection.cursor()
    print(data['userId'],data['title'],data['content'],data['tagId'])
    cur.execute("INSERT into info(user_id,title,content,tag_id) value(%s,'%s','%s',%s);", (data['userId'],data['title'],data['content'],data['tagId']))
    db.connection.commit()
    cur.close()
    return jsonify({'message':'信息发布成功'})
@app.route(APIPrefix+url_login_status,methods=['GET'])
def login_status():
    data={
        'islogin':False
    }
    if session.get('id')!=None:
        print(session.get('id'))
        data['id']=session.get('id')
        data['islogin']=True
        return jsonify(data)
    else:
        print('fail')
        return jsonify(data)
def check_user_exists(phone):
    # 查询数据库，检查手机号是否已存在,存在则返回密码,id,名字
    try:
        cur = db.connection.cursor()
        cur.execute("SELECT user_password,user_id,username, account_status FROM User WHERE phone = '%s';", (phone))
        result = cur.fetchone()
        cur.close()
        return result
    except Exception as e:
        print("Error checking user:", e)
        return None

app.run(debug=True,port='5001')