import { useContext } from "react";
import "./Homepage.css";
import { auth } from "../firebase/config";
import Button from 'react-bootstrap/Button';
import AppContext from "../componets/contexts/Appcontext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { db } from "../firebase/config";
import { addDoc,collection } from "firebase/firestore";

const Homepage = () => {
  const navigate = useNavigate();
  const navigateTocart = () => {
    navigate("/cartpage");
  };
 const {productlist} = useContext(AppContext)
 const navigation = useNavigate();
 const navigateTohome = () => {
  navigation("/");
 };
 const logout = async () => {
  await signOut(auth);
  alert("Logout Successfully");
  navigateTohome();
  localStorage.removeItem("usertoken")
};
const [prodname, setprodname] = useState("");
  const [prodrate, setprodrate] = useState(0);
  const [url , seturl] = useState("");
  const productcolloctionref = collection(db, "cartitem");
  const userid = localStorage.getItem("userid")
  console.log("useris",userid);
 
const addtocart = async(prod) =>{
  
  setprodname(prod.name)
  setprodrate(prod.rate)
  seturl(prod.url)
  await addDoc(
    productcolloctionref,
    {
      name: prodname,
      rate: prodrate,
      url: url,
      clintid:userid
      
    },
    alert("added to cart")
  );

}

 
  return (
    <div className="home-main-box">
     
      
      <div className="home-sub-main ">
      <div className="cart1-box">
      <button className="cart-click" onClick={navigateTocart}>cart</button>
      <button onClick={logout}>logout</button>
      </div>
    
       
     <div className="maping">
     {
        productlist.map((prod) => (
          <div key={prod.id} className="prod-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="img-box">
              <img src={prod.url} className="img-box" />

            </div>
            <div>
              {prod.name}
            </div>
            <div>
              Rs {prod.rate} /1Kg
            </div>
            <div>
            <Button variant="warning" onClick={() => {addtocart(prod)}}>Add to Cart</Button>{' '}
            </div>
            
           
          
          </div>
        ))
      }
     </div>
              
       </div>
      
</div>
  )
};

export default Homepage;
