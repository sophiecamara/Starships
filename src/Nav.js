import React from "react";
import {Link} from "react-router-dom"
function Nav(){
    return(
        
        <nav>
       <header>
     <ul className='nav-links' >
         <Link to ='/'>
         <li>
            Home
         </li>
         </Link>
         <Link to='Fetching'>
         <li>
           starship
         </li>
         </Link>
         <Link to='StarshipCard'>
         <li>
           starshipCard
         </li>
         </Link>
     </ul>
    </header>
    </nav>
    )
}
export default Nav;