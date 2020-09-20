import React from 'react';


import '../homepage/homepage-styles.scss';

const HomePage = () => (
    <>
    <h1> Welcome to VisualView! </h1>

    <div className = "homepage-container">
        Have you ever wanted to visualize coding interview questions just to get a better understanding
        on how to actually solve them? You have arrived at the right place!
    </div>
    <div className = "websitePerks">
        Here are some cool things you'll find in this website!
    </div>
        <ul>
            <span className = "listItems"> Easy coding question problemsets! </span>
            <span className = "listItems"> Intuitive visualizations! </span>
            <span className = "listItems"> Help in improving your learning process! </span>
            <span className = "listItems"> Making coding interview prep fun! </span>
        </ul>
        <br /> 
    
    
    <div className = "homepage-container">
        VisualView.com helps in visualizing basic coding interview questions to help in your
        preparation process and provide a new perspective to preparing for coding interviews! 
    </div>
    </>
);

export default HomePage;