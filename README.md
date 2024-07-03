# JNUECAWEB
暨南大学电子商务协会论坛
## 项目结构
(waited to be updated)

- jnueca
  - venv (环境)
  - frontend (前端)
    - src 源码
  - templates (flask模板文件夹)
    - index.html
  - app.py (程序主页)
  - README.md

## TODO
- [x] 留言板前端页面
- [x] Blog-detialed pages
- [x] blog edit pages
- [x] About page 
- [x] sign in cookie and personal profile


## Usage

```commandline
# 克隆项目
git clone https://github.com/JNUECAWEB.git
# 安装依赖，也可使用仓库中环境env/
pip install -r requirements.txt
```
```commandline
# 链接数据库
## 安装请自行安装吧
## 若是第一次在本地运行项目，还需要在数据库中创建数据库和表，请连接到数据库后执行
SOURCE /database_script/setup_database.sql;

# 在app.py中修改数据库连接信息
app.config['MYSQL_PASSWORD'] = os.getenv("db_password", "root") # MySQL密码

# 如果怕自己的数据库密码硬编码，可以用.env文件存储密码，已适配环境变量读取
# .env文件在项目根目录下，格式为： 
db_password=[your_password]
```
```commandline
# 运行后端
python app.py
```

```commandline
# 运行前端
cd frontend
npm install
npm start
```

to be continued...