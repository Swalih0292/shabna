import React, { useEffect } from "react";
import AppContext from "../componets/contexts/Appcontext";
import { useContext } from "react";
import './Addtocart.css'
import { getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { collection } from "firebase/firestore";
import { useState } from "react";

 


const Addtocart = (props) => {
    const [productlist, setproductlist] = useState([]);

  const productcolloctionref = collection(db, "cartitem");
  const getproductlist = async () => {
    const data = await getDocs(productcolloctionref);
    const filterdData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setproductlist(filterdData);
    filteredData()
  };
  useEffect(()=>{
    getproductlist()
    
    
  },[])
  
  const id = localStorage.getItem("userid")
  console.log("id",id);
  const [fireitem , setfireitem] = useState([]);
  const filteredData = () =>{
    setfireitem(productlist)
    const fiter = fireitem.filter(item => item.userid===id)
    console.log("filter",fiter);
  }
 
  
  console.log("prodlist",productlist);
  console.log("fire",fireitem);
 
    
    return(
    
        
        <div>
            <button onClick={getproductlist}></button>
            
        </div>
        
           )
} 

export default Addtocart;