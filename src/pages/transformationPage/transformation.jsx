import Header from "../../components/header/header";
import "./transformation.scss";
import ArrowBg from "../../assets/Group 264.png";
import TimeCircle from "../../assets/Time Circle.png";
import Arrow from "../../assets/Arrow 8.png";
import Plus from "../../assets/Plus.png";
import { useState } from "react";

const Transformation = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      content: "Approve Content",
      waitingTime: "1 Day",
      activeTime: "2 Weeks (wait for availability)",
    },
    {
      id: 2,
      content: "Create Content",
      waitingTime: "2 Days",
      activeTime: "1 Week (wait for approval authority)",
    },
    {
      id: 3,
      content: "Approve Content",
      waitingTime: "4 Hours",
      activeTime: "2 Weeks (wait for IT support)",
    },
    {
      id: 4,
      content: "Run Sample Test",
      waitingTime: "4 Hours",
      activeTime: "1 Week (wait for test response)",
    },
    {
      id: 5,
      content: "Launch Full Campaign",
      waitingTime: "1 Day",
      activeTime: "",
    },
  ]);
  const addItem = () => {
    const newItem = { id: items.length + 1, content: "Approve Content" };
    setItems([...items, newItem]);
  };

  const timeScopes = [
    { type: "Flow time", time: "47 Days" },
    { type: "Total Active time", time: "5 Days" },
    { type: "Flow Efficiency", time: "11%" },
  ];

  return (
    <div className="transformationContainer">
      <Header />
      <ul className="timeLineContainer">
        {items.map((item) => (
          <li key={item.id} className="timeLineItem">
            <div style={{ position: "relative" }}>
              <img
                src={ArrowBg}
                alt="ArrowBg"
                style={{ width: "100%", height: "auto" }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "15px",
                  margin: 0,
                  padding: "20px",
                  color: "white",
                }}
              >
                {item.content}
              </p>
            </div>
            <img src={TimeCircle} alt="TimeCircle" />
            <img src={Arrow} alt="Arrow" />
          </li>
        ))}
        <img src={Plus} alt="Plus" />
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>Waiting Time</p>
        <div style={{ width: "90%" }}>
          <hr />
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            {items.map((each, index) => (
              <div key={index}>
                <p>{each.waitingTime}</p>
              </div>
            ))}
          </ul>
          <hr />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>Active Time</p>
        <div style={{ width: "90%" }}>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            {items.map((each, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#F1F7ED",
                  width: "134.28px",
                  height: "100.51px",
                  padding: "10px",
                }}
              >
                <p>{each.activeTime}</p>
              </div>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{"<"}</span>
            <hr className="styledHr" />
            <span>{">"}</span>
          </div>
        </div>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontWeight: "600",
          fontSize: "18.85px",
          lineHeight: "19.63px",
          color: "#575757",
        }}
      >
        {timeScopes.map((scope, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            {scope.type} = {scope.time}
          </li>
        ))}
      </ul>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <button className="saveButton">Save</button>
      </div>
    </div>
  );
};

export default Transformation;
