import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Main from "../component/Main/Main";

const Factory = () => {
  const title = [
    { id: 1, title: "Morning | 7:00 AM - 2:00 PM" },
    { id: 2, title: "Afternoon | 2:00 PM - 9:00 PM" },
    { id: 3, title: "Night | 9:00 PM - 4:00 AM" },
  ];

  return (
    <article className="main-content">
      <section className="main-header">
        <div className="main-header-text">
          <BsArrowLeft />
          <p>Manage Shifts</p>
        </div>
        <button className="btn">+ Add Shift</button>
      </section>
      <section className="main">
        <Main id={title[0].id} title={title[0].title} />
        <Main id={title[1].id} title={title[1].title} />
        <Main id={title[2].id} title={title[2].title} />
      </section>
    </article>
  );
};

export default Factory;
