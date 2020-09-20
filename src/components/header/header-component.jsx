import React from 'react';
import {Link} from 'react-router-dom';
import '../header/header-styles.scss';


const Header = () => (
    <>
    <div className = "topPage">
    <h1 className = "header-container"> 
        <Link className = "link-class" to = "/">VISUALVIEW</Link>
    </h1>
    <span className = "subTitle">Visualizing the Common Coding Questions</span>
    <br />
        
        <Link to = "/"> <span className = "tabSpace"> HOME  </span> </Link>
        <Link to = "/fizzbuzz"> <span className = "tabSpace"> FIZZBUZZ </span> </Link>   
        <span className = "tabSpace"> ABOUT </span>
            
        

    </div>
    </>
);

export default Header; 