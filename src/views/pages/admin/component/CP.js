import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Collapse,
  Form,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
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

export const WiresCp = () => {
  const bankDetails = {
    "Name on Account": "LockTrust",
    "Bank Name": "Locktrust Bank",
    Address: "Locktrust Address",
    City: "SALT LAKE",
    State: "UTHA",
    "Account Number": "LOCK TRUST NUMBER",
    "Routing Number": "LOCK TRUST ROUTING",
  };

  return (
    <Row>
      <Col className="budget-wrapper" md="12" xs="12">
        <ListGroup>
          {Object.keys(bankDetails).map((el) => (
            <ListGroupItem className="d-flex justify-content-between align-items-center">
              <span>{el}</span>
              {/* <Badge color="primary" pill> */}
              {bankDetails[el]}
              {/* </Badge> */}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export const CardTable = () => {
  return (
    <Row>
      <Col xs="12">Add Card</Col>

      <Col xs="12">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Card Number</th>
              <th>Expiry</th>
              <th>Name On Card</th>
              <th>Type Of Card</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4111-xxxx-xxxx-1111</td>
              <td>Jun - 2031</td>
              <td>Gaurav Nerkar</td>
              <td>Debit Card</td>
              <td className="d-flex gap-1">
                <Badge color="info">Load</Badge>
                <Badge color="warning">UnLink</Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export const DepCheck = () => {
  return (
    <Card>
      <CardBody>
        <Form>
          <Row className="mb-1">
            <Label sm="3" for="name">
              Customer Type: *
            </Label>
            <Col sm="9" className="d-flex gap-2">
              <div>
                <Input type="radio" name="name" id="name" defaultChecked />
                <Label>Individual</Label>
              </div>
              <div>
                <Input type="radio" name="name" id="name" />
                <Label>Company</Label>
              </div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="name">
              First Name
            </Label>
            <Col sm="9">
              <Input type="text" name="name" id="name" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Label sm="3" for="Email">
              Last Name
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Date Of Birth :(mm/dd/yy)
            </Label>
            <Col sm="9">
              <Input type="date" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Address
            </Label>
            <Col sm="9">
              <Input type="textarea" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              City
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              State/Province
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Country
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Post/Zip Code
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Bank Name
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Account Number
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Tpe Of Account
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Routing Number
            </Label>
            <Col sm="9">
              <Input type="text" name="Email" id="Email" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="Email">
              Upload Bank Statement or Void Check
            </Label>
            <Col sm="9">
              <Input type="file" name="Email" id="Email" />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex" md={{ size: 9, offset: 3 }}>
              <Button
                className="me-1"
                color="primary"
                type="submit"
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </Button>
              <Button outline color="secondary" type="reset">
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

const VoucherTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Row>
      <Col xs="12">
        <Table>
          <thead>
            <tr>
              <th>Voucher No.</th>
              <th>Amount</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ZRKQCw23iyX3GIGK</td>
              <td>112</td>
              <td>
                <Button color="primary" className="btn-sm" onClick={toggle}>
                  Transfer
                </Button>
              </td>
              <td>
                <Button color="secondry" className="btn-sm">
                  Redeem
                </Button>
              </td>
            </tr>
            <tr>
              <td>sT1Cpa3CzASUDW1J</td>
              <td>123</td>
              <td>
                <Button color="primary" className="btn-sm" onClick={toggle}>
                  Transfer
                </Button>
              </td>
              <td>
                <Button color="secondry" className="btn-sm">
                  Redeem
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col xs="12" className="p-4">
        <Collapse isOpen={isOpen}>
          <div>
            <h4>Voucher Transfer</h4>
          </div>
          <Row className="mb-1">
            <Label sm="3" for="name">
              Transfer to
            </Label>
            <Col sm="9">
              <Input type="text" name="name" id="name" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="name">
              Amount
            </Label>
            <Col sm="9">
              <Input
                type="text"
                value={45}
                disabled={true}
                name="name"
                id="name"
              />
            </Col>
          </Row>
          <Row className="mb-1">
            <Label sm="3" for="name">
              Descripation
            </Label>
            <Col sm="9">
              <Input type="textarea" name="name" id="name" />
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-2">
            <Button color="danger">Submit</Button>
            <Button color="secondry" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </Collapse>
      </Col>
    </Row>
  );
};

const QR = () => (
  <div className="d-flex flex-column justify-content-center align-items-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"
      alt="qrCode.."
      width={"300px"}
      height={"300px"}
      className="m-auto"
    />
    <div>
      <Button color="primary" className="me-1">Print</Button>
      <Button color="primary">Download</Button>
      <Button color="primary" className="ms-1">Email</Button>
    
    </div>
  </div>
);

export const C2 = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [cpIndex, setCpIndex] = useState(0);

  const CP = [CardTable, DepCheck, VoucherTable, QR, WiresCp];

  const toggled = (id = 0) => {
    if (typeof id == "number") setCpIndex(id);
    setOpen(!open);
  };

  return (
    <Row className="w-100">
      {data.map((el, id) => {
        return (
          <Col xl="4" md="4" sm="6">
            <div onClick={() => toggled(id)}>
              <StatsVertical
                icon={el.icon}
                color="primary"
                statTitle={el.subtitle}
                // stats={el.title}
              />
            </div>
          </Col>
        );
      })}
      <Modalform open={open} toggle={toggled} Component={CP[cpIndex]} />
    </Row>
  );
};

export const C1 = () => <div>Hello world</div>;
