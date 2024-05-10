import React from "react";
import { Card, Col, Row } from "reactstrap";

function profile() {
  return (
    <Card>
      <div className="card-body">
        <Row>
          <Col sm="12" md="3" lg="5" className="pageheader">
            <div className="media">
              <div className="pageicon pull-left"></div>
              <div className="media-body">
                <h4>Profile Details</h4>
              </div>

              <div className="text-center">
                <img
                  src="https://ew.locktrust.com/uploads/profile_images/"
                  height="113px"
                  width="113px"
                  className="img-offline img-responsive img-profile"
                  alt=""
                />
                <br />
                <br />
                <button
                  className="btn btn-default btn-bordered"
                  data-toggle="modal"
                  data-target=".upload_photo"
                >
                  Add/Update
                </button>
                <div
                  className="modal fade upload_photo"
                  tabIndex={-1}
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Upload Photo</h4>
                        <button
                          aria-hidden="true"
                          data-dismiss="modal"
                          className="close"
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <form
                          method="POST"
                          encType="multipart/form-data"
                          id="frmUpdateProfilePic"
                          autoComplete="off"
                        >
                          <div className="form-group">
                            <input
                              type="file"
                              name="profileimage"
                              required=""
                              style={{ width: 180 }}
                            />
                            <input
                              type="text"
                              name="id"
                              defaultValue={170}
                              hidden=""
                              autoComplete="off"
                            />
                          </div>
                          <input
                            type="hidden"
                            name="fxValidate"
                            id="fxValidate"
                            defaultValue="%7B%22profileimage%22%3A%7B%22func%22%3A%22required%22%2C%22msg%22%3A%22%22%7D%7D"
                          />
                          <input
                            type="submit"
                            defaultValue="Submit"
                            name="phupd"
                            style={{ height: 30, width: 100 }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="profile-name mb5">
                  <img
                    src="https://ew.locktrust.com/assets/images/locktrust.png"
                    className="img-responsive"
                    width={"100%"}
                  />
                </h4>

                {/* text-center */}
                <br />
                <h5 className="md-title">Connect</h5>
                <ul className="list-unstyled social-list">
                  <li>
                    <a href="account-setting">Account Settings</a>
                  </li>
                </ul>
                <div className="mb30" />
              </div>
            </div>
            {/* media */}
          </Col>
          <Col sm="12" md="9" lg="7" className="contentpanel">
            {/* Nav tabs */}
            <ul className="nav nav-tabs nav-line">
              <li className="active">
                <a href="#profile" data-toggle="tab">
                  <strong>Profile</strong>
                </a>
              </li>
            </ul>
            <form
              id="profileform"
              method="post"
              onsubmit="return validate();"
              autoComplete="off"
            >
              {/* Tab panes */}
              <div className="tab-content nopadding noborder">
                <div className="tab-pane active" id="profile">
                  <input
                    type="hidden"
                    name="cx_remitter_id"
                    className="form-control"
                    defaultValue={5047}
                  />
                  <input
                    type="hidden"
                    name="cx_default_beneficiary_bank_id"
                    className="form-control"
                    defaultValue={3829}
                  />
                  <div className="form-group">
                    <label className=" control-label">
                      Wallet ID :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="wallet_id"
                        className="form-control"
                        autoComplete="off"
                        readOnly="readonly"
                        defaultValue={7352012357935562}
                      />
                    </div>
                    <label className=" control-label">
                      IBAN Code Written in Electronic Format:
                      <span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="IBANCode"
                        id="IBANCode"
                        className="form-control"
                        autoComplete="off"
                        readOnly="readonly"
                        defaultValue="LT313980191106296647"
                      />{" "}
                      <a
                        href="javascript:void;"
                        className="copyButton iCopy"
                        title="Copy IBAN Code"
                        rel="#IBANCode"
                      ></a>
                      <input
                        className="linkToCopy"
                        defaultValue="LT313980191106296647"
                        style={{
                          position: "absolute",
                          zIndex: -999,
                          opacity: 0,
                        }}
                      />
                    </div>
                    <label className=" control-label">
                      IBAN Code Written in Paper Format:
                      <span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="wallet_id"
                        className="form-control"
                        id="printIBANCode"
                        autoComplete="off"
                        readOnly="readonly"
                        defaultValue="LT31  3980  1911  0629  6647"
                      />
                      <a
                        href="javascript:void;"
                        title="Copy IBAN Code"
                        className="copyButton iCopy"
                        rel="#printIBANCode"
                      ></a>
                      <input
                        className="linkToCopy"
                        defaultValue="LT31  3980  1911  0629  6647"
                        style={{
                          position: "absolute",
                          zIndex: -999,
                          opacity: 0,
                        }}
                      />
                    </div>
                    <label className=" control-label">
                      Account Status :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        readOnly="readonly"
                        autoComplete="off"
                        defaultValue="Active"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className=" control-label">
                      First Name :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control"
                        autoComplete="off"
                        readOnly="readonly"
                        defaultValue="John"
                      />
                    </div>
                    <label className=" control-label">
                      Last Name :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        className="form-control"
                        autoComplete="off"
                        readOnly="readonly"
                        defaultValue="John"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className=" control-label">
                      Date Of Birth :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <div className="input-group">
                        <input
                          type="text"
                          name="dob"
                          id="dob"
                          autoComplete="off"
                          className="form-control"
                          defaultValue="1993-08-02"
                          data-dtp="dtp_h5t9a"
                        />
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-calendar" />
                        </span>
                      </div>
                      {/* input-group */}
                    </div>
                    <label className=" control-label">
                      Contact Number:<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        className="form-control"
                        defaultValue="+91+919579668524"
                        readOnly="readonly"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className=" control-label">
                      Email :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        className="form-control"
                        readOnly="readonly"
                        defaultValue="Johngaurav40@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    {/*<label class=" control-label">Street :<span class="asterisk">*</span></label>
                                                          <div class="">
                                                              <input type="text" name="address" id="address" class="form-control" value="Prakash Niwas, Nashik"  /> 
                                                          </div>*/}
                    <label className=" control-label">
                      Address Line1 :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      {/*<input type="text" name="address2" id="address2" class="form-control" value="Prakash Niwas, Nashik"  /> */}
                      <textarea
                        className="form-control"
                        name="address"
                        autoComplete="off"
                        id="address"
                        defaultValue={"Prakash Niwas, Nashik"}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className=" control-label">
                      City :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="off"
                        className="form-control"
                        defaultValue="Nashik"
                      />
                    </div>
                    <label className=" control-label">
                      Postal / Zip code :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="postal"
                        id="postal"
                        autoComplete="off"
                        className="form-control"
                        defaultValue={422003}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className=" control-label">
                      State :<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="off"
                        className="form-control"
                        defaultValue="Maharashtra"
                      />
                    </div>
                    <label className=" control-label">
                      Country :<span className="asterisk">*</span>
                    </label>
                    <input
                      type="select"
                      autoComplete="off"
                      className="form-control ssn-inputmask"
                      defaultValue="+US 1"
                      maxLength={12}
                    />
                  </div>
                  <div className="form-group">
                    <label className=" control-label">
                      SSN Number:<span className="asterisk">*</span>
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="ssn_number"
                        id="ssn_number"
                        autoComplete="off"
                        className="form-control ssn-inputmask"
                        defaultValue="111-111-111"
                        maxLength={12}
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    id="upd_button"
                    style={{ float: "right" }}
                  >
                    <div className="col-sm-5">
                      <button type="submit" className="btn btn-primary mr5">
                        Update
                      </button>
                    </div>
                  </div>
                  {/*<div class="form-group" id="api_key" style="float: right;">
                                                          <div class="col-sm-5">
                                                              <button class="btn btn-primary mr5">Request for API Key</button> 
                                                          </div>
                                                      </div>*/}
                </div>
                {/* tab-pane */}
              </div>
              {/* tab-content */}
            </form>
            <br />
            <form id="kyc_upload" method="post" encType="multipart/form-data">
              {/* Nav tabs */}
              <ul className="nav nav-tabs nav-line">
                <li className="active">
                  <a href="#upload_kyc" data-toggle="tab">
                    <strong>Upload KYC</strong>
                  </a>
                </li>
              </ul>
              <div className="form-group">
                <label className=" control-label">
                  Photo ID :<span className="asterisk">*</span>
                </label>
                <div className="mb-2">
                  <select
                    className="form-control"
                    id="photo_id"
                    name="photo_id"
                  >
                    <option value="Passport">Passport</option>
                    <option value="Driving Licence">Driving Licence</option>
                    <option value="State ID Card">State ID Card</option>
                    <option value="Other">Other Government issue ID</option>
                  </select>
                </div>
                <label className=" control-label">
                  Photo ID Image :<span className="asterisk">*</span>
                </label>
                <div className="mb-2">
                  <input
                    type="file"
                    name="photo_id_doc"
                    id="photo_id_doc"
                    className="form-control"
                  />
                </div>
                <div
                  className="form-group col-md-3 m-t-20 other"
                  style={{ display: "none" }}
                >
                  <input
                    type="text"
                    name="other"
                    id="other"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className=" control-label">
                  Address Proof :<span className="asterisk">*</span>
                </label>
                <div className="mb-2">
                  <select
                    className="form-control"
                    id="address_proof_type"
                    name="address_proof_type"
                  >
                    <option value="Utility Bill(Not old then 2 months)">
                      Utility Bill(Not old then 2 months)
                    </option>
                    <option value="Driving Licence">Driving Licence</option>
                    <option value="State ID Card">State ID Card</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <label className=" control-label">
                  Address Proof Image :<span className="asterisk">*</span>
                </label>
                <div className="mb-2">
                  <input
                    type="file"
                    name="address_proof_doc"
                    id="address_proof_doc"
                    className="form-control"
                  />
                </div>
                <div
                  className="form-group col-md-3 m-t-20 addressother"
                  style={{ display: "none" }}
                >
                  <input
                    type="text"
                    name="address_proof_other"
                    id="address_proof_other"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div
                className="form-group"
                id="upd_button"
                style={{ float: "right" }}
              >
                <div className="col-sm-5">
                  {/*<input type="hidden" name="fxValidate" id="fxValidate" value="" />*/}
                  <button type="submit" className="btn btn-primary mr5">
                    Upload
                  </button>
                </div>
              </div>
            </form>
            <br />
            <form
              name="frmekyc"
              id="frmekyc"
              onsubmit="return false;"
              encType="multipart/form-data"
            >
              <ul className="nav nav-tabs nav-line">
                <li className="active">
                  <a href="#upload_kyc" data-toggle="tab">
                    <strong>Update EKYC</strong>
                  </a>
                </li>
              </ul>
              <br />
              <div className="form-group">
                <a href="javascript:void(0);" className="uploadEKyc">
                  <p>Upload E Kyc</p>
                </a>{" "}
                <br />
                <a href="javascript:void(0);" className="takeEkyc">
                  Take E Kyc
                </a>
              </div>
              <div className="upload_ekyc" style={{ display: "none" }}>
                <div className="form-group">
                  <label className=" control-label">
                    EKyc Image :<span className="asterisk">*</span>
                  </label>
                  <div className="mb-2">
                    <input
                      type="file"
                      name="ekyc_image"
                      id="ekyc_image"
                      className="form-control"
                    />
                  </div>
                  <br />
                </div>
                <div className="form-group">
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      name="upload_ekyc_type"
                      id="upload_ekyc_type"
                    >
                      <option value="">-- Select Ekyc Type --</option>
                      <option value="Passport">Passport</option>
                      <option value="Pan_card">Pan Card</option>
                      <option value="driving_licence">Driving Licence</option>
                      <option value="other_government_identity">
                        Other Government Identity
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary mr5">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="ekyc" style={{ display: "none" }}>
                  <div id="my_camera" /> <br />
                  <div id="results" />
                  <div className="form-group">
                    <div className="col-md-4">
                      <select
                        className="form-control"
                        name="ekyc_type"
                        id="ekyc_type"
                      >
                        <option value="">-- Select Ekyc Type --</option>
                        <option value="Passport">Passport</option>
                        <option value="Pan_card">Pan Card</option>
                        <option value="driving_licence">Driving Licence</option>
                        <option value="other_government_identity">
                          Other Government Identity
                        </option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-info ready"
                    onclick="resdyCam();"
                  >
                    Ready Cam
                  </button>
                  <button
                    type="button"
                    className="btn btn-info snapshot"
                    onclick="take_snapshot();"
                    style={{ display: "none" }}
                  >
                    Take Snapshot
                  </button>
                  <button
                    type="button"
                    className="btn btn-info save"
                    onclick="saveSnap();"
                    style={{ display: "none" }}
                  >
                    Save Snapshot
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default profile;
