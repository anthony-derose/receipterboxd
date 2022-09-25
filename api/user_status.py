from flask_restful import Api, Resource, reqparse
import requests

class user_status(Resource):
    
  def get(self, username):
    url = f'https://letterboxd.com/{username}/films/diary/'
   
    r = requests.get(url)
    status = r.status_code
    
    if status == 200:
      return {'userestatus': status }, 200
    elif status == 404:
      return {'userestatus': status }, 404
