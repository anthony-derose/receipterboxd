import React from 'react';

import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { useLocation } from 'react-router-dom';
  
import '../styles.css'

import { useParams } from 'react-router-dom';

import domtoimage from 'dom-to-image';

import receiptImage from '../receipt_edited2.png';

// TODO
// RESPONSIVE DESIGN

function Receipt() {
    const {id} = useParams(); 
    const [profileData, setProfileData] = useState(null); 
    const {state} = useLocation(); 
    //console.log(state, 'my state')
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const ref = useRef(null);

    useEffect(() => {
        function getRecieptJSON(username) {
            axios({
              method: 'GET',
              url: `/receipt_scrape/${username}`,
              params: {'username': username}
            }).then((response) => {
              const res = response.data; 
              if (profileData == null) {
                setProfileData(({
                  top10 : res.top10
              }))
              }
              console.log(profileData.top10)
  
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })}
  
        getRecieptJSON(state.navName); 
        const el = document.getElementById('my-receipt');
        console.log(el);
      },  [profileData]); 
  
    function downloadImage() {
        domtoimage.toJpeg(document.getElementById('my-receipt'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-receipt.jpeg';
            link.href = dataUrl;
            link.click()
          })
      }

    return (
        <div>
            <div className='merchant-font'>
                <h1 className='h1-mid'>Receipterboxd</h1>
                <h2 className='h2-mid'>Generate Your Top Movies!</h2>
            </div>

            <div className='receipt-overall' id='my-receipt'>

            <img src={receiptImage} alt="receipt" className='receipt-image'/>

            <div className='receipt-table'>

                <div className='receipt-title'>
                {state.navName}
                </div>

                <div className='receipt-top'>
                ---------------------------------------------------------------<br/>
                QTY ITEM <span className='amt'>AMT</span> <br/>
                ---------------------------------------------------------------
                </div>

                {profileData && <div>
                {profileData.top10.map((film, i) => <div className='user-data' key={i}>
                <div>{('00'+(i+1)).slice(-2)}</div>
                <div className='user-films'>{film.film}</div>
                <div>{film.rating.toFixed(2)}</div>
                </div>)}
                </div>  
                }
                <div className='receipt-top'>
                ---------------------------------------------------------------<br/>
                ITEM COUNT: <span className='amt'>10.00</span>
                <div className='total'>TOTAL: 
                <span className='total-amt'>{profileData && profileData.top10.reduce( (sum, current) => (sum+current.rating), 0.0).toFixed(2)}</span>
                </div>
                ---------------------------------------------------------------

                <div className='receipt-top'>
                    ACCT NUM: XXXXXXXXXXXX1234	<br/>
                    AUTH CODE: 5678910	<br/> 
                    CARDHOLDER:	        <span className='amt'>{state.navName}</span> <br/>
                    DATE:	        <span className='amt'>{date}</span> 
                    <div className='thank-you'> THANK YOU FOR VISITING!</div> 
                </div>
                </div>

            </div>

            </div>

            <button className='button-style' onClick={downloadImage}>
                Download 
            </button>
        </div>
        );
}; 

export default Receipt; 