from flask import Flask,render_template,session,Response,jsonify
from flask import url_for,request,redirect,flash
from flask_mysqldb import MySQL
from flask_cors import CORS
from functools import wraps
import secrets
import math

app = Flask(__name__)
CORS(app)#跨域访问

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
#admin_load_info加载接口
url_admin_info_op='admin/info_load'
#登录信息接口
url_user_login='login'



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
    'pages': 0,
    'total': 0,
    'data': []
}
    #连接数据库
    cur = db.connection.cursor()
    print(keyword)
    #sql语句执行
    cur.execute("SELECT info_id, title, content FROM info WHERE tag_id IN (SELECT tag_id FROM tag WHERE tag_name ='{0}')".format(keyword))
    #获取结果
    info_data=cur.fetchall()
    #分页查询的实现
    offset=(int(page)-1)*int(size)
    limit=int(size)
    cur.execute("SELECT info_id, title, content FROM info WHERE tag_id IN (SELECT tag_id FROM tag WHERE tag_name = '{0}')LIMIT {1} OFFSET {2};".format(keyword,limit,offset))
    #数据处理
    page_data=cur.fetchall()
    result = [{'title': t[2], 'content': t[1], 'keyword': t[0]} for t in page_data]
    #返回数据处理
    data['total']=len(info_data)
    data['success']=True
    data['data']=result
    print(data)
    return  jsonify(data)

@app.route(APIPrefix+url_admin_info_op+'/' ,methods=['GET','POST'])
def op_info():
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
    #sql语句执行
    cur.execute("SELECT info_id, title, content,create_time FROM info WHERE tag_id IN (SELECT tag_id FROM tag WHERE tag_name ='{0}')".format(keyword))
    #获取结果
    info_data=cur.fetchall()
    #分页查询的实现
    offset=(int(page)-1)*int(size)
    return 0
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
            user_info=check_user_exists(phone=phone)
            print(user_info)
            if user_info:
                db_password = user_info[0]
                if password == db_password:
                    user={'user_id':user_info[1],'username':user_info[2],'account_status':user_info[3]}
                    user_data['user_data']=user
                    user_data['success']=True
                    user_data['islogin']=True
                    user_data['message']='登陆成功'
                    return jsonify(user_data)
                else:
                    user_data['successs']=False
                    user_data['message']='密码错误'
                    return jsonify(user_data)
            else:
                # 插入新用户
                try:
                    cur = db.connection.cursor()
                    cur.execute("INSERT INTO user (phone, user_password) VALUES ({0}, {1});".format(phone,password))
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
def check_user_exists(phone):
    # 查询数据库，检查手机号是否已存在,存在则返回密码,id,名字
    try:
        cur = db.connection.cursor()
        cur.execute("SELECT user_password,user_id,username, account_status FROM User WHERE phone = '{0}';".format(phone))
        result = cur.fetchone()
        return result
    except Exception as e:
        print("Error checking user:", e)
        return None

app.run(debug=True,port='5001')