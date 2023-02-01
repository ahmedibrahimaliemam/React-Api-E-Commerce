import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import filter from "./filter.css" ;
function Productlist(){
    const dataLink="https://fakestoreapi.com/products" ;
    const [product,setProduct]=useState([]) ;
    const [category,setCategory]=useState([]) ;
    const toGetProducts=()=>{
        axios.get(dataLink).then((response)=>{
            setProduct(response.data)
        })

    }
    const toGetCategory=()=>{
        axios.get(`${dataLink}/categories`).then((response)=>{
            console.log(response.data) ;
            setCategory(response.data) ;
        })

    }
    const productInCategory=(type)=>{
        axios.get(`${dataLink}/category/${type}`).then((response)=>{
            setProduct(response.data) ;
            console.log(response.data) ;
            console.log(product)
        })


    }
    useEffect(()=>{
        toGetProducts() ;
        toGetCategory() ;
       
    },[])
    return(
        <>
        <h2 className="text-center">Our Products</h2>
        <div className="container base">
            <div onClick={()=>{
                toGetProducts() ;
            }} className="btn btn-primary all-products">All Products</div>
            <div className="row filter">
            {
            category.map((ele)=>{
                return (<div onClick={()=>{
                    productInCategory(ele)
                }} className="col-xl-3 col-lg-3 col-sm-1 btn btn-outline-dark" key={Math.random(1)}>{ele}</div>)
                
            })}
            </div>
        <div className="row">
            {product.map((ele)=>{
                return(
            <div className="col-xl-3 col-lg-3 col-sm-1" key={ele.id}>
                <Product data={ele}/>
            </div>
                )
            })}
        </div>
        </div>
     
        </>
    )

}
export default Productlist ;