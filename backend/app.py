from flask import  Flask
from flask_cors import CORS
from routes import users
from db.postgresql.model import db

app = Flask(__name__)

CORS(app, support_credentials = True)
db.init_app(app)

# User routes
app.add_url_rule(users['signin'], view_func=users['view_func_signin'])


# Appointments route
