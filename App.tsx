import React from 'react';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home} from './components/nav/Home'

import { Login } from './components/nav/Login'

import { Contact } from './components/nav/Contact';

import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';


 function App() {

return(

    <div className="App">

    <Router>
    <Routes>
         
      < Route path ="/" element ={ <Home />}/>
      
      < Route path ="/User" element ={ <Login />}/>
     
      <Route path ="/Contact" element ={ <Contact />}/>
    </Routes>
    </Router>
    <UserContextProvider><User /></UserContextProvider>

</div>

)
}

export default App;
