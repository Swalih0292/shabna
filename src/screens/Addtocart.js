import React, { useEffect } from "react";
import AppContext from "../componets/contexts/Appcontext";
import { useContext } from "react";
import "./Addtocart.css";
import { getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addtocart = (props) => {
  

  const [productlist, setproductlist] = useState([]);
  const [firebaseitem, setfirebaseitem] = useState([]);
  
  const productcolloctionref = collection(db, "cartitem");
  const getproductlist = async () => {
    console.log("prodlist", productlist);
    const data = await getDocs(productcolloctionref);
    const filterdData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("filterdData",filterdData);
    setproductlist(filterdData);
    filterData();
    setfirebaseitem(productlist);
  };

  const [idvalue, setidvalue] = useState("");
  useEffect(() => {
    getproductlist();
    const Userid = localStorage.getItem("userid");
    setidvalue(Userid);
  }, []);
  console.log("idvalue", idvalue);

  const [filterdprod, setfilterdprod] = useState([]);
  const filterData = () => {
    console.log("firebaseitem", firebaseitem);
    const filterfrombase = productlist.filter(
      (item) => item.clintid === idvalue
    );
    console.log("filterfrombase", filterfrombase);
    setfilterdprod(filterfrombase);
    console.log("caar", filterdprod);
  };
  const navigate = useNavigate();
  const navigateTohomepage = () => {
    navigate("/homepage");
  };
  console.log("filtered",filterdprod);
  return (
    <div className="add-main-box">
      <div>

      </div>
      <div className="add-sub-box">
      
        {filterdprod.map((item) => (
          <div className="prod-div">
            <div className="add-img">
              <img src={item.url} className="add-img" />
            
            </div>
            <div className="add-detail">
              <span>Name:{item.name}</span>
              <span>
                Rate:RS{item.rate} {""}1/kg
              </span>
            </div>

            {/* <h1>
              name: {item.name}
              rate: {item.rate}
              
            </h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addtocart;
