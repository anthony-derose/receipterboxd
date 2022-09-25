from flask_restful import Api, Resource, reqparse
import requests
import pandas 

    
def scrape_diary(username):
    url = f'https://letterboxd.com/{username}/films/diary/'
    
    df_list = pandas.read_html(url)
    df = df_list[0]
    df_edited = df[['Film', 'Released', 'Rating']]

    rows = len(df.index)
    
    # convert rating from unicode to int 
    r_list = []
    for i in range(rows):
        rating = df.at[df.index[i], 'Rating']
        r = len(rating[2:])
        if rating[-1] == '\u00bd':
            r -= .5     
        r_list.append(r)

    df_edited = df_edited.drop('Rating', axis=1)
    df_edited['Rating'] = r_list 
    df_edited = df_edited.sort_values('Rating', ascending=False)   
        
    return df_edited
    
class receipt(Resource):
    
    def get(self, username):
        
        try: 
            df = scrape_diary(username)
            # put data in top 10 json format so 0 : [name, released, rating]
            top10 = []
            for i in range(10):
                film = df.at[df.index[i], 'Film']
                released = int(df.at[df.index[i], 'Released'])
                rating = df.at[df.index[i], 'Rating']

                entry = {   'film' : film,
                            'released' : released,
                            'rating' : rating
                        }
                top10.append(entry)
                
            json_response = {
                'top10' : top10 
            }

            return json_response, 200
        except:
            return {'top10': 'failed'}, 404