import React, { useState } from "react";

function Prepaidcard() {
  const [showForm, setShowForm] = useState(false);
  const [showPhotoImage, setShowPhotoImage] = useState(false);
  const [showAddressImage, setShowAddressImage] = useState(false);
  const [showKycImage, setShowKycImage] = useState(false);
  const [showUploadKycImage, setShowUploadKycImage] = useState(false);
  const [showTakeKycImage, setShowTakeKycImage] = useState(false);
  const handleAccountLinkClick = () => {
    setShowForm(true);
  };
  const handlePhotoImageClick = () => {
    setShowAddressImage(false);
    setShowKycImage(false);
    setShowPhotoImage(true);
  };
  const handleAddressImageClick = () => {
    setShowKycImage(false);
    setShowPhotoImage(false);
    setShowAddressImage(true);
  };
  const handleKycImageClick = () => {
    setShowAddressImage(false);
    setShowPhotoImage(false);
    setShowKycImage(true);
  };
  const handleUploadKycImageClick = () => {
    setShowTakeKycImage(false);
    setShowUploadKycImage(true);
  };
  const handleTakeKycImageClick = () => {
    setShowUploadKycImage(false);
    setShowTakeKycImage(true);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body wizard-content">
              <h4 className="card-title">Prepaid Card</h4>
              <h6 className="card-subtitle"></h6>
              <a
                href="javascript:void(0)"
                className="btn btn-info"
                id="accountLink"
                onClick={handleAccountLinkClick}
              >
                Apply Prepaid Card
              </a>
            </div>
            <div
              className="row"
              style={{ display: showForm ? "block" : "none" }}
            >
              <div className="col-lg-12">
                <div className="pageheader">
                  <div className="media">
                    <div className="media-body">
                      <h4>Prepaid Card Form</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    method="POST"
                    encType="multipart/form-data"
                    id="frmapplyPrepaid"
                    autoComplete="off"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Wallet ID :<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            autoComplete="off"
                            name="wallet_id"
                            id="wallet_id"
                            className="form-control"
                            readOnly="readonly"
                            value="7352012357935562"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            SSN Number :<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            autoComplete="off"
                            name="ssn_number"
                            id="ssn_number"
                            className="form-control"
                            readOnly="readonly"
                            value="XXXX-111"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Date Of Birth:<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            name="dob"
                            autoComplete="off"
                            id="dob"
                            className="form-control"
                            value="1993-08-02"
                            readOnly="readonly"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            First Name :<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            name="fname"
                            autoComplete="off"
                            id="fname"
                            className="form-control"
                            readOnly="readonly"
                            value="John"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Last Name :<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            name="lname"
                            autoComplete="off"
                            id="lname"
                            className="form-control"
                            readOnly="readonly"
                            value="Doe"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Contact Number :<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            autoComplete="off"
                            id="phone"
                            className="form-control"
                            readOnly="readonly"
                            value="+1234567890"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Email Id :<span className="asterisk">*</span>
                          </label>
                          <input
                            type="text"
                            name="email"
                            autoComplete="off"
                            id="email"
                            className="form-control"
                            readOnly="readonly"
                            value="john@gmail.com"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Photo Image:<span className="asterisk">*</span>
                          </label>
                          <a
                            href="javascript:void(0);"
                            className="uploadImage"
                            rel="photoDIV"
                            onClick={handlePhotoImageClick}
                          >
                            Upload Image
                          </a>
                        </div>
                        <div className="form-group">
                          <label className="control-label">
                            Address Proof:<span className="asterisk">*</span>
                          </label>

                          <a
                            href="javascript:void(0);"
                            className="uploadImage"
                            rel="AddressDIV"
                            onClick={handleAddressImageClick}
                          >
                            Upload Image
                          </a>
                        </div>
                        <div className="form-group">
                          <label className="control-label">
                            Update KYC:<span className="asterisk">*</span>
                          </label>

                          <a
                            href="javascript:void(0);"
                            className="uploadImage"
                            rel="UpdateKYC"
                            onClick={handleKycImageClick}
                          >
                            Upload Image
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-group"
                          id="photoDIV"
                          style={{ display: showPhotoImage ? "block" : "none" }}
                        >
                          <label className="control-label">
                            Photo Image Type:-
                          </label>
                          <select
                            className="form-control"
                            id="photo_id"
                            name="photo_id"
                          >
                            <option value="Passport">Passport</option>
                            <option value="Driving Licence">
                              Driving Licence
                            </option>
                            <option value="State ID Card">State ID Card</option>
                            <option value="Other">
                              Other Government issue ID
                            </option>
                          </select>
                          <label className="control-label">Upload Photo</label>
                          <input
                            type="file"
                            name="photo_id_doc"
                            id="photo_id_doc"
                            className="form-control"
                          />
                          <div className="other" style={{ display: "none" }}>
                            <label className="control-label">
                              Other Photo Proof
                            </label>
                            <input
                              type="text"
                              autoComplete="off"
                              name="photo_proof_other"
                              id="photo_proof_other"
                              className="form-control "
                              value=""
                            />
                          </div>
                        </div>
                        <div
                          className="form-group"
                          id="AddressDIV"
                          style={{
                            display: showAddressImage ? "block" : "none",
                          }}
                        >
                          <label className="control-label">
                            Address Proof Type:-
                          </label>
                          <select
                            className="form-control"
                            id="address_proof_type"
                            name="address_proof_type"
                          >
                            <option value="Utility Bill(Not old then 2 months)">
                              Utility Bill(Not old then 2 months)
                            </option>
                            <option value="Driving Licence">
                              Driving Licence
                            </option>
                            <option value="State ID Card">State ID Card</option>
                            <option value="Other">Other</option>
                          </select>
                          <label className="control-label">
                            Upload Address Proof:
                          </label>
                          <input
                            type="file"
                            name="AddressProof"
                            id="AddressProof"
                            className="form-control"
                          />
                          <div
                            className="addressother"
                            style={{ display: "none" }}
                          >
                            <label className="control-label">
                              Other Address Proof
                            </label>
                            <input
                              type="text"
                              autoComplete="off"
                              name="address_proof_other"
                              id="address_proof_other"
                              className="form-control "
                              value=""
                            />
                          </div>
                        </div>
                        <div
                          className="form-group"
                          id="UpdateKYC"
                          style={{ display: showKycImage ? "block" : "none" }}
                        >
                          <a
                            href="javascript:void(0);"
                            className="uploadEKyc"
                            onClick={handleUploadKycImageClick}
                          >
                            <p>Upload E Kyc</p>
                          </a>{" "}
                          <br />
                          <a
                            href="javascript:void(0);"
                            className="takeEkyc"
                            onClick={handleTakeKycImageClick}
                          >
                            Take E Kyc
                          </a>
                        </div>
                        <div
                          className="upload_ekyc"
                          style={{
                            display: showUploadKycImage ? "block" : "none",
                          }}
                        >
                          <div className="form-group">
                            <label className="control-label">KYC Type:</label>
                            <select
                              className="form-control"
                              name="upload_ekyc_type"
                              id="upload_ekyc_type"
                            >
                              <option value="">-- Select Ekyc Type --</option>
                              <option value="Passport">Passport</option>
                              <option value="Pan_card">Pan Card</option>
                              <option value="driving_licence">
                                Driving Licence
                              </option>
                              <option value="other_government_identity">
                                Other Government Identity
                              </option>
                            </select>
                            <label className="control-label">Upload KYC</label>
                            <input
                              type="file"
                              name="ekyc_image"
                              id="ekyc_image"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div
                          className="ekyc"
                          style={{
                            display: showTakeKycImage ? "block" : "none",
                          }}
                        >
                          <input
                            type="hidden"
                            name="imagePreview"
                            id="imagePreview"
                          />
                          <div id="results"></div>
                          <div id="my_camera"></div>
                          <label className="control-label">KYC Type:</label>
                          <select
                            className="form-control"
                            name="upload_ekyc_type1"
                            id="upload_ekyc_type1"
                          >
                            <option value="">-- Select Ekyc Type --</option>
                            <option value="Passport">Passport</option>
                            <option value="Pan_card">Pan Card</option>
                            <option value="driving_licence">
                              Driving Licence
                            </option>
                            <option value="other_government_identity">
                              Other Government Identity
                            </option>
                          </select>
                          <button
                            type="button"
                            className="btn btn-info ready"
                            onClick={() => resdyCam()}
                          >
                            Ready Cam
                          </button>
                          <button
                            type="button"
                            className="btn btn-info snapshot"
                            onClick={() => take_snapshot()}
                            style={{ display: "none" }}
                          >
                            Take Snapshot
                          </button>
                          <button
                            type="button"
                            className="btn btn-info save"
                            onClick={() => saveSnap()}
                            style={{ display: "none" }}
                          >
                            Save Snapshot
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-sm-9 col-sm-offset-3">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                          <button type="reset" className="btn btn-default">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prepaidcard;
