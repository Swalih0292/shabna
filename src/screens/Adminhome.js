import "./Adminhome.css";
import Button from "react-bootstrap/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Adminhome = () => {
  const navigate = useNavigate();
  const navigateTohome = () => {
    navigate("/");
  };

  const logout = async () => {
    await signOut(auth);
    alert("Logout Successfully");
    navigateTohome();
    localStorage.removeItem("usertoken")
  };

  console.log(auth);
  return (
    <div className="mainhome">
      <div className="subhome shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="d-flex flex-row justify-content-around">
          <span className="notefi">Notification</span>         
          <Dropdown>
            <Dropdown.Toggle className="menu-drop">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/addprod">Add a Product</Dropdown.Item>
              <Dropdown.Item href="/deleteprod">Delete a Product</Dropdown.Item>
              <Dropdown.Item href="" onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Adminhome;
