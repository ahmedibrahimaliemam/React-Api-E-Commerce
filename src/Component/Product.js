import React from "react";
import productlist from './productlist.css' ;
import { Link } from "react-router-dom";
function Product(props){
    const {data}=props ;
    return(
        <>
<div className="card card-height">
  <img src={data.image} className="card-img-top img-height" alt={data.title}/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text desc-height">{data.description}</p>
    <Link to={`/product/${data.id}`}><div className="btn btn-primary edit-btn">Details</div></Link>
  </div>
</div>
 </>
    )
}
export default Product ;