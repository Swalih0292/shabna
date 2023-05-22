import { useContext } from "react";
import "./Homepage.css";

import Button from 'react-bootstrap/Button';
import AppContext from "../componets/contexts/Appcontext";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const navigateToAhome = () => {
    navigate("/cartpage");
  };
 const {productlist,addtocart} = useContext(AppContext)
  return (
    <div className="home-main-box">
     
      
      <div className="home-sub-main ">
      <div className="cart1-box">
      <button className="cart-click" onClick={navigateToAhome}>cart</button>
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
