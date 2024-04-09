import { BiSolidDownArrow } from "react-icons/bi";
import { Area, AreaChart } from "recharts";

import "./lineChart.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartColors = [
  {
    category: "EFFICIENCY",
    conversion: "Euro to US Dollar",
    value: "1.1921",
    variableValue: "+0.0015 (+0.13%)",
    currency: "0.00 USD",
    text: "#ffffff",
    bg: "#8ebae3",
    stroke: "#63a2eb",
    fill: "#83b4db",
  },
  {
    category: "TIME TO MARKET",
    conversion: "Bitcoin to Japanese",
    value: "327,176",
    variableValue: "-97,914.00 (-23.03%)",
    currency: "131,040,723,108 JPY",
    text: "#ffffff",
    bg: "#14817b",
    stroke: "#14a7dc",
    fill: "#055e58",
  },
  {
    category: "TECH DEBT",
    conversion: "Euro to US Dollar",
    value: "1.1763",
    variableValue: "+0.0015 (+0.13%)",
    currency: "0.00 USD",
    text: "#000000",
    bg: "#ffffff",
    stroke: "#feb0b1",
    fill: "#ffe0e5",
  },
  {
    category: "PREDICTIBILITY",
    conversion: "Ethereum Classic to",
    value: "0.00313010",
    variableValue: "-0.00050430 (-13.88%)",
    currency: "1,566 BTC",
    text: "#ffffff",
    bg: "#ff4f52",
    stroke: "#e33b3d",
    fill: "#ee4447",
  },
];

// eslint-disable-next-line react/prop-types
const Chart = ({ chartNumber }) => {
  const currentChart = ChartColors[chartNumber % ChartColors.length];

  return (
    <div
      className="chartContainer"
      style={{ backgroundColor: currentChart.bg }}
    >
      <AreaChart
        width={209.82}
        height={116.16}
        margin={0}
        data={data}
        style={{
          position: "absolute",
          top: "20px",
          borderRadius: "30px",
        }}
      >
        <Area
          dataKey="pv"
          stroke={currentChart.stroke}
          strokeWidth={3}
          fillOpacity={1}
          fill={currentChart.fill}
        />
      </AreaChart>
      <div
        className="dataContainer"
        style={{
          color: `${currentChart.text}`,
        }}
      >
        <h1 className="category">{currentChart.category}</h1>
        <p className="conversion">{currentChart.conversion}</p>
        <div className="valueContainer">
          <p>{currentChart.value}</p>
          <BiSolidDownArrow size={10} />
        </div>
        <p>{currentChart.variableValue}</p>
        <p>{currentChart.currency}</p>
      </div>
    </div>
  );
};
export default Chart;
