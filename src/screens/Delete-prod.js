import Button from "react-bootstrap/Button";
import "./Delete-prod.css";
import { useContext } from "react";
import AppContext from "../componets/contexts/Appcontext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Deleteprod = () => {
  const { productlist } = useContext(AppContext);

  const deleteprod = async (id) => {
    const prodDoc = doc(db, "productlist", id);
    await deleteDoc(prodDoc);
    alert("delete successfully");
    document.location.reload();
  };
  return (
    <div className="home-main-box">
      <div className="home-sub-main">
        {productlist.map((prod) => (
          <div
            key={prod.id}
            className="prod-box shadow p-3 mb-5 bg-body-tertiary rounded"
          >
            <div className="img-box">
              <img className="img-box" src={prod.url} alt="" />
            </div>
            <div>{prod.name}</div>
            <div>Rs {prod.rate} /1Kg</div>
            <div>
              <Button variant="warning" on onClick={() => deleteprod(prod.id)}>
                Delete
              </Button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deleteprod;
