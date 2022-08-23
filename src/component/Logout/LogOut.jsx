import "./LogOut.css";
import { BiLogOut } from "react-icons/bi";
import person from "./../image/person.jpg";

const Logout = () => {
  return (
    <div className="loginSidbar">
      <div className="detailPerson">
        <img src={person} alt="" className="imgperson" />
        <div className="detailName">
          <p>Matthew Perry</p>
          <a href="#">matthew@gmail.com</a>
        </div>
      </div>
      <div>
        <a href="#" className="loginLogout">
          <BiLogOut /> Logout
        </a>
      </div>
    </div>
  );
};

export default Logout;
