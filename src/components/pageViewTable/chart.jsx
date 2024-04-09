import {
  AreaChart,
  Area,
} from "recharts";

const Chart = () => {
   const data = [
     { name: "Page A", pv: 2400 },
     { name: "Page B", pv: 1398 },
     { name: "Page C", pv: 9800 },
     { name: "Page D", pv: 3908 },
     { name: "Page E", pv: 4800 },
     { name: "Page F", pv: 3800 },
     { name: "Page G", pv: 4300 },
     { name: "Page H", pv: 2400 },
     { name: "Page I", pv: 1398 },
     { name: "Page J", pv: 9800 },
     { name: "Page K", pv: 3908 },
     { name: "Page L", pv: 4800 },
     { name: "Page M", pv: 3800 },
     { name: "Page N", pv: 4300 },
     { name: "Page O", pv: 2400 },
     { name: "Page P", pv: 1398 },
     { name: "Page Q", pv: 9800 },
     { name: "Page R", pv: 3908 },
     { name: "Page S", pv: 4800 },
     { name: "Page T", pv: 3800 },
     { name: "Page U", pv: 4300 },
   ];


  return (
    <div>
      <AreaChart
        width={230}
        height={150}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4592FF" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          dataKey="pv"
          stroke="#539BBB"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
