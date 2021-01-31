import React, { useState } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Header = (props) =>{
console.warn("home", props.data);
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-lg-4"></div>
                    <div className="col-4 col-lg-4"></div>
                    <div className="col-4 col-lg-4">
                        <span>{props.data.length}<AddShoppingCartIcon /></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;