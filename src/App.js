import { Route, Routes } from "react-router-dom";
import Adminhome from "./screens/Adminhome";
import Homepage from "./screens/Homepage";
import Login from "./screens/Admin-Loginpage";
import Nav from "./componets/Nav";
import Addproduct from "./screens/Add-product";
import Deleteprod from "./screens/Delete-prod";
import AppContext from "./componets/contexts/Appcontext";
import { db } from "./firebase/config";
import { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import Addtocart from "./screens/Addtocart";
import Mlogin from "./screens/Mlogpage";
import Regpage from "./screens/Regpage";
import { useNavigate } from "react-router-dom";

function App() {
  const navigation = useNavigate();
 const navigateTohome = () => {
  navigation("/");
 };
  const [productlist, setproductlist] = useState([]);

  const productcolloctionref = collection(db, "productlist");
  const getproductlist = async () => {
    const data = await getDocs(productcolloctionref);
    const filterdData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setproductlist(filterdData);
  };

  useEffect(() => {
    getproductlist();
  }, []);

  const [cartitems, setcartitems] = useState([]);
  console.log("ddddd", cartitems);
  
  const usertoken = localStorage.getItem("usertoken");
  if(usertoken === null){
    navigateTohome();
  }
  return (
    <div className="d-felx flex-column">
      <div>
        <Nav />
      </div>
      <div>
        
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Mlogin />} />

          <Route path="regpage" element={<Regpage />} />
        </Routes>
        {
          usertoken&& 
          
        <AppContext.Provider
        value={{
          productlist: productlist,
        
        }}
      >  
          <Routes>
            <Route path="homepage" element={<Homepage />} />
            <Route path="deleteprod" element={<Deleteprod />} />
            <Route
              path="cartpage"
              element={<Addtocart cartitems={cartitems} />}
            />
            <Route path="adminhome" element={<Adminhome />} />
            <Route path="addprod" element={<Addproduct />} />
          </Routes>
          </AppContext.Provider>
        }
      </div>
    </div>
  );
}

export default App;
