import Fetching from "./components/Fetching";
import Loading from "./Loading";
import React from 'react';
import './App.css';

function StarshipCard (props) {   

    return (
      <div className='starship'>
        
          <p className='title'> {props.starship.name} </p>
         
          <span className='property'> {props.starship.model} </span>
          </div>
    )}
export default StarshipCard;


