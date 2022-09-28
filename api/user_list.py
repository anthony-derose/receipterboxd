from flask_restful import Api, Resource, reqparse
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
  
class user_list(Resource):
    
  def get(self):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT username FROM users;')
    users_fromdb = cur.fetchall()
    cur.close()
    conn.close()
    
    users = []
    for i in users_fromdb:
      users.append(i[0]) 
    
    return { 'users' : users}