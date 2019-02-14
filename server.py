from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_jsonpify import jsonify

db_connect = create_engine('sqlite:///sarnow.db')
app = Flask(__name__)
api = Api(app)

class Products(Resource):
    def get(self):
        conn = db_connect.connect() # connect to database
        query = conn.execute("select * from products") # This line performs query and returns json result
        result = {'products': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        return jsonify(result)
        

api.add_resource(Products, '/products') # Route_1

if __name__ == '__main__':
     app.run(port='5000')
     