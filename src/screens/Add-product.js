import Button from "react-bootstrap/Button";
import "./Add-Product.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase/config";

const Addproduct = () => {
  const [prodname, setprodname] = useState("");
  const [prodrate, setprodrate] = useState(0);
  const productcolloctionref = collection(db, "productlist");

  const postdata = async () => {
    await addDoc(
      productcolloctionref,
      {
        name: prodname,
        rate: prodrate,
        url: url
      },
      alert("submit successfully")
    );
    document. location. reload()
  };

  const [image, setimage] = useState(null);
  const [url, seturl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert("CHOOSE THE IMAGE")
        console.log(error);
        
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            seturl(url);
            console.log(url);
          });
      }
    );
  };
  console.log("image", image);
  return (
    <div className="main-prod-box">
      <div className="sub-prodbox">
        <div className="sub1-prodbox">
          <div className="up-photo">
            <img src={url} alt="" className="up-img" />
            <div className="d-flex justify-content-around flex-column">
              <span>Up Load Photo</span>
              <input type="file" onChange={handleChange} />
              <progress value={progress} max="100" />
              <button onClick={handleUpload}> Upload</button>
            </div>
            <div></div>
          </div>

          <div
            className="d-flex flex-column  justify-content-around align-items-center "
            style={{ height: 300 }}
          >
            <div className="d-flex ">
              <span> Product Name:</span>
              <input
                type="text"
                className="prod-input-box v"
                value={prodname}
                onChange={(e) => setprodname(e.target.value)}
              />
            </div>
            <div className="d-flex ">
              <span> Rate (1kg):</span>
              <input
                type="text"
                className="prod-input-box"
                value={prodrate}
                onChange={(e) => setprodrate(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Button on onClick={postdata}>
              {" "}
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addproduct;
