import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
function Alltransactions() {
  const [picker, setPicker] = useState(new Date());
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">All Transaction</h4>
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
            <div className="table-responsive mt-2">
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
                      style={{ width: "297px" }}
                    >
                      Description
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example23"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Transaction Type: activate to sort column ascending"
                      style={{ width: "123px" }}
                    >
                      Transaction Type
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example23"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Debit: activate to sort column ascending"
                      style={{ width: "139px" }}
                    >
                      Debit
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example23"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Credit: activate to sort column ascending"
                      style={{ width: "44px" }}
                    >
                      Credit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2024/05/09</td>
                    <td>518718494</td>
                    <td></td>

                    <td>Cash</td>
                    <td>0</td>
                    <td>50</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2020/04/10</td>
                    <td>T - gedVbBmUh</td>
                    <td>Funds transfered to wallet # 5562</td>

                    <td>Wallet</td>
                    <td>0</td>
                    <td>32</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2020/04/11</td>
                    <td>T - 4HS5gBgAx</td>
                    <td>Funds transfered to wallet # 5562</td>

                    <td>Wallet</td>
                    <td>0</td>
                    <td>23</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2020/04/11</td>
                    <td>C - 576820034</td>
                    <td>Escrow Transaction Fees #4961</td>

                    <td>Wallet</td>
                    <td>1.5685000000000002</td>
                    <td>0</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2020/04/11</td>
                    <td>T - kT89765Po</td>
                    <td>Funds transfered to wallet # 5562</td>

                    <td>Wallet</td>
                    <td>0</td>
                    <td>200</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2020/04/11</td>
                    <td>T - gXmhOn6aE</td>
                    <td>Funds transfered to wallet # 5562</td>

                    <td>Wallet</td>
                    <td>0</td>
                    <td>21</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2020/04/15</td>
                    <td>T - H42lrStfv</td>
                    <td>Funds transfered to wallet # 5562</td>

                    <td>Wallet</td>
                    <td>0</td>
                    <td>88</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2020/04/15</td>
                    <td>T - KSt1rNqMq</td>
                    <td>Funds transfered to wallet # 5562</td>

                    <td>Wallet</td>
                    <td>0</td>
                    <td>55</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2020/04/21</td>
                    <td>T - 417120065</td>
                    <td>Blocked Amount Towards Escrow #2764</td>

                    <td>Wallet</td>
                    <td>158</td>
                    <td>0</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2020/04/21</td>
                    <td>T - 082145413</td>
                    <td>Blocked Amount Towards Escrow #2983</td>

                    <td>Wallet</td>
                    <td>158</td>
                    <td>0</td>
                  </tr>
                </tbody>
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
                      Transaction Type
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Debit
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Credit
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alltransactions;
