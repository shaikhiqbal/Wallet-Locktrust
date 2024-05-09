import React from "react";

import * as Icon from "react-feather";
import { Label, Button, Form, Input, FormGroup, CardText } from "reactstrap";

// import AdminAdd from "./AdminAdd";
export default function ISO() {
  const divStyles = {
    boxShadow: "1px 2px 9px #53BDC1",
    margin: "4em",
  };
  const Thead = {
    backgroundColor: "#53BDC1",
    fontSize: "1.2rem",
    color: "white",
    textAlign: "left",
  };
  const containerShadow = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  };
  return (
    <div className="p-3">
      {" "}
      <div className="container-none border  " style={containerShadow}>
        <div className="border d-flex justify-content-between p-2   ">
          <div>
            <h1>ISO List</h1>
          </div>
          <div>
            <Button color="relief-primary">Add ISO</Button>
          </div>
        </div>
        <div className="row pt-2 pb-2" style={divStyles}>
          <div className="d-flex justify-content-end mb-2 align-items-baseline">
            <Input type="search" className="w-25"></Input>
            <Label style={{ fontWeight: "bolder", fontSize: "1rem" }}>
              <Icon.Search />
            </Label>
          </div>
          <table className="">
            <thead style={Thead}>
              <tr>
                <th>
                  <div className="d-flex align-items-center justify-content-between ps-2 pe-1">
                    <div> #</div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true" />
                      <br />
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-center justify-content-between ps-1 pe-1">
                    <div> Name </div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true" />
                      <br />
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-center justify-content-between ps-1 pe-1">
                    <div> Email</div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true" />
                      <br />
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-center justify-content-between ps-1 pe-1">
                    <div> Mobile </div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true"></i>
                      <br />
                      <i className="fa fa-angle-down"></i>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-center justify-content-between ps-1 pe-1">
                    <div> status </div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true" />
                      <br />
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="d-flex align-items-center justify-content-between ps-1 pe-1">
                    <div> Reset Password</div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true" />
                      <br />
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-center justify-content-between ps-1 pe-1">
                    <div> Action</div>
                    <div>
                      <i className="fa fa-angle-up" aria-hidden="true" />
                      <br />
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr className="border-bottom">
                <td className="ps-2">1</td>
                <td>Admin</td>
                <td>admin@gmail.com</td>
                <td>+917773932895</td>

                <td>
                  <div className="form-switch form-check-primary">
                    <Input
                      type="switch"
                      defaultChecked
                      id="icon-primary"
                      name="icon-primary"
                    />
                  </div>
                </td>

                <td>
                  <Button color="relief-primary">Resset Password</Button>
                </td>
                <td className="d-flex w-100 flex-column align-content-around p-1 ">
                  <Icon.PenTool size={"1.5rem"}></Icon.PenTool>
                  <br />
                  <Icon.Trash size={"1.5rem"}></Icon.Trash>
                </td>
              </tr>
              <tr className="border-bottom">
                <td className="ps-2">2</td>
                <td>Admin</td>
                <td>admin@gmail.com</td>
                <td>+917773932895</td>

                <td>
                  <div className="form-switch form-check-primary">
                    <Input
                      type="switch"
                      defaultChecked
                      id="icon-primary"
                      name="icon-primary"
                    />
                  </div>
                </td>

                <td>
                  <Button color="relief-primary">Resset Password</Button>
                </td>
                <td className="d-flex w-100 flex-column align-content-around p-1 ">
                  <Icon.PenTool size={"1.5rem"}></Icon.PenTool>
                  <br />
                  <Icon.Trash size={"1.5rem"}></Icon.Trash>
                </td>
              </tr>
              <tr className="border-bottom">
                <td className="ps-2">3</td>
                <td>Admin</td>
                <td>admin@gmail.com</td>
                <td>+917773932895</td>

                <td>
                  <div className="form-switch form-check-primary">
                    <Input
                      type="switch"
                      defaultChecked
                      id="icon-primary"
                      name="icon-primary"
                    />
                  </div>
                </td>

                <td>
                  <Button color="relief-primary">Resset Password</Button>
                </td>
                <td className="d-flex w-100 flex-column align-content-around p-1 ">
                  <Icon.PenTool size={"1.5rem"}></Icon.PenTool>
                  <br />
                  <Icon.Trash size={"1.5rem"}></Icon.Trash>
                </td>
              </tr>
              <tr className="border-bottom">
                <td className="ps-2">4</td>
                <td>Admin</td>
                <td>admin@gmail.com</td>
                <td>+917773932895</td>

                <td>
                  <div className="form-switch form-check-primary">
                    <Input
                      type="switch"
                      defaultChecked
                      id="icon-primary"
                      name="icon-primary"
                    />
                  </div>
                </td>

                <td>
                  <Button color="relief-primary">Resset Password</Button>
                </td>
                <td className="d-flex w-100 flex-column align-content-around p-1 ">
                  <Icon.PenTool size={"1.5rem"}></Icon.PenTool>
                  <br />
                  <Icon.Trash size={"1.5rem"}></Icon.Trash>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-12 mt-1 d-flex justify-content-end">
          <Button outline>Previous</Button>
          <Button
            color="primary"
            className="ms-2"
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
          >
            Next
          </Button>
        </div>
      </div>
      {/* <AdminAdd /> */}
    </div>
  );
}
