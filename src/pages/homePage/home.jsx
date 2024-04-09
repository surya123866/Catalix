import "./home.scss";
import Rene from "../../assets/Rene 1.png";
import ProgressIndicator from "../../assets/Progress indicator.png";
import playButton from "../../assets/Play button.png";
import Header from "../../components/header/header";
import { useState } from "react";

const instructions = [
  { pageNumber: 1, instruction: "Build your development value stream map" },
  { pageNumber: 2, instruction: "Implement a centralized logging system" },
  { pageNumber: 3, instruction: "Integrate a Continuous Integration pipeline" },
  { pageNumber: 4, instruction: "Design a fault-tolerant caching mechanism" },
  { pageNumber: 5, instruction: "Establish a secure authentication system" },
  { pageNumber: 6, instruction: "Set up a scalable message broker" },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const currentInstruction = instructions.find(
    (item) => item.pageNumber === currentPage
  );
  return (
    <div className="homeContainer">
      <Header />
      <div>
        <div className="homeView1">
          <h1>Setup Calitix for Success</h1>
          <p>
            Get Catalix up to date or start your transformation by following the
            guide below.
          </p>
          <div className="instructionsCard">
            <div>{currentPage}/6</div>
            <h1>{currentInstruction ? currentInstruction.instruction : ""}</h1>
            <div>
              <button
                className="startButton"
                onClick={() => handlePageChange((currentPage % totalPages) + 1)}
              >
                {currentPage === 1 ? "Start Building" : "Next"}
              </button>
            </div>
            <div className="paginationDots">
              {Array.from({ length: totalPages }, (_, index) => (
                <div
                  key={index}
                  className={index + 1 === currentPage ? "activeDot" : "dot"}
                  onClick={() => handlePageChange(index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="homeView2">
          <h1>Get ready to transform</h1>
          <p>
            Here’s a video to get started. As your transformation progresses,
            you’ll get fresh tips and insights here.
          </p>
          <div>
            <img src={Rene} alt="Rene" />
            <img src={ProgressIndicator} alt="ProgressIndicator" />
            <img className="playButton" src={playButton} alt="playbutton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
