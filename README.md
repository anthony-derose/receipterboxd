# RECEITERBOXD https://receipterboxd.herokuapp.com/

I developed a full stack appilication which does a couple things. Firstly, I developed a Flask backend which acts as an API to webscrape the Letterboxd website for user data. This then sorts data using pandas (currently we only sort our top 10 rated movies). There is also RESTful operations at work that allow our frontend to make requests to our backend, such as posting a new user, getting information etc. This backend is connected to a PostgreSQL database which stores usernames of users. It is deployed in heroku. 

For the frontend, a user lands on the home page where they see a basic nav bar with a home, about, and contact. Underneath, we have a search bar where we put in our username, and then we have a list of recent users with links to their letterboxd receipts. Once a user enters, a receipt like image is generated of their top movies in which they can download. 

You can view an example of one of my generated images here:

![my-receipt (9)](https://user-images.githubusercontent.com/63480025/192732991-4c0ae836-65c0-4716-9618-8d1e12add43c.jpeg)

You can actually use the website here: https://receipterboxd.herokuapp.com/ 


