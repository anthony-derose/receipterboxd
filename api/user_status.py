from flask_restful import Api, Resource, reqparse
import requests

class user_status(Resource):
    
  def get(self, username):
    url = f'https://letterboxd.com/{username}/films/diary/'
   
    r = requests.get(url)
    status = r.status_code
    
    json_response = {
        'userestatus': status 
    }
    return json_response