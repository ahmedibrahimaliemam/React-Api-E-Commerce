import axios from "axios";
import React, { useEffect, useState } from "react";
import details from "./details.css"
import { useParams } from "react-router-dom";
function ProductDetails(){
    const params=useParams() ;
    const productLink=`https://fakestoreapi.com/products` ;
    const [unickProduct,setUnickProduct]=useState({}) ;
    useEffect(()=>{
        axios.get(`${productLink}/${params.productId}`).then((res)=>{
            setUnickProduct(res.data) ;
        },[]) ;
    })
    return(
        <>
        <div className="container mt-5 text-center image-container">
            <img className="image" src={unickProduct.image}/>
            <h1>{unickProduct.title}</h1>
            <span>Price: {unickProduct.price}$</span>
            <span>category: {unickProduct.category}</span>
            <p>{unickProduct.description}</p>

        </div>
        </>
    )
}
export default ProductDetails ;