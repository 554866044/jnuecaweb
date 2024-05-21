from flask import Flask,render_template
from flask import url_for
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
@app.route('/game')
def game():
    return render_template('game.js')
app.run()