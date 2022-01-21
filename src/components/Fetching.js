import React, {useState, useEffect} from "react";
import axios from 'axios'

function Fetching () {
    const[starships, setStarships]= useState([])
    const[planets,setPlanets]= useState([])

    useEffect(()=>{
    axios.get("https://swapi.dev/api/starships/")

    .then(response=>{
        console.log(response)
         setStarships(response.data.results)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])

useEffect(()=>{
    axios.get("https://swapi.dev/api/planets/")

    .then(response=>{
        console.log(response)
         setPlanets(response.data.results)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])

    return(
   <div>
<h1>Starships</h1>
<ul className="starships">
    {
    starships.map (starship => <li key={starship.id} className="starship">{starship.name}<br/>{starship.model}</li>)    
    }  
   </ul>  
        
        <ul className="planets">
        {
     planets.map(planet => <li key={planet.id}className="plamodel" >{planet.name}<br/>{planet.model}</li>)    
       }  
        </ul>
    </div>
    
    )
}
export default Fetching;