import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";

function Cashtransactions() {
  const [picker, setPicker] = useState(new Date());
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Cash Transaction</h4>
              <div className="row">
                <div className="col-12">
                  <form method="post" action="" autoComplete="off">
                    <div className="row">
                      <div className="col-md-10 ">
                        <Flatpickr
                          value={picker}
                          id="range-picker"
                          className="form-control"
                          onChange={(date) => setPicker(date)}
                          options={{
                            mode: "range",
                            defaultDate: ["2020-02-01", "2020-02-15"],
                          }}
                        />
                      </div>
                      <div className="col-md-2 ">
                        <input
                          type="submit"
                          className="btn btn-info"
                          id="btn_submit"
                          value="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="row button-group">
                <div className="col-12">
                  <div className="btn-group">
                    <h4>Credit Transaction</h4>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div
                  id="example23_wrapper"
                  className="dataTables_wrapper  dt-bootstrap4"
                >
                  <div className="dt-buttons d-flex gap-1">
                    <button
                      className="dt-button buttons-csv buttons-html5 btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example23"
                    >
                      <span>CSV</span>
                    </button>
                    <button
                      className="dt-button buttons-excel buttons-html5 btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example23"
                    >
                      <span>Excel</span>
                    </button>
                    <button
                      className="dt-button buttons-pdf buttons-html5 btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example23"
                    >
                      <span>PDF</span>
                    </button>
                    <button
                      className="dt-button buttons-print btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example23"
                    >
                      <span>Print</span>
                    </button>
                  </div>
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
                    className="display nowrap table table-hover table-striped table-bordered dataTable"
                    cellSpacing="0"
                    width="100%"
                    role="grid"
                    aria-describedby="example23_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Date: activate to sort column descending"
                          style={{ width: "67px" }}
                        >
                          Date
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Transaction ID: activate to sort column ascending"
                          style={{ width: "102px" }}
                        >
                          Transaction ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Description: activate to sort column ascending"
                          style={{ width: "81px" }}
                        >
                          Description
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example23"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Balance: activate to sort column ascending"
                          style={{ width: "59px" }}
                        >
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td className="sorting_1">2020/06/24</td>
                        <td>682134694</td>
                        <td>test</td>
                        <td>100</td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">2021/09/16</td>
                        <td>20227219</td>
                        <td>fdfsdfdf</td>
                        <td>120</td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">2024/05/09</td>
                        <td>518718494</td>
                        <td></td>
                        <td>50</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan="3" rowSpan="1">
                          Total
                        </th>
                        <th rowSpan="1" colSpan="1">
                          270
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div
                    className="dataTables_info"
                    id="example23_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 3 of 3 entries
                  </div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="example23_paginate"
                  >
                    {/* Pagination buttons go here */}
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
                    <h4>Debit Transaction</h4>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div
                  id="example231_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="dt-buttons d-flex gap-1">
                    <button
                      className="dt-button buttons-csv buttons-html5 btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example231"
                    >
                      <span>CSV</span>
                    </button>
                    <button
                      className="dt-button buttons-excel buttons-html5 btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example231"
                    >
                      <span>Excel</span>
                    </button>
                    <button
                      className="dt-button buttons-pdf buttons-html5 btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example231"
                    >
                      <span>PDF</span>
                    </button>
                    <button
                      className="dt-button buttons-print btn btn-primary mr-1"
                      tabIndex="0"
                      aria-controls="example231"
                    >
                      <span>Print</span>
                    </button>
                  </div>
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
                    className="display nowrap table table-hover table-striped table-bordered dataTable"
                    cellSpacing="0"
                    width="100%"
                    role="grid"
                    aria-describedby="example231_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabIndex="0"
                          aria-controls="example231"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Date: activate to sort column descending"
                          style={{ width: "58px" }}
                        >
                          Date
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example231"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Transaction ID: activate to sort column ascending"
                          style={{ width: "102px" }}
                        >
                          Transaction ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example231"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Description: activate to sort column ascending"
                          style={{ width: "81px" }}
                        >
                          Description
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="example231"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Balance: activate to sort column ascending"
                          style={{ width: "59px" }}
                        >
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td className="sorting_1">2021/09/16</td>
                        <td>557809723</td>
                        <td>vcxvxcv</td>
                        <td>50</td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">2022/11/16</td>
                        <td>491828452</td>
                        <td>test</td>
                        <td>10</td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">2022/11/16</td>
                        <td>85615836</td>
                        <td>test</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan="3" rowSpan="1">
                          Total
                        </th>
                        <th rowSpan="1" colSpan="1">
                          70
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div
                    className="dataTables_info"
                    id="example231_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 3 of 3 entries
                  </div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="example231_paginate"
                  >
                    {/* Pagination buttons go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row button-group">
                <div className="col-12">
                  <div className="btn-group">
                    <p></p>
                    <h4>
                      <b>Cash In Hand</b>
                    </h4>
                    &nbsp;&nbsp;&nbsp;
                    <h4>
                      <b style={{ color: "#04f41c" }}>200</b>
                    </h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cashtransactions;
