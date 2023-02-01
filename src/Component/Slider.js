import React from "react";
import image1 from './images/4.jpg' ;
import image2 from './images/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png' ;
import image3 from './images/eCommerce-Cartoon.png' ;
function Slider(){
    return(
        <>
   <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
        </>
    )
}
export default Slider ;