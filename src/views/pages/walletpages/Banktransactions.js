import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";

function Banktransactions() {
  const [picker, setPicker] = useState(new Date());
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Bank Transaction</h4>
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
                  cellSpacing="0"
                  width="100%"
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
                        style={{ width: "81px" }}
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
                        style={{ width: "190px" }}
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
                        style={{ width: "156px" }}
                      >
                        Description
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example23"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Credit: activate to sort column ascending"
                        style={{ width: "97px" }}
                      >
                        Credit
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example23"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Debit: activate to sort column ascending"
                        style={{ width: "87px" }}
                      >
                        Debit
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example23"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Balance: activate to sort column ascending"
                        style={{ width: "120px" }}
                      >
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th rowSpan="1" colSpan="1">
                        Date
                      </th>
                      <th rowSpan="1" colSpan="1">
                        Transaction ID
                      </th>
                      <th rowSpan="1" colSpan="1">
                        Description
                      </th>
                      <th rowSpan="1" colSpan="1">
                        Credit
                      </th>
                      <th rowSpan="1" colSpan="1">
                        Debit
                      </th>
                      <th rowSpan="1" colSpan="1">
                        Balance
                      </th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr className="odd">
                      <td valign="top" colSpan="6" className="dataTables_empty">
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
  );
}

export default Banktransactions;
