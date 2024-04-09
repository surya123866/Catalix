import DirectryCard from "../../components/directryCard/directryCard";
import Header from "../../components/header/header";
import Chart from "../../components/lineChart/lineChar";
import OutlinedButtons from "../../components/outlinedButtons/outlinedButtons";
import PageViewTable from "../../components/pageViewTable/pageViewTable";

import "./analytics.scss";
const data = [
  {
    heading: "OnTime",
    status: true,
    iterations: [
      {
        label: "Completed Iterations",
        value: 7,
        className: "completedIterations",
      },
      { label: "Total Iterations", value: 10, className: "totalIterations" },
      {
        label: "% Iterations Done",
        value: "77.8%",
        className: "percentIterationsDone",
      },
    ],
  },
  {
    heading: "On Scope",
    status: true,
    iterations: [
      {
        label: "Story Points Done",
        value: 32000,
        className: "completedIterations",
      },
      {
        label: "Total Salary Points",
        value: 4230,
        className: "totalIterations",
      },
      {
        label: "% Stories Done",
        value: "70.9%",
        className: "percentIterationsDone",
      },
    ],
  },
  {
    heading: "On Velocity",
    status: false,
    iterations: [
      {
        label: "Average Velocity",
        value: 428.6,
        className: "completedIterations",
      },
      {
        label: "Required Velocity",
        value: 615.0,
        className: "totalIterations",
      },
    ],
  },
];

const Analytics = () => {
  return (
    <div className="contentBodyContainer">
      <Header />
      <OutlinedButtons />
      <div className="chartsContainer">
        <Chart chartNumber={0} />
        <Chart chartNumber={1} />
        <Chart chartNumber={2} />
        <Chart chartNumber={3} />
      </div>
      <div className="directryCardContainer">
        <DirectryCard data={data} />
      </div>
      <div>
        <PageViewTable />
      </div>
    </div>
  );
};

export default Analytics;
