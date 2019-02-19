from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_jsonpify import jsonify

db_connect = create_engine('sqlite:///SnackersDB.db')
app = Flask(__name__)
api = Api(app)


class AllProducts(Resource):
    def get(self):
        conn = db_connect.connect()  # connect to database
        # This line performs query and returns json result
        query = conn.execute("SELECT * FROM products WHERE online='YES' ")
        result = {'products': [dict(zip(tuple(query.keys()), i))
                               for i in query.cursor]}
        return jsonify(result)


class NewProducts(Resource):
    def get(self):
        conn = db_connect.connect()  # connect to database
        # This line performs query and returns json result
        query = conn.execute(
            "SELECT * FROM products WHERE online='YES' AND new='YES' ")
        result = {'products': [dict(zip(tuple(query.keys()), i))
                               for i in query.cursor]}
        return jsonify(result)


class FeauturedProducts(Resource):
    def get(self):
        conn = db_connect.connect()  # connect to database
        # This line performs query and returns json result
        query = conn.execute(
            "SELECT * FROM products WHERE online='YES' AND featured='YES' ")
        result = {'products': [dict(zip(tuple(query.keys()), i))
                               for i in query.cursor]}
        return jsonify(result)


class Categories(Resource):
    def get(self):
        conn = db_connect.connect()  # connect to database
        # This line performs query and returns json result
        query = conn.execute("SELECT DISTINCT category FROM products WHERE online='YES' ")
        result = {'categories': [dict(zip(tuple(query.keys()), i))
                               for i in query.cursor]}
        return jsonify(result)


api.add_resource(AllProducts, '/all_products')  # Route_1
api.add_resource(NewProducts, '/new_products')  # Route_2
api.add_resource(FeauturedProducts, '/featured_products')  # Route_3
api.add_resource(Categories, '/categories')  # Route_4

if __name__ == '__main__':
    app.run(port='5000')