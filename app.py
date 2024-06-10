from flask import Flask,render_template,session,Response
from flask import url_for,request,redirect,flash
from flask_mysqldb import MySQL
from flask_cors import CORS
from functools import wraps
import secrets


app = Flask(__name__)
CORS(app)#跨域访问

app.config['MYSQL_HOST'] = 'localhost' # MySQL主机地址
app.config['MYSQL_USER'] = 'root' # MySQL用户名
app.config['MYSQL_PASSWORD'] = 'root' # MySQL密码
app.config['MYSQL_DB'] = 'jnueca' # MySQL数据库名

app.config["SECRET_KEY"]=secrets.token_hex(16)

db = MySQL(app)#连接数据库并创建对象

#api接口前缀
APIPrefix='api/v1/'
# 登录认证装饰器
def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        #登录过就继续执行原函数
        if session.get("is_login") ==True:
            return func(*args, **kwargs)
        #没登陆就跳转至登录页
        else:
            return redirect(url_for('login'))
    return wrapper
@app.route('/index')
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/game')
def game():
    return render_template('game.js')
@app.route('/login',methods=['GET','POST'])
def login():
        if request.method == 'POST' and 'phone' in request.form and 'password' in request.form:
            # 获取表单数据
            phone = request.form['phone']
            password = request.form['password']
            #数据库查询比对
            cursor = db.connection.cursor()
            cursor.execute('SELECT * FROM user WHERE phone = % s AND password = % s', (phone, password, ))

            user = cursor.fetchone()
            print(user)
            if user:
                session['is_login'] = True
                session['phone'] = user[3]
                session['password'] = user[2]
                flash( '登陆成功!')
                return redirect(url_for('index'))
            else:
                flash ( '请检查用户名/密码!')

        return render_template('login.html')
@app.route('/register')
def register():
    if request.method == 'POST':  # 判断是否是 POST 请求
            # 获取表单数据
            phone = request.form.get('phone') 
            password = request.form.get('password')
            print(phone,password)
            # 验证数据
            cursor = db.connection.cursor()
            if not phone or password==False:
                flash('Invalid input.')  # 显示错误提示
                return redirect(url_for('login'))  # 重定向回login页
            # 保存表单数据到数据库
            cur = db.connection.cursor()
            cur.execute('SELECT * FROM user WHERE phone = % s AND password = % s', (phone, password))
            user=cur.fetchone()
            if user==None:
                cur.execute("INSERT INTO User (phone, password) VALUES (%s, %s)", (phone, password))
                db.connection.commit()
                flash("注册成功")
                return redirect(url_for('login'))
    return render_template('register.html')
@app.route(APIPrefix+'/forum')
@login_required
def forum():
    return render_template('forum.html',tag_data=tag_data,content=info_data)

                                                                                                                   
app.run(debug=True,port='3000')