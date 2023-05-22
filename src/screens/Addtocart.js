import React from "react";
import AppContext from "../componets/contexts/Appcontext";
import { useContext } from "react";
import './Addtocart.css'

 


const Addtocart = (props) => {
    console.log("props",props);
    const maped = props;
    console.log("maped", maped);
    
    return(
    
        
        <div>
            <span>
                halo
            </span>
            <div className="add-main-box">
            {
                maped.cartitems?.map((item) => {
                    <div className="add-sub-box">
                       
                       
                       <h1>{item.name}</h1>
                       <h1> {item.rate}</h1>
                       
                        <span>halo</span>
                    </div>
                })
            }
            <span>
                halo
            </span>
            </div>
        </div>
        
           )
} 

export default Addtocart;