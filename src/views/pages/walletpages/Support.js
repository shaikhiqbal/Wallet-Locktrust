import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import Modalform from "../admin/component/Modalform";

import {
  ChangePassword,
  AcountLinking,
  HomeSetup,
} from "./components/SupportCP";

const Support = () => {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(0);

  const toggle = (id) => {
    if (typeof id == "number") setSelectedComponent(id);
    setOpen(!open);
  };

  const CP = [ChangePassword, AcountLinking, HomeSetup];

  return (
    <Card>
      <CardBody>
        <div className="row m-t-50">
          <div className="col-md-6 col-lg-4 col-xlg-5">
            {/* <Link to={"/"} data-toggle="modal" data-target=".bw-user"> */}
            <Card
              style={{ background: "#F44336" }}
              className="cursor-pointer"
              onClick={() => toggle(0)}
            >
              <CardBody>
                <Row>
                  <Col sm="2">
                    <span className="input-group-text ">
                      <i className="fa  fa-lock" />
                    </span>
                  </Col>
                  <Col sm="10">
                    <h3 className="text-white ">Change Password</h3>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            {/* </Link> */}
          </div>

          <div className="col-md-6 col-lg-4 col-xlg-5">
            {/* <Link to={"/"} data-toggle="modal" data-target=".ulink"> */}
            <Card
              style={{ background: "#7B1FA2" }}
              className="cursor-pointer"
              onClick={() => toggle(1)}
            >
              <CardBody>
                <Row>
                  <Col sm="2">
                    <span className="input-group-text ">
                      <i className="fa fa-link" aria-hidden="true" />
                    </span>
                  </Col>
                  <Col sm="10">
                    <h3 className="text-white ">Account Linking</h3>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            {/* </Link> */}
          </div>
          <div className="col-md-6 col-lg-4 col-xlg-5">
            {/* <Link to={"/"} data-toggle="modal" data-target=".homesetup"> */}
            <Card
              style={{ background: "#E91E63" }}
              className="cursor-pointer"
              onClick={() => toggle(2)}
            >
              <CardBody>
                <Row>
                  <Col sm="2">
                    <span className="input-group-text ">
                      <i className="fa fa-wrench" />
                    </span>
                  </Col>
                  <Col sm="10">
                    <h3 className="text-white ">Homepage Setup</h3>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            {/* </Link> */}
          </div>
          <div className="col-md-6 col-lg-4 col-xlg-5">
            <Link
              to={"/"}
            >
              <Card style={{ background: "#0288D1" }}>
                <CardBody>
                  <Row>
                    <Col sm="2">
                      <span className="input-group-text ">
                        <i className="fa fa-power-off" />
                      </span>
                    </Col>
                    <Col sm="10">
                      <h3 className="text-white ">Deactivate Account</h3>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Link>
          </div>
          {/* /admin/profile */}
         <div className="col-md-6 col-lg-4 col-xlg-5">
             <Link to="/admin/profile">
            <div
              className="panel panel-primary-alt noborder"
              onclick="window.location.href='profile'"
            >
              <Card style={{ background: "#2979FF" }}>
                <CardBody>
                  <Row>
                    <Col sm="2">
                      <span className="input-group-text ">
                        <i className="fa fa-user" />
                      </span>
                    </Col>
                    <Col sm="10">
                      <h3 className="text-white ">Edit Profile</h3>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
         </Link>
          </div>
        </div>
      </CardBody>
      <Modalform
        open={open}
        toggle={toggle}
        Component={CP[selectedComponent]}
        // size={`modal-${selectedComponent == 1 ? "xl" : "lg"}`}
      />
    </Card>
  );
};

export default Support;
