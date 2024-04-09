import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { AreaChart, Area } from "recharts";

import "./pageViews.scss";

const data = [
  {
    id: 1,
    page: {
      url: "/Defect Arrival Rate",
      pageviews: "872,337 (15.82%)",
      uniquePageviews: "574,332 (15.33%)",
      avgTimeOnPage: "00:05:43",
      entrances: "802,873 (16.75%)",
      exit: "25.96%",
      pageValue: "$1,093 (5.11%)",
    },
  },
  {
    id: 2,
    page: {
      url: "/Fixed Rate",
      pageviews: "654,210 (14.98%)",
      uniquePageviews: "453,678 (12.11%)",
      avgTimeOnPage: "00:04:25",
      entrances: "723,498 (15.12%)",
      exit: "23.45%",
      pageValue: "$987 (4.63%)",
    },
  },
  {
    id: 3,
    page: {
      url: "/Cycle Time",
      pageviews: "543,987 (12.44%)",
      uniquePageviews: "387,123 (10.33%)",
      avgTimeOnPage: "00:03:58",
      entrances: "609,432 (12.73%)",
      exit: "20.87%",
      pageValue: "$789 (3.69%)",
    },
  },
  {
    id: 4,
    page: {
      url: "/Lead Time",
      pageviews: "432,765 (9.89%)",
      uniquePageviews: "312,543 (8.34%)",
      avgTimeOnPage: "00:03:15",
      entrances: "501,234 (10.47%)",
      exit: "18.94%",
      pageValue: "$654 (3.06%)",
    },
  },
  {
    id: 5,
    page: {
      url: "/New Features",
      pageviews: "321,432 (7.35%)",
      uniquePageviews: "234,567 (6.26%)",
      avgTimeOnPage: "00:02:48",
      entrances: "432,543 (9.03%)",
      exit: "15.78%",
      pageValue: "$543 (2.54%)",
    },
  },
  {
    id: 6,
    page: {
      url: "/Ready Features",
      pageviews: "210,987 (4.82%)",
      uniquePageviews: "156,789 (4.18%)",
      avgTimeOnPage: "00:02:10",
      entrances: "356,789 (7.45%)",
      exit: "12.34%",
      pageValue: "$432 (2.02%)",
    },
  },
];

const PageViewTable = () => {
  const theme = useTheme(getTheme());

  return (
    <>
      <div className="tableHeaderContainer">
        <p style={{ color: "black" }}>PAGEVIEWS</p>
        <div className="tableFiltersContainer">
          <div className="buttonsContainer">
            <button className="filterButton">Today</button>
            <button className="filterButton">Yesterday</button>
            <button className="filterButton">Week</button>
            <button className="filterButton">Month</button>
            <button className="filterButton">Quarter</button>
            <button className="filterButton">Year</button>
          </div>
          <select>
            <option>Select period</option>
          </select>
        </div>
      </div>

      {/* <Table data={data} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>
                  <div>
                    <p>Page</p>
                  </div>
                </HeaderCell>
                <HeaderCell>
                  <p>Pageviews</p>
                  <p>356,928</p>
                  <Chart />
                </HeaderCell>
                <HeaderCell>
                  <p>Unique pageviews</p>
                  <p>275,588</p>
                  <Chart />
                </HeaderCell>
                <HeaderCell>
                  <p>Avg.time on page</p>
                  <p>00:03:51</p>
                  <Chart />
                </HeaderCell>
                <HeaderCell>
                  <p>Entrances</p>
                  <p>315,643</p>
                  <Chart />
                </HeaderCell>
                <HeaderCell>
                  <p>% Exit</p>
                  <p>39,84%</p>
                  <Chart />
                </HeaderCell>
                <HeaderCell>
                  <p>Page value</p>
                  <p>$19,983</p>
                  <Chart />
                </HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item.page}>
                  <Cell>{item.page.url}</Cell>
                  <Cell>{item.page.pageviews}</Cell>
                  <Cell>{item.page.uniquePageviews}</Cell>
                  <Cell>{item.page.avgTimeOnPage}</Cell>
                  <Cell>{item.page.entrances}</Cell>
                  <Cell>{item.page.exit}</Cell>
                  <Cell>{item.page.pageValue}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table> */}
    </>
  );
};

export default PageViewTable;

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
        width={200}
        height={100}
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
