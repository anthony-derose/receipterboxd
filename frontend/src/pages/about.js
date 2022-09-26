import React from 'react';

import '../styles.css'

function About() {

    return (
        <div className='merchant-font'>
            <div className='h1-content'>
            About Receipterboxd
            </div>
            <body>
            <div className='content1'>
                <p>
                Receipterboxd was inspired by <a href='www.instagram.com/albumreceipts'>album receipts</a> on Instagram and <a href='https://receiptify.herokuapp.com/index.html'>Receiptify</a> which is a similiar tool for Spotify.
                It is a tool to display a Letterboxd user's top 10 movies of all time in a receipt based style.  
                </p>
            </div>
            <div className='h2-mid'>
            Why might my receipt might not be displaying correctly?  
            </div>
            <div className='content1'>
                <p>
                Receipterboxd is more of a web scraping tool and does not use Letterboxd's API. It will specifically scrape your diary
                on your Letterboxd account. There might be an issue with your diary or you might not be logging your movies there! You can contact me directly if there is some other issue.
                </p>
            </div>
            <div className='h2-mid'>
            How did you make Receipterboxd?
            </div>
            <div className='content1'>
                <p>
                Receipterboxd is a full stack application using Flask for the backend and React for the frontend. The Flask API I created does
                all of the web scraping in order to get your data from your diary as well as some other functions. I use pandas to scrape and sort films. To create your receipt, 
                I made a template in photoshop which is empty and is populated via my code. To have a final image, I use a DOM to image converter. 
                </p>
            </div>
            <div className='h2-mid'>
            What do you plan for the future?
            </div>
            <div className='content1'>
                <p>
                A couple of things for Receipterboxd. I want to be able to display movies from periods of times such as last month, year, etc. Show receipts of the worst movies you've watched and other factors. And of course updating the style of the receipt and website.
                </p>
            </div>
            </body>
        </div>
    ); 
};

export default About; 