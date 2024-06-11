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
    cur.execute("SELECT info_id, title, content FROM info WHERE tag_id IN (SELECT tag_id FROM tag WHERE tag_name = '校园杂谈')LIMIT {1} OFFSET {2};".format(keyword,limit,offset))
    #数据处理
    page_data=cur.fetchall()
    result = [{'title': t[0], 'content': t[1], 'keyword': t[2]} for t in page_data]
    #返回数据处理
    data['total']=len(info_data)
    data['success']=True
    data['data']=result
    print(data)
    return  jsonify(data)

@app.route(APIPrefix+url_load_forum_data)
def data_load():
     return True                                                                                                                  
app.run(debug=True,port='5001')