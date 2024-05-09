import React, { useContext, useState } from "react";
import { Activity, AlertOctagon, Cpu, Server } from "react-feather";

import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";
import { Col, Row } from "reactstrap";

import RevenueReport from "../../../ui-elements/cards/analytics/RevenueReport";

// ** Styles
import { ThemeColors } from "@src/utility/context/ThemeColors";
import "@styles/react/libs/charts/apex-charts.scss";
import StatsVertical from "@components/widgets/stats/StatsVertical";

import Modalform from "./Modalform";

import {C2,C1,DataTable} from "./CP"


const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggle = () => {
    setOpen(!open);
  };
  // ** Context
  // ** Context
  const context = useContext(ThemeColors);
  const cardList = [
    {
      t: "Total Balance",
      c: [
        {
          t: "Wallet Balance ",
          m: 100,
        },
        {
          t: "Cash in hand ",
          m: 100,
        },
        {
          t: "Bank Balance",
          m: 100,
        },
        {
          t: "Prepard Card",
          m: 100,
        },
      ],
    },
  ];
  return (
    <>
      <Row>
        {/* Stats With Icons Horizontal */}
        <Col lg="3" sm="6" onClick={toggle}>
          <StatsHorizontal
            icon={<Cpu size={21} />}
            color="primary"
            stats="400"
            statTitle="Total Balance"
          />
        </Col>
        <Col lg="3" sm="6" onClick={toggle}>
          <StatsHorizontal
            icon={<Server size={21} />}
            color="success"
            // stats="1000"
            statTitle="ADD/ReceivedMoney"
          />
        </Col>
        <Col lg="3" sm="6" onClick={toggle}>
          <StatsHorizontal
            icon={<Activity size={21} />}
            color="danger"
            // stats="230"
            statTitle="Send/ Withdraw Money"
          />
        </Col>
        <Col lg="3" sm="6" onClick={toggle}>
          <StatsHorizontal
            icon={<AlertOctagon size={21} />}
            color="warning"
            // stats="13000"
            statTitle="Money Manager"
          />
        </Col>

        <Col sm="12">
          <RevenueReport
            primary={context.colors.primary.main}
            warning={context.colors.warning.main}
          />
        </Col>
      </Row>
      <Modalform open={open} toggle={toggle} Component={C2} />
    </>
  );
};

export default UserManagement;
