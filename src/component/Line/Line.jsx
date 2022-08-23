import "./Line.css";
import { FaEllipsisV } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { person } from "../../data";
const Line = () => {
  return (
    <div className="lineContent">
      <div className="lineHeader">
        line1
        <FaEllipsisV />
      </div>
      <div className="lineData">
        <ul className="lineItems">
          {person.map((per) => {
            const { id, name, object } = per;
            return (
              <li className="lineItem" key={id}>
                <CgProfile className="icon" /> {name} <span>{object}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Line;
