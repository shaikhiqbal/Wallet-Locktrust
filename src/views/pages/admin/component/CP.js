import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import React, { useContext, useEffect, useState } from "react";
import {
  Activity,
  AlertOctagon,
  Bold,
  Cpu,
  Edit,
  Eye,
  Server,
  Trash,
} from "react-feather";

import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";
import { Col, Row } from "reactstrap";

import RevenueReport from "../../../ui-elements/cards/analytics/RevenueReport";

// ** Styles
import { ThemeColors } from "@src/utility/context/ThemeColors";
import "@styles/react/libs/charts/apex-charts.scss";
import StatsVertical from "@components/widgets/stats/StatsVertical";

import Modalform from "./Modalform";
import { Navigate } from "react-router-dom";
import { AddEscrow } from "../../walletpages/components/EScomponent";

// export const WiresCp = () => {
//   const bankDetails = {
//     "Name on Account": "LockTrust",
//     "Bank Name": "Locktrust Bank",
//     Address: "Locktrust Address",
//     City: "SALT LAKE",
//     State: "UTHA",
//     "Account Number": "LOCK TRUST NUMBER",
//     "Routing Number": "LOCK TRUST ROUTING",
//   };

//   return (
//     <Row>
//       <Col className="budget-wrapper" md="12" xs="12">
//         <ListGroup>
//           {Object.keys(bankDetails).map((el) => (
//             <ListGroupItem className="d-flex justify-content-between align-items-center">
//               <span>{el}</span>
//               {/* <Badge color="primary" pill> */}
//               {bankDetails[el]}
//               {/* </Badge> */}
//             </ListGroupItem>
//           ))}
//         </ListGroup>
//       </Col>
//     </Row>
//   );
// };

export const WiresCp = () => {
  return <BankTable />;
};

export const AddCardForm = () => {
  return (
    <div>
      <div className="panel-body">
        <Form>
          <FormGroup>
            <Label for="FirstName" className="col-sm-12 control-label">
              First Name: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="text"
                autoComplete="off"
                name="FirstName"
                className="form-control"
                placeholder="First Name..."
                id="FirstName"
                title="First Name"
                defaultValue="John"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="LastName" className="col-sm-12 control-label">
              Last Name: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="text"
                autoComplete="off"
                name="LastName"
                className="form-control"
                placeholder="Last Name..."
                id="LastName"
                title="Last Name"
                defaultValue="John"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="Address1" className="col-sm-12 control-label">
              Address: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="textarea"
                className="form-control"
                autoComplete="off"
                name="Address1"
                id="Address1"
                defaultValue="Prakash Niwas, Nashik"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="City" className="col-sm-12 control-label">
              City: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="text"
                name="City"
                autoComplete="off"
                className="form-control"
                placeholder="City..."
                id="City"
                title="City"
                defaultValue="Nashik"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="State" className="col-sm-12 control-label">
              State/Province: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="text"
                autoComplete="off"
                name="State"
                className="form-control"
                placeholder="State/Province..."
                id="State"
                title="State"
                defaultValue="Maharashtra"
                data-sider-insert-id="39076e37-eaab-466e-be74-3e270d9bc3a6"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="country" className="col-sm-12 control-label">
              Country:<span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="select"
                className="form-control chosen-select"
                data-placeholder="Choose a Country..."
                name="country"
                id="country"
                title="Country"
              >
                <option value=""></option>
                <option value="AF">Afghanistan</option>
                {/* Rest of the options */}
              </Input>
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="Zip_code" className="col-sm-12 control-label">
              Post/Zip Code: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="text"
                autoComplete="off"
                name="Zip_code"
                className="form-control"
                placeholder="Post/Zip Code ..."
                id="Zip_code"
                title="zip Code"
                defaultValue="422003"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="contact_no" className="col-sm-12 control-label">
              Contact Number :<span className="asterisk">*</span>
            </Label>
            <div className=" col-sm-12">
              <Input
                type="text"
                autoComplete="off"
                name="contact_no"
                placeholder="Contact Number"
                id="contact_no"
                className="form-control"
                title="Contact Number"
                defaultValue="+919579668524"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="EmailAddress" className="col-sm-12 control-label">
              Email: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="email"
                autoComplete="off"
                name="EmailAddress"
                className="form-control"
                placeholder="Email Address..."
                id="EmailAddress"
                title="Email"
                defaultValue="Johngaurav40@gmail.com"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="ssn_no" className="col-sm-12 control-label">
              SSN: <span className="asterisk">*</span>
            </Label>
            <div className="col-sm-12">
              <Input
                type="text"
                autoComplete="off"
                name="ssn_no"
                className="form-control"
                placeholder="Social Security Number..."
                id="ssn_no"
                title="SSN"
                defaultValue="111-111-111"
              />
            </div>
          </FormGroup>
        </Form>
        <div className="panel panel-default" id="card_info">
          <div className="panel-heading">
            <div className="panel-btns" style={{ display: "none" }}></div>
            <h4 className="panel-title">Credit Card Information</h4>
            <p></p>
          </div>
          <div className="panel-body">
            <div className="form-group mb-2">
              <label className="col-sm-12 control-label">
                Card Number: <span className="asterisk">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  autoComplete="off"
                  name="card_no"
                  className="form-control"
                  value=""
                  placeholder="Card Number..."
                  maxLength="16"
                  required=""
                  id="card_no"
                  title="Card Number"
                />
              </div>
            </div>

            <div className="form-group mb-2">
              <label className="col-sm-12 control-label">
                Card Expiry: <span className="asterisk">*</span>
              </label>
              <div className="col-sm-12">
                <select
                  id="card_month"
                  className="form-control"
                  name="card_month"
                  title="Card Month"
                >
                  <option value="">Month</option>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="March">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>{" "}
                <br />
                <select
                  id="card_year"
                  className="form-control"
                  name="card_year"
                  title="Card Year"
                >
                  <option value="">Year</option>
                  {[...Array(30)].map((_, index) => (
                    <option key={index} value={2023 + index}>
                      {2023 + index}
                    </option>
                  ))}
                </select>
                <label className="error" htmlFor="exp_dt"></label>
              </div>
            </div>

            <div className="form-group mb-2">
              <label className="col-sm-12 control-label">
                CVV/CVV2: <span className="asterisk">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  autoComplete="off"
                  name="card_cvv_no"
                  className="form-control"
                  value=""
                  placeholder="CVV Number..."
                  maxLength="3"
                  id="card_cvv_no"
                  title="CVV Number"
                />
              </div>
            </div>

            <div className="form-group mb-2">
              <label className="col-sm-12 control-label">
                Card Type: <span className="asterisk">*</span>
              </label>
              <div className="col-sm-12">
                <select
                  name="card_type"
                  id="card_type"
                  className="form-control"
                  title="Card Type"
                >
                  <option value="">Select Card Type</option>
                  <option value="52">Credit Card</option>
                  <option value="53">Debit Card</option>
                  <option value="54">Prepaid Card</option>
                  <option value="55">Prepaid Reporting Card</option>
                  <option value="56">Prepaid Credit Card</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-2">
              <label className="col-sm-12 control-label">
                Name On Card: <span className="asterisk">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  autoComplete="off"
                  name="Name_on_card"
                  className="form-control"
                  value=""
                  placeholder="Name On Card..."
                  id="Name_on_card"
                  title=" Name On Card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
};

export const CardTable = () => {
  const [openForm, setOpenForm] = useState(false);
  const toggle = () => {
    setOpenForm(!openForm);
  };
  return (
    <Row>
      <Col xs="12" className="d-flex justify-content-end mb-1">
        <Button className="btn-sm" color="primary" onClick={toggle}>
          +Add Card
        </Button>
      </Col>

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
              <td>John Doe</td>
              <td>Debit Card</td>
              <td className="d-flex gap-1">
                <Badge color="info">Load</Badge>
                <Badge color="warning">UnLink</Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>

      <Modalform open={openForm} toggle={toggle} Component={AddCardForm} />
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

const VoucherTable2 = () => {
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



const VoucherTable = () => <Navigate to={"/admin/escrow"} replace={true} />;

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
      <Button color="primary" className="me-1">
        Print
      </Button>
      <Button color="primary">Download</Button>
      <Button color="primary" className="ms-1">
        Email
      </Button>
    </div>
  </div>
);

export const C2 = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [cpIndex, setCpIndex] = useState(0);

  const CP = [CardTable, DepCheck, VoucherTable2, QR, WiresCp];

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
      <Modalform
        open={open}
        toggle={toggled}
        Component={CP[cpIndex]}
        size={cpIndex == CP.length - 1 ? "modal-xl" : "modal-lg"}
      />
    </Row>
  );
};

export const C1 = () => {
  const cardList = [
    {
      t: "Wallet Balance ",
      icon: "$",
      m: 100,
    },
    {
      t: "Cash in hand ",
      icon: "$",
      m: 100,
    },
    {
      t: "Bank Balance",
      icon: "$",
      m: 100,
    },
    {
      t: "Prepard Card",
      icon: "$",
      m: 100,
    },
  ];
  return (
    <Row className="w-100">
      {cardList.map((el, id) => {
        return (
          <Col xl="3" md="4" sm="6">
            <div>
              <StatsVertical
                icon={el.icon}
                color="info"
                statTitle={el.t}
                stats={`$ ${el.m}`}
              />
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export function BankTable() {
  const data = [
    {
      id: 1,
      name: "JohnJohn",
      accountNumber: "6005223223",
      routingNumber: "45698731",
      type: "Saving Account",
    },
    {
      id: 2,
      name: "testtest",
      accountNumber: "654654654654",
      routingNumber: "323-132-132",
      type: "Saving Account",
    },
    {
      id: 3,
      name: "JohnJohn",
      accountNumber: "91106296647",
      routingNumber: "--",
      type: "Saving Account",
    },
    {
      id: 4,
      name: "JohnJohn",
      accountNumber: "--",
      routingNumber: "--",
      type: "Checking Account",
    },
    {
      id: 5,
      name: "JohnJohn",
      accountNumber: "2323233",
      routingNumber: "232-323-232",
      type: "Checking Account",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [hide, setHide] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const Error = () => (
    <div>
      We are unable to process your request at this time, please try again
      later.
    </div>
  );

  useEffect(() => {
    if (value) {
      toggle();
    }
  }, [value]);

  const handleAddAmount = () => {
    setOpenCollapse(!openCollapse);
  };

  const Load = () => (
    <Row xs="">
      <Col xs="12">
        <Row className="mb-1">
          <Label sm="2" for="name">
            Amount
          </Label>
          <Col sm="10">
            <Input type="text" name="name" id="name" />
          </Col>
        </Row>
      </Col>
      <Col xs="12">
        <p>
          <Input type="checkbox" checked className="me-1" />I certify that I am
          requesting to have a check drafted by LT to be used to credit my LT
          wallet. I hereby confirm that I am the account owner and that I have
          sufficient funds to cover the amount on the check. I acknowledge that
          LT is not liable for any fraud accusations or loss of funds.am aware
          that it may take up to 6 business days for the check funds to be
          credited to my LT wallet.*
        </p>
      </Col>
      <Col xs="12">
        <Button className="btn-sm" color="success">
          Submit
        </Button>
      </Col>
    </Row>
  );

  return (
    <Row>
      <Col xs="12" className="d-flex justify-content-end mb-2">
        <Button color="danger" onClick={() => setHide(!hide)}>
          + Add Bandk
        </Button>
      </Col>
      {hide ? (
        <Col xs="12" className="d-flex justify-content-end gap-1 mb-2">
          <div>
            <Input
              type="radio"
              name="name"
              id="name"
              value={"m"}
              onChange={handleChange}
            />
            <Label>Manually</Label>
          </div>
          <div>
            <Input
              type="radio"
              name="name"
              id="name"
              value={"v"}
              onChange={handleChange}
            />
            <Label>Via Bank Login Id</Label>
          </div>
        </Col>
      ) : null}

      <Col xs="12">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name On Account</th>
              <th>Account Number</th>
              <th>Routing Number</th>
              <th>Type Of Account</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.accountNumber}</td>
                <td>{row.routingNumber}</td>
                <td>{row.type}</td>
                <td className="d-flex gap-1">
                  <Button
                    className="btn-sm"
                    color="primary"
                    onClick={handleAddAmount}
                  >
                    Load
                  </Button>
                  <Button className="btn-sm" color="secondary">
                    Unlink
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Modalform
        open={open}
        toggle={toggle}
        Component={value == "m" ? DepCheck : Error}
        // size="modal-xl"
      />
      <Modalform
        open={openCollapse}
        toggle={handleAddAmount}
        Component={Load}
        // size="modal-xl"
      />
    </Row>
  );
}

export const C3 = () => {
  const [open, setOpen] = useState(false);
  const [cpIndex, setCpIndex] = useState(0);

  const CP = [CardTable, BankTable, VoucherTable, QR, AddEscrow];

  const toggled = (id = 0) => {
    if (typeof id == "number") setCpIndex(id);
    setOpen(!open);
  };

  const textArray = [
    {
      t: "Card",
      icon: "C",
    },
    {
      t: "Bank",
      icon: "B",
    },
    {
      t: "Escrow",
      icon: "E",
    },
    {
      t: "QR Code",
      icon: "Q",
    },
    {
      t: "Wallet to Wallet",
      icon: "W",
    },
  ];

  return (
    <Row className="w-100">
      {textArray.map((el, id) => {
        return (
          <Col xl="4" md="4" sm="6">
            <div onClick={() => toggled(id)}>
              <StatsVertical
                icon={el.icon}
                color="warning"
                statTitle={el.t}
                // stats={el.title}
              />
            </div>
          </Col>
        );
      })}
      <Modalform
        open={open}
        toggle={toggled}
        Component={CP[cpIndex]}
        size="modal-xl"
      />
    </Row>
  );
};

export const C4 = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(false);

  const toggle = (id) => {
    if (id == 0) {
      setIndex(true);
    } else if (index) {
      setIndex(false);
    }
    setOpen(!open);
  };

  // SavingSettings

  const data = [
    {
      t: "Saving Settings",
      icon: "S",
    },
    {
      t: "Budget",
      icon: "B",
    },
    {
      t: "Wishlist",
      icon: "W",
    },
  ];
  // Sving Setting
  // Budget
  // wishlist

  const ComingSoon = () => (
    <div>
      <h4>Coming Soon</h4>
    </div>
  );
  return (
    <Row className="w-100 justify-content-center">
      {data.map((el, id) => {
        return (
          <Col xl="3" md="4" sm="6" key={id}>
            <div onClick={() => toggle(id)}>
              <StatsVertical
                icon={el.icon}
                color="warning"
                statTitle={el.t}
                // stats={`$ ${el.m}`}
              />
            </div>
          </Col>
        );
      })}
      <Modalform
        open={open}
        toggle={toggle}
        Component={index ? SavingSettings : ComingSoon}
        size={index ? "modal-xl" : "modal-lg"}
      />
    </Row>
  );
};

export function AddTimeBased() {
  return (
    <div className="col-md-6" id="timeBased">
      <div className="form-group my-1">
        <div className="controls">
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="one_time"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck1"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck1"
              >
                One Time
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="daily"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck2"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck2"
              >
                Daily
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="weekly"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck3"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck3"
              >
                Weekly
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="once_in_two_weeks"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck4"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck4"
              >
                Once In Two Weeks
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="monthly"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck6"
              />
              <label
                className="custom-control-label ms-1"
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck6"
              >
                Monthly
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="quaterly"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck7"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck7"
              >
                Quaterly
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="half_yearly"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck8"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck8"
              >
                Half Yearly
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="custom-control custom-checkbox mb-1">
              <input
                type="checkbox"
                defaultValue="yearly"
                name="time_based[]"
                className="custom-control-input time_based me-1"
                id="customCheck9"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customCheck9"
              >
                Yearly
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="form-group" style={{ display: "none" }} id="weekdayDiv">
        <label className="control-label">WeekDay For Weekly:-</label>
        <select name="weekday" id="weekday" className="form-control">
          <option value="">--Select Day--</option>
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </div>
      <div
        className="form-group"
        style={{ display: "none" }}
        id="twoweekdayDiv"
      >
        <label className="control-label">WeekDay For Once In Two Week:-</label>
        <select name="twoweekday" id="twoweekday" className="form-control">
          <option value="">--Select Day--</option>
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </div>
      <div className="form-group my-1">
        <label className="control-label">Source Of Funds:</label>
        {/* <input type="text" class="form-control"> */}
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio3"
            name="timesourceofFund"
            className="custom-control-input timefund"
            defaultValue="wallet"
          />
          <label
            className="custom-control-label ms-1 "
            style={{ whiteSpace: "nowrap" }}
            htmlFor="customRadio3"
          >
            Wallet
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio4"
            name="timesourceofFund"
            className="custom-control-input timefund"
            defaultValue="bank"
          />
          <label
            className="custom-control-label ms-1 "
            style={{ whiteSpace: "nowrap" }}
            htmlFor="customRadio4"
          >
            Bank
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio5"
            name="timesourceofFund"
            className="custom-control-input timefund"
            defaultValue="card"
          />
          <label
            className="custom-control-label ms-1 "
            style={{ whiteSpace: "nowrap" }}
            htmlFor="customRadio5"
          >
            Card
          </label>
        </div>
      </div>
      <div className="form-group my-1">
        <label>Amount:</label>
        <input
          type="text"
          name="transactionAmount"
          id="transactionAmount"
          className="form-control"
          defaultValue=""
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export function AddEventBased() {
  return (
    <form
      id="EventsavingsForm"
      className="form-horizontal"
      method="post"
      autoComplete="off"
    >
      <h3 className="box-title m-t-40" />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="form-group my-1">
            <input
              type="hidden"
              name="EventactionType"
              id="EventactionType"
              defaultValue="Add"
            />
            <input
              type="hidden"
              name="EventrecordID"
              id="EventrecordID"
              defaultValue={0}
            />
            <input
              type="hidden"
              name="event_based_old"
              id="event_based_old"
              defaultValue={0}
            />
            {/* <div class="custom-control custom-radio">
                              <input type="radio" id="customRadio2" name="option" class="custom-control-input con" value="event">
                              <label class="custom-control-label" for="customRadio2">Event</label>
                          </div> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" id="eventBased">
          <div className="form-group my-1">
            <label className="control-label">Source Of Funds:</label>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio6"
                name="eventsourceofFund"
                className="custom-control-input eventfund"
                defaultValue="wallet"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customRadio6"
              >
                Wallet
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio7"
                name="eventsourceofFund"
                className="custom-control-input eventfund"
                defaultValue="bank"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customRadio7"
              >
                Bank
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio8"
                name="eventsourceofFund"
                className="custom-control-input eventfund"
                defaultValue="card"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customRadio8"
              >
                Card
              </label>
            </div>
          </div>
          <div className="form-group my-1">
            <div className="controls">
              <fieldset>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="wallet_transfer"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck10"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck10"
                  >
                    Wallet To Wallet Transfer
                  </label>
                </div>
              </fieldset>
              <fieldset id="addMoneyDiv">
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="add_money"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck11"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck11"
                  >
                    Adding Money To Wallet
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="send_money"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck12"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck12"
                  >
                    Sending Money Outoff Wallet
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="future_transaction"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck13"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck13"
                  >
                    Future Transaction
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="currency_conversion"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck14"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck14"
                  >
                    Currency Conversion
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="bill_payment"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck15"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck15"
                  >
                    Bill Payment
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    type="checkbox"
                    defaultValue="travel_booking"
                    name="event_based[]"
                    className="custom-control-input event_based"
                    id="customCheck16"
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor="customCheck16"
                  >
                    Travel Booking
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="form-group my-1">
            <label className="control-label">Saving Amount</label>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio9"
                name="SavingAmount"
                className="custom-control-input savingamount"
                defaultValue="per"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customRadio9"
              >
                Percentage Of Transaction
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio10"
                name="SavingAmount"
                className="custom-control-input savingamount"
                defaultValue="amount"
              />
              <label
                className="custom-control-label ms-1 "
                style={{ whiteSpace: "nowrap" }}
                htmlFor="customRadio10"
              >
                Amount
              </label>
            </div>
          </div>
          <div
            className="form-group"
            id="percentageDIV"
            style={{ display: "none" }}
          >
            <label>Percentage Of Transaction:</label>
            <input
              type="text"
              name="transactionper"
              id="transactionper"
              className="form-control"
              placeholder="Percentage Of Transaction"
              autoComplete="off"
            />
          </div>
          <div
            className="form-group"
            id="amountDIV"
            style={{ display: "none" }}
          >
            <label>Amount:</label>
            <input
              type="text"
              name="eventtransactionAmount"
              id="eventtransactionAmount"
              className="form-control"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-md-6" style={{ display: "none" }} id="EventbankDIV">
          <div className="form-group my-1">
            <label className="control-label">Select Bank</label>
            <select
              name="Eventbankid"
              id="Eventbankid"
              className="form-control"
            >
              <option value="">--Select Bank--</option>
              <option value={101}>6005223223(Bank Of Maharashtra)</option>
              <option value={102}>654654654654(sadasd)</option>
              <option value={103}>91106296647(UAB Lock Trust)</option>
              <option value={104}>(test)</option>
              <option value={105}>2323233(ccxc)</option>
            </select>
          </div>
          <div id="Eventbank_msg" style={{ display: "none" }}>
            <p>
              This Transaction will take more than 24 hours.Since we will need
              bank approval to load wallet.Hence this wallet to wallet transfer
              instantly.Please select credit card or prepaid card balance to
              push the transaction instanly.
            </p>
          </div>
        </div>
        <div className="col-md-6" style={{ display: "none" }} id="EventcardDIV">
          <div className="form-group my-1">
            <label className="control-label">Select Card</label>
            <select
              name="Eventcardid"
              id="Eventcardid"
              className="form-control"
            >
              <option value="">--Select Card--</option>
            </select>
          </div>
        </div>
        <div
          className="form-group"
          id="Eventadd_bank_button"
          style={{ display: "none" }}
        >
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#addbank_confirmation_modal"
            className="btn btn-info"
          >
            Add Bank
          </a>
        </div>
        <div
          className="form-group"
          id="Eventadd_credit_button"
          style={{ display: "none" }}
        >
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#addcredit_card"
            className="btn btn-info"
          >
            Add Card
          </a>
        </div>
      </div>
      <hr />
      <div className="panel-footer">
        {/* <input type="hidden" name="fxValidate" id="fxValidate" value="null" />  */}
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3">
            <button type="submit" className="btn btn-primary" id="send">
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export function SavingSettings() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const toggle = (id) => {
    if (typeof id == "number") {
      setIndex(id);
    }
    setOpen(!open);
  };
  const CP = [AddTimeBased, AddEventBased];

  return (
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <div className="row button-group">
              <div className="col-12">
                <div className="btn-group">
                  <h4>Time Based</h4>
                </div>
                <br />
              </div>
              <div>
                <Button color="primary" onClick={() => toggle(0)}>
                  Add
                </Button>
              </div>
              {/* <a
                href="javascript:void(0);"
                className="btn btn-info"
                data-toggle="modal"
                data-target=".time_based_Modal"
              >
                Add
              </a> */}
            </div>
            <div className="table-responsive">
              <div
                id="example23_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div id="example23_filter" className="dataTables_filter">
                  <label>
                    Search:
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder=""
                      aria-controls="example23"
                    />
                  </label>
                </div>
                <table
                  id="example23"
                  className="display nowrap table table-hover table-striped table-bordered dataTable"
                  cellSpacing={0}
                  width="100%"
                  role="grid"
                  aria-describedby="example23_info"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting_asc"
                        tabIndex={0}
                        aria-controls="example23"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Type: activate to sort column descending"
                        style={{ width: 134 }}
                      >
                        Type
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example23"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Source Of Fund: activate to sort column ascending"
                        style={{ width: 111 }}
                      >
                        Source Of Fund
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example23"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Amount: activate to sort column ascending"
                        style={{ width: 60 }}
                      >
                        Amount
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example23"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Balance: activate to sort column ascending"
                        style={{ width: 61 }}
                      >
                        Balance
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example23"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Action: activate to sort column ascending"
                        style={{ width: 163 }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" className="odd">
                      <td className="sorting_1">once_in_two_weeks</td>
                      <td>wallet</td>
                      <td>10</td>
                      <td>0</td>
                      <td className="d-flex gap-1">
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="primary"
                        >
                          <Bold size={16} />
                        </Button.Ripple>
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="primary"
                        >
                          <Edit size={16} />
                        </Button.Ripple>
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="primary"
                        >
                          <Eye size={16} />
                        </Button.Ripple>
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="danger"
                        >
                          <Trash size={16} />
                        </Button.Ripple>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3} rowSpan={1}>
                        Total
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        0
                      </th>
                      <th rowSpan={1} colSpan={1} />
                    </tr>
                  </tfoot>
                </table>
                <div
                  className="dataTables_info"
                  id="example23_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to 1 of 1 entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example23_paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous disabled"
                      id="example23_previous"
                    >
                      <a
                        href="#"
                        aria-controls="example23"
                        data-dt-idx={0}
                        tabIndex={0}
                        className="page-link"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="example23"
                        data-dt-idx={1}
                        tabIndex={0}
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li
                      className="paginate_button page-item next disabled"
                      id="example23_next"
                    >
                      <a
                        href="#"
                        aria-controls="example23"
                        data-dt-idx={2}
                        tabIndex={0}
                        className="page-link"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <div className="row button-group">
              <div className="col-12">
                <div className="btn-group">
                  <h4>Event Based</h4>
                </div>
              </div>
              <div>
                <Button color="primary" onClick={() => toggle(1)}>
                  Add
                </Button>
              </div>
              {/* <a
                href="javascript:void(0);"
                className="btn btn-info"
                data-toggle="modal"
                data-target=".Event_based_Modal"
              >
                Add
              </a> */}
            </div>
            <div className="table-responsive">
              <div
                id="example231_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div id="example231_filter" className="dataTables_filter">
                  <label>
                    Search:
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder=""
                      aria-controls="example231"
                    />
                  </label>
                </div>
                <table
                  id="example231"
                  className="display nowrap table table-hover table-striped table-bordered dataTable"
                  cellSpacing={0}
                  width="100%"
                  role="grid"
                  aria-describedby="example231_info"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting_asc"
                        tabIndex={0}
                        aria-controls="example231"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Type: activate to sort column descending"
                        style={{ width: 102 }}
                      >
                        Type
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example231"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Source Of Fund: activate to sort column ascending"
                        style={{ width: 120 }}
                      >
                        Source Of Fund
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example231"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Amount: activate to sort column ascending"
                        style={{ width: 66 }}
                      >
                        Amount
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example231"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Balance: activate to sort column ascending"
                        style={{ width: 67 }}
                      >
                        Balance
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example231"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Action: activate to sort column ascending"
                        style={{ width: 175 }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" className="odd">
                      <td className="sorting_1">wallet_transfer</td>
                      <td>wallet</td>
                      <td>10%</td>
                      <td>0</td>
                      <td className="d-flex gap-1">
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="primary"
                        >
                          <Bold size={16} />
                        </Button.Ripple>
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="primary"
                        >
                          <Edit size={16} />
                        </Button.Ripple>
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="primary"
                        >
                          <Eye size={16} />
                        </Button.Ripple>
                        <Button.Ripple
                          className="btn-icon btn-sm"
                          outline
                          color="danger"
                        >
                          <Trash size={16} />
                        </Button.Ripple>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3} rowSpan={1}>
                        Total
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        0
                      </th>
                      <th rowSpan={1} colSpan={1} />
                    </tr>
                  </tfoot>
                </table>
                <div
                  className="dataTables_info"
                  id="example231_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to 1 of 1 entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example231_paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous disabled"
                      id="example231_previous"
                    >
                      <a
                        href="#"
                        aria-controls="example231"
                        data-dt-idx={0}
                        tabIndex={0}
                        className="page-link"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="example231"
                        data-dt-idx={1}
                        tabIndex={0}
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li
                      className="paginate_button page-item next disabled"
                      id="example231_next"
                    >
                      <a
                        href="#"
                        aria-controls="example231"
                        data-dt-idx={2}
                        tabIndex={0}
                        className="page-link"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modalform open={open} toggle={toggle} Component={CP[index]} />
    </div>
  );
}
