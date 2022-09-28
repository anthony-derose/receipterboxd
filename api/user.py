from flask_restful import Api, Resource, reqparse
from flask import Flask, request 
import os
import psycopg2

def get_db_connection():
  conn = psycopg2.connect(
          host="ec2-44-207-253-50.compute-1.amazonaws.com",
          database="d7gro9lm48k1ee",
          user='qvurpggflbstyh',
          password='7cd16cffef1204303b0250d7a28d45074dea93c0371dcf37684771fc3d796f0d',
          port='5432') 
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