import "./Main.css";
import { FiEdit3 } from "react-icons/fi";
import { weeks } from "../../data";
import Line from "./../Line/Line";

const Main = ({ id, title }) => {
  return (
    <section className="main-data">
      <div key={id} className="mainDataTitle">
        <h2>{title}</h2>
        <FiEdit3 className="icon" />
      </div>
      <div className="dayContent">
        {weeks.map((day) => {
          return (
            <p key={day.id} className="border">
              {day.day}
            </p>
          );
        })}
      </div>
      <Line />
    </section>
  );
};

export default Main;
