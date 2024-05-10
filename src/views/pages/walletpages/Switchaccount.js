import React, { useState } from "react";

function Switchaccount() {
  const [showForm, setShowForm] = useState(false);
  const handleAccountLinkClick = () => {
    setShowForm(true);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body wizard-content">
              <h4 className="card-title">List Switch Account</h4>
              <h6 className="card-subtitle"></h6>
              <a
                href="javascript:void(0)"
                className="btn btn-info"
                id="accountLink"
                onClick={handleAccountLinkClick}
              >
                Account Link
              </a>
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
                    cellspacing="0"
                    width="100%"
                    role="grid"
                    aria-describedby="example23_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_desc"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="descending"
                          aria-label="Sr.No: activate to sort column ascending"
                          style={{ width: "127.75px" }}
                        >
                          Sr.No
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="From User Name: activate to sort column ascending"
                          style={{ width: "297.75px" }}
                        >
                          From User Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="To User Name: activate to sort column ascending"
                          style={{ width: "257.75px" }}
                        >
                          To User Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Link Wallet Type: activate to sort column ascending"
                          style={{ width: "288.75px" }}
                        >
                          Link Wallet Type
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "145px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th rowSpan="1" colSpan="1">
                          Sr.No
                        </th>
                        <th rowSpan="1" colSpan="1">
                          From User Name
                        </th>
                        <th rowSpan="1" colSpan="1">
                          To User Name
                        </th>
                        <th rowSpan="1" colSpan="1">
                          Link Wallet Type
                        </th>
                        <th rowSpan="1" colSpan="1">
                          Action
                        </th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr className="odd">
                        <td
                          valign="top"
                          colSpan="5"
                          className="dataTables_empty"
                        >
                          No data available in table
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    id="example23_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 0 to 0 of 0 entries
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
                          data-dt-idx="0"
                          tabIndex="0"
                          className="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="example23_next"
                      >
                        <a
                          href="#"
                          aria-controls="example23"
                          data-dt-idx="1"
                          tabIndex="0"
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
      </div>
      <div
        className="row"
        id="account-linkForm"
        style={{ display: showForm ? "block" : "none" }}
      >
        <div className="col-12">
          <div className="card">
            <div className="card-body wizard-content">
              <h4 className="card-title">Add Switch Account</h4>
              <h6 className="card-subtitle"></h6>
              <section>
                <form
                  id="switchAccForm"
                  className="form-horizontal"
                  name="switchAccForm"
                  onSubmit={(e) => e.preventDefault()}
                  enctype="multipart/form-data"
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName1">
                          <strong>Company Details:</strong>
                        </label>
                      </div>
                      <input
                        type="hidden"
                        name="companyStatus"
                        id="companyStatus"
                        value=""
                      />
                      <div className="form-group">
                        <label htmlFor="lastName1">Legal business name:</label>
                        <input
                          type="text"
                          name="business_name"
                          className="form-control"
                          id="business_name"
                          value=""
                          autoComplete="off"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailAddress1">
                          Company Email/Office Email:
                        </label>
                        <input
                          type="text"
                          name="company_email"
                          className="form-control company_email"
                          id="company_email"
                          autoComplete="off"
                          value=""
                        />
                        <span id="companyemail_msg"></span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName1">Work Mobile No:</label>
                        <div className="intl-tel-input">
                          <input
                            type="text"
                            name="business_mobileNo"
                            className="form-control"
                            id="business_mobileNo"
                            autoComplete="off"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName1">EIN No:</label>
                        <input
                          type="text"
                          name="business_einNo"
                          className="form-control ein-inputmask"
                          id="business_einNo"
                          autoComplete="off"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName1">
                          <strong>Individual Details:</strong>
                        </label>
                      </div>
                      <input
                        type="hidden"
                        name="individualStatus"
                        id="individualStatus"
                        value=""
                      />
                      <div className="form-group">
                        <label htmlFor="lastName1">User name:</label>
                        <input
                          type="text"
                          name="user_name"
                          className="form-control"
                          id="user_name"
                          autoComplete="off"
                          value="John John"
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailAddress1">Individual Email:</label>
                        <input
                          type="text"
                          name="individual_email"
                          className="form-control individual_email"
                          id="individual_email"
                          autoComplete="off"
                          value="Johngaurav40@gmail.com"
                          readOnly
                        />
                        <span id="individualemail_msg"></span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName1">Personal Mobile No:</label>
                        <input
                          type="text"
                          name="personal_mobileNo"
                          className="form-control"
                          id="personal_mobileNo"
                          autoComplete="off"
                          value="+919579668524"
                          readOnly
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName1">SSN No:</label>
                        <input
                          type="text"
                          name="ssnNo"
                          className="form-control ssn-inputmask"
                          id="ssnNo"
                          autoComplete="off"
                          value="111-111-111"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row" id="otpDiv" style={{ display: "none" }}>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">
                          <strong>Enter OTP :</strong>
                        </label>
                        <input
                          type="text"
                          name="otpValue"
                          id="otpValue"
                          className="form-control otpValue"
                        />
                        <span className="verificationTimer"></span>
                        <button
                          type="button"
                          className="btn btn-info btn-sm resendOTP"
                          style={{ display: "none" }}
                        >
                          Resend OTP
                        </button>
                        <button
                          type="button"
                          className="btn btn-info btn-sm callNow"
                          style={{ display: "none" }}
                          rel="6"
                          data-id="Hello,This is lock trust.Your Account Linking Verification One Time Password Is :- "
                        >
                          Call Me
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="footer-btn" style={{ textAlign: "right" }}>
                    <input
                      type="hidden"
                      name="LinkUserphoneNumber"
                      id="LinkUserphoneNumber"
                      value=""
                    />
                    <input
                      type="hidden"
                      name="LinkUserwalletNumber"
                      id="LinkUserwalletNumber"
                      value=""
                    />
                    <input
                      type="submit"
                      name="next"
                      id="next"
                      className="btn btn-info"
                      value="Submit"
                    />
                    <input
                      type="button"
                      name="btnSubmit"
                      id="btnSendOtp"
                      className="btn btn-info"
                      style={{ display: "none" }}
                      value="Submit"
                    />
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Switchaccount;
