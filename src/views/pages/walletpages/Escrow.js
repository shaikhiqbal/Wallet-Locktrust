import React, { useState } from "react";

import {
  TabsFilled,
  SenderEsTable,
  RecievEsTable,
  TransactionTable,
  BuyerTable,
  TradTable,
  SaleTable,
  AddEscrow,
  MultiPartyEscrow,
} from "./components/EScomponent";
import { Card, CardBody, Row, Col, Button, CardHeader } from "reactstrap";
import Modalform from "../admin/component/Modalform";
const TradeEscrow = () => (
  <TabsFilled
    tabs={["Buyer", "Trade", "Seller"]}
    cp={[BuyerTable, TradTable, SaleTable]}
  />
);

function Escrow() {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(0);
  const CP = [AddEscrow, MultiPartyEscrow];

  const toggle = (id) => {
    if (typeof id == "number") setSelectedComponent(id);
    setOpen(!open);
  };

  return (
    <Card>
      <CardHeader>
        <Col xs="12" className="d-flex justify-content-between">
          <div>ESCROW TRANSACTIONS</div>
          <div className="d-flex gap-1">
            <Button color="primary" onClick={() => toggle(0)}>
              Add Escrow
            </Button>
            <Button color="primary" onClick={() => toggle(1)}>
              Multi Party Escrow
            </Button>
            <Button color="primary">Trade Deal</Button>
          </div>
        </Col>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="12">
            <TabsFilled
              tabs={[
                "Sender Escrow",
                "Receiver Escrow",
                "Incpection Escrow",
                "Trade Escrow",
              ]}
              cp={[SenderEsTable, RecievEsTable, TransactionTable, TradeEscrow]}
            />
          </Col>
        </Row>
      </CardBody>
      <Modalform
        open={open}
        toggle={toggle}
        Component={CP[selectedComponent]}
        size="modal-xl"
      />
    </Card>
  );
}

export default Escrow;
