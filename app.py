from flask import Flask,render_template
from flask import url_for,request,redirect,flash
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost' # MySQL主机地址
app.config['MYSQL_USER'] = 'root' # MySQL用户名
app.config['MYSQL_PASSWORD'] = 'root' # MySQL密码
app.config['MYSQL_DB'] = 'jnueca' # MySQL数据库名

db = MySQL(app)#连接数据库并创建对象

@app.route('/index')
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/game')
def game():
    return render_template('game.js')
@app.route('/login',methods=['GET','POST'])
def login():
        if request.method == 'POST':  # 判断是否是 POST 请求
            # 获取表单数据
            phone = request.form.get('phone') 
            password = request.form.get('password')
            # 验证数据
            if not phone or password==False:
                flash('Invalid input.')  # 显示错误提示
                return redirect(url_for('login'))  # 重定向回login页
            # 保存表单数据到数据库
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO User (phone, password) VALUES (%s, %s)", (phone, password))
            mysql.connection.commit()
            return redirect(url_for('index'))
        flash('登录成功')
        return render_template('login.html')
app.run()