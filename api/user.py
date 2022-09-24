from flask_restful import Api, Resource, reqparse
from flask import Flask, request 
import os
import psycopg2

def get_db_connection():
  conn = psycopg2.connect(
          host="localhost",
          database="my_db",
          user='anthony',
          password='antoine')
  return conn

class User(Resource):
    
    def post(self, username):
        
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute('INSERT INTO users (username)'
                        'VALUES (%s)',
                        (username,))
            conn.commit()
            cur.close()
            conn.close()
            
            return {'post' : 'success'}, 201
        except:
            return {'post' : 'failed'}, 409
    
    def get(self, username):
        
        return {'name' : username}