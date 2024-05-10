// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
  ListGroup,
  ListGroupItem,
  Badge,
  Input,
} from "reactstrap";
import { RefreshCcw } from "react-feather";

const RevenueReport = (props) => {
  // ** State
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/card/card-analytics/revenue-report")
      .then((res) => setData(res.data));
    return () => setData(null);
  }, []);

  const revenueOptions = {
      chart: {
        stacked: true,
        type: "bar",
        toolbar: { show: false },
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10,
        },
        yaxis: {
          lines: { show: false },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          style: {
            colors: "#b9b9c3",
            fontSize: "0.86rem",
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: "17%",
          borderRadius: [5],
        },
        distributed: true,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#b9b9c3",
            fontSize: "0.86rem",
          },
        },
      },
    },
    revenueSeries = [
      {
        name: "Earning",
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
      },
      {
        name: "Expense",
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
      },
    ];

  const budgetSeries = [
      {
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62],
      },
      {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27],
      },
    ],
    budgetOptions = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: "line",
        sparkline: { enabled: true },
      },
      stroke: {
        curve: "smooth",
        dashArray: [0, 5],
        width: [2],
      },
      colors: [props.primary, "#dcdae3"],
      tooltip: {
        enabled: false,
      },
    };

  const tableData = {
    "United Arab Emirates Dirhams - AED": 3.672925,
    "Australia Dollars - AUD": 1.520358,
    "Canada Dollars – CAD": 1.37275,
    "China Yuan Renminbi - CNY": 7.226297,
    "Euro - EUR": 0.931465,
    "United Kingdom Pounds - GBP": 0.80025,
    "India Rupees - INR": 83.507503,
    "Japan Yen - JPY": 155.902022,
    "Singapore Dollars - SGD": 1.356351,
  };

  return data !== null ? (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="8" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">Transaction Report</CardTitle>
            <CardTitle className="mb-50 mb-sm-0">
              <Input type="select">
                <option>Select</option>
                <option>This Month </option>
                <option> 3 Month</option>
                <option>6 Month </option>
                <option>9 Month </option>
                <option>1 Year </option>
                <option>Custome </option>
              </Input>
            </CardTitle>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center me-2">
                <span className="bullet bullet-primary me-50 cursor-pointer"></span>
                <span>Income</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="bullet bullet-warning me-50 cursor-pointer"></span>
                <span>Expense</span>
              </div>
            </div>
          </div>
          <Chart
            id="revenue-report-chart"
            type="bar"
            height="230"
            options={revenueOptions}
            series={revenueSeries}
          />
        </Col>
        <Col className="budget-wrapper" md="4" xs="12">
          <div className="d-flex justify-content-end">
            <RefreshCcw size={"14"} className="mb-2 cursor-pointer" />
          </div>
          <CardTitle className="mb-50 mb-sm-0">
            Currency Exchange Rate
          </CardTitle>
          <ListGroup>
            {Object.keys(tableData).map((el) => (
              <ListGroupItem className="d-flex justify-content-between align-items-center">
                <span>{el}</span>
                <Badge color="primary" pill>
                  {tableData[el]}
                </Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Card>
  ) : null;
};

export default RevenueReport;
