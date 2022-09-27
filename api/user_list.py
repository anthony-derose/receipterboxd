from flask_restful import Api, Resource, reqparse
import os
import psycopg2

def get_db_connection():
  conn = psycopg2.connect(
          host="localhost",
          database="my_db",
          user='anthony',
          password='antoine')
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