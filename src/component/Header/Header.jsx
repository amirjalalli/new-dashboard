import "./Header.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { navbar } from "../../data";
const Header = () => {
  return (
    <div className="navBar">
      <div className="navLink">
        {navbar.map((item) => {
          const { id, title } = item;
          return (
            <a href="#" key={id} className="navItem">
              {title}
            </a>
          );
        })}
      </div>
      <IoIosNotificationsOutline className="notification" />
    </div>
  );
};

export default Header;
