import React from "react";
import about from "./about.css" ;
import { Link } from "react-router-dom";
function About(){
    return(
        
        <div className="wrap-content">
        <h1 className="bg-primary text-center height">We Seek To Make Shopping Easy</h1>
       <Link to="/"><div className="btn btn-primary about-btn">Click Her To See Our Products</div></Link>

        </div>
    )
}
export default About ;