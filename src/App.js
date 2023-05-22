import { Route, Routes } from "react-router-dom";
import Adminhome from "./screens/Adminhome";
import Homepage from "./screens/Homepage";
import Login from "./screens/Loginpage";
import Nav from "./componets/Nav";
import Addproduct from "./screens/Add-product";
import Deleteprod from "./screens/Delete-prod";
import AppContext from "./componets/contexts/Appcontext";
import { db } from "./firebase/config";
import { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import Addtocart from "./screens/Addtocart";

function App() {
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

  const [cartitems,setcartitems] = useState([]);
  console.log("ddddd",cartitems);
  const addtocart = (product) => {
    setcartitems([...cartitems,product])
  }
  return (
    <div className="d-felx flex-column">
      <div>
      
        <Nav />
      </div>
      <div>
        <AppContext.Provider
          value={{
            productlist: productlist,
            addtocart,
            
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="deleteprod" element={<Deleteprod />} />
            <Route path="cartpage" element={<Addtocart cartitems={cartitems} />}/>
          </Routes>
        </AppContext.Provider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="adminhome" element={<Adminhome />} />
          <Route path="addprod" element={<Addproduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
