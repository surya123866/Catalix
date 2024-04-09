/* eslint-disable react/prop-types */
import "./directryCard.scss";

const DirectryCard = ({ data = [] }) => {
  return (
    <div className="directoryCardsContainer">
      {data.map((section, index) => (
        <div key={index} className="sectionContainer">
          <div className="headingContainer">
            <p className="heading">{section.heading}</p>
            <div
              style={{
                width: "15.13px",
                height: "15.13px",
                backgroundColor: section.status ? "#26D75A" : "#FF6E66",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="iterationsTextContainer">
            {section.iterations.map((iteration, i) => (
              <div key={i} className="eachIteration">
                <p>{iteration.label}</p>
                <p>{iteration.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectryCard;
