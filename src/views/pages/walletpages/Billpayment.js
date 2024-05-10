import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import StatsHorizontal from "../../../@core/components/widgets/stats/StatsHorizontal";
import { Cpu, Server } from "react-feather";

function Billpayment() {
  const [open, setOpen] = useState(false);
  const toggle = (id) => {
    if (typeof id == "number") setOpen(!open);
  };
  return (
    <>
      <Row>
        {/* Stats With Icons Horizontal */}
        <Col lg="3" sm="6" onClick={() => toggle(0)}>
          <StatsHorizontal
            icon={<Server size={21} />}
            color="success"
            // stats="1000"
            statTitle="Bill Payment"
          />
        </Col>
      </Row>
    </>
  );
}

export default Billpayment;
