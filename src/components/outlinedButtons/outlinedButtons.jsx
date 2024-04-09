import "./outlinedButtons.scss";
import { useState } from "react";

const OutlinedButtons = () => {
  const [selectedButton, setSelectedButton] = useState("createReport");

  return (
    <div className="outlinedButtonsContainer">
      {/* Apply conditional class names */}
      <button
        className={selectedButton === "createReport" ? "filled" : "nonFilled"}
        onClick={() => setSelectedButton("createReport")}
      >
        + Create Report
      </button>
      {/* Add onClick handlers to set selectedButton state */}
      <button
        className={selectedButton === "shareDashboard" ? "filled" : "nonFilled"}
        onClick={() => setSelectedButton("shareDashboard")}
      >
        Share this dashboard
      </button>
      <button
        className={selectedButton === "selectDuration" ? "filled" : "nonFilled"}
        onClick={() => setSelectedButton("selectDuration")}
      >
        Select Duration
      </button>
      <button
        className={
          selectedButton === "compareDuration" ? "filled" : "nonFilled"
        }
        onClick={() => setSelectedButton("compareDuration")}
      >
        Compare with Duration
      </button>
    </div>
  );
};

export default OutlinedButtons;
