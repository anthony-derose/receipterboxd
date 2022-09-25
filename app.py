from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

import os 

from api.user_status import user_status
from api.receipt import receipt
from api.user import User
from api.user_list import user_list

app = Flask(__name__, static_url_path='', static_folder='frontend/build/')
#cors = CORS(app) # comment on prod 
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(user_status, '/user_status/<string:username>')
api.add_resource(receipt, '/receipt/<string:username>')
api.add_resource(User, '/user/<string:username>')
api.add_resource(user_list, '/user_list')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)