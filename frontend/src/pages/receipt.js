import React from 'react';

import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { useLocation } from 'react-router-dom';
  
import '../styles.css'

import { useParams } from 'react-router-dom';

import domtoimage from 'dom-to-image';

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
  
    return (
        <div className='merchant-font'>
            Hello!
        </div>
    );
}; 

export default Receipt; 