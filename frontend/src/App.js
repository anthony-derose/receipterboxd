import React, { useEffect, useState } from 'react';
import axios from 'axios'

import NavbarElements from './components/NavbarElements';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages';
import Receipt from './pages/receipt'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('https://receipterboxd.herokuapp.com').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <Router>
          <NavbarElements/>
          
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/receipt/:id' element={<Receipt />}/>
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
