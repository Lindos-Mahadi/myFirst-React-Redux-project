import React, { useState } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Home = (props) =>{
console.warn("home", props.data);
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto home">
                        <h1>I am from Home</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row border p-3">
                            <div className="col-4 col-lg-4">
                            <img src="https://images.unsplash.com/photo-1603237436931-c2203dcac6f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                            alt="mobile" className="img-fluid" style={{height: "150px", width:"100px"}}/>
                            </div>
                            <div className="col-4 col-lg-4 mt-5">
                                <div><span>I-Phone</span></div>
                                <div><span>Price : $1000 </span></div>
                            </div>
                            <div className="col-4 col-lg-4 mt-5">
                            <button 
                            onClick={()=>props.addToCartHandler({price: 1000, name : 'I-phone'})} 
                            className="btn btn-primary ">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;