import React from 'react';
import Fetching from './components/Fetching'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Loading from './Loading';
import Nav from './Nav';
import StarshipCard from './StarshipCard';
import Home from './Home'


  
function App() {
  return( 
    <div className="App">
      <Fetching/>
      
      </div>
       )
      }
      
  <BrowserRouter>
    <Nav/>
    <Routes> 
    <link href='https://fonts.googleapis.com/css?family=Bree+Serif|Cutive|Ultra' rel='stylesheet'></link> 
        <Route path='/' element={<Fetching/>}/> 
        <Route path='Home' element={<Home />}/>
        <Route path="StarshipCard"element= {<StarshipCard/>}/>

         </Routes>
   
     </BrowserRouter> 
     export default App;