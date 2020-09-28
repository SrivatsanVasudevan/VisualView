import React from 'react';

import '../footer/footer-styles.scss';
import {Link} from "react-router-dom";

const Footer = () => (
    <>
    <div className = "bottomPage">
      <span className = "pageSpaces"> VISUALVIEW.COM </span> 
      <span className = "pageSpaces"> | </span>
      <Link className = "link-bottom-class" to = "/"> <span className = "pageSpaces"> HOME </span> </Link>
      <span className = "pageSpaces">  | </span>
      <Link className = "link-bottom-class" to = "/fizzbuzz"> <span className = "pageSpaces"> FIZZBUZZ </span> </Link>
      <span className = "pageSpaces"> | </span>
      <Link className = "link-bottom-class" to = "/binarysearch"> <span className = "pageSpaces"> BINARY SEARCH </span> </Link>
      <span className = "pageSpaces"> | </span>
      <span className = "pageSpaces"> KADANE's ALGORITHM </span>
    </div>
    </>
);

export default Footer;