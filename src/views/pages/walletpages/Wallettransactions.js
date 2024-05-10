import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";

function Wallettransaction() {
  const [picker, setPicker] = useState(new Date());
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Wallet Transaction</h4>
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
                      Status
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
                      Credit
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
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2024/05/09</td>
                    <td>T - NNMMkjX6g</td>
                    <td>Voucher Created From Wallet Balance</td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">10</font>
                    </td>
                    <td>187309.139</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2023/10/31</td>
                    <td>T - g6dPlB1L7</td>
                    <td>Funds transferred from wallet # 2512</td>
                    <td></td>
                    <td>
                      <font color="green">100</font>
                    </td>
                    <td>
                      <font color="red"></font>
                    </td>
                    <td>187319.139</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2023/10/12</td>
                    <td>T - pHSDbcvoH</td>
                    <td>Funds transferred from wallet # 6402</td>
                    <td></td>
                    <td>
                      <font color="green">12</font>
                    </td>
                    <td>
                      <font color="red"></font>
                    </td>
                    <td>187219.139</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2023/10/12</td>
                    <td>C - pHSDbcvoH</td>
                    <td></td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">0.65</font>
                    </td>
                    <td>187207.789</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2023/10/11</td>
                    <td>C - 482806691</td>
                    <td>Escrow Transaction Fees #7855</td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">0.59</font>
                    </td>
                    <td>187228.439</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2023/10/11</td>
                    <td>T - ldtMpEVMV</td>
                    <td>Funds transferred from wallet # 6402</td>
                    <td></td>
                    <td>
                      <font color="green">1</font>
                    </td>
                    <td>
                      <font color="red"></font>
                    </td>
                    <td>187229.029</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2021/12/16</td>
                    <td>C - ncDjAuPVp</td>
                    <td>Transaction amount for purchaseing CRM.</td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">9.99</font>
                    </td>
                    <td>187228.029</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2021/12/16</td>
                    <td>C - ncDjAuPVp</td>
                    <td>Transaction amount for purchaseing CRM.</td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">9.99</font>
                    </td>
                    <td>187228.029</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="sorting_1">2021/10/04</td>
                    <td>T - 587070033</td>
                    <td>Blocked Amount Towards Escrow #6586</td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">100</font>
                    </td>
                    <td>187238.019</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="sorting_1">2021/10/04</td>
                    <td>C - 765103236</td>
                    <td>Escrow Transaction Fees #6586</td>
                    <td></td>
                    <td>
                      <font color="green"></font>
                    </td>
                    <td>
                      <font color="red">3.25</font>
                    </td>
                    <td>187338.019</td>
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
                      Status
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallettransaction;
