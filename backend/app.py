from flask import Flask
from flask_cors import CORS
from routes import users, appointment
from routes import users, document
from db.postgresql.model import db

app = Flask(__name__)

CORS(app, support_credentials=True)
db.init_app(app)

# User routes
app.add_url_rule(users['signin'], view_func=users['view_func_signin'])
app.add_url_rule(users['login'], view_func=users['view_func_login'])

app.add_url_rule(appointment['appointment'], view_func=appointment['view_func_appointment'])
# Documents route
   