import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table,
  FormGroup,
  Input,
  Col,
  Label,
  Form,
} from "reactstrap";

export const TabsFilled = ({ tabs, cp }) => {
  const [active, setActive] = useState("0");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <React.Fragment>
      <Nav tabs fill>
        {tabs.map((tab, index) => (
          <NavItem key={tab}>
            <NavLink
              active={active == index}
              onClick={() => toggle(`${index}`)}
            >
              {tab}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent className="py-50" activeTab={`${active}`}>
        {cp.map((Component, id) => (
          <TabPane key={id} tabId={`${id}`}>
            <Component />
          </TabPane>
        ))}
      </TabContent>
    </React.Fragment>
  );
};

export const SenderEsTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      feesPaidBy: "Alice",
      transactionFees: 5,
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      feesPaidBy: "Bob",
      transactionFees: 10,
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      feesPaidBy: "Charlie",
      transactionFees: 7,
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Fees Paid By</th>
          <th>Transaction Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.feesPaidBy}</td>
            <td>{transaction.transactionFees}</td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const RecievEsTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      feesPaidBy: "Alice",
      transactionFees: 5,
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      feesPaidBy: "Bob",
      transactionFees: 10,
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      feesPaidBy: "Charlie",
      transactionFees: 7,
    },
    {
      id: 4,
      transferFrom: "7841692299116402",
      transferTo: "7352012357935562",
      amount: 10,
      feesPaidBy: "Sender",
      transactionFees: 0.59,
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Fees Paid By</th>
          <th>Transaction Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.feesPaidBy}</td>
            <td>{transaction.transactionFees}</td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const TransactionTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      feesPaidBy: "Alice",
      transactionFees: 5,
      inspectionFees: 2,
      inspectionFeesPaidBy: "Sender",
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      feesPaidBy: "Bob",
      transactionFees: 10,
      inspectionFees: 3,
      inspectionFeesPaidBy: "Recipient",
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      feesPaidBy: "Charlie",
      transactionFees: 7,
      inspectionFees: 1,
      inspectionFeesPaidBy: "Sender",
    },
    {
      id: 4,
      transferFrom: "7841692299116402",
      transferTo: "7352012357935562",
      amount: 10,
      feesPaidBy: "Sender",
      transactionFees: 0.59,
      inspectionFees: 0.5,
      inspectionFeesPaidBy: "Recipient",
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Fees Paid By</th>
          <th>Transaction Fees</th>
          <th>Inspection Fees</th>
          <th>Inspection Fees Paid By</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.feesPaidBy}</td>
            <td>{transaction.transactionFees}</td>
            <td>{transaction.inspectionFees}</td>
            <td>{transaction.inspectionFeesPaidBy}</td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const IncpectionTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      feesPaidBy: "Alice",
      transactionFees: 5,
      inspectionFees: 2,
      inspectionFeesPaidBy: "Sender",
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      feesPaidBy: "Bob",
      transactionFees: 10,
      inspectionFees: 3,
      inspectionFeesPaidBy: "Recipient",
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      feesPaidBy: "Charlie",
      transactionFees: 7,
      inspectionFees: 1,
      inspectionFeesPaidBy: "Sender",
    },
    {
      id: 4,
      transferFrom: "7841692299116402",
      transferTo: "7352012357935562",
      amount: 10,
      feesPaidBy: "Sender",
      transactionFees: 0.59,
      inspectionFees: 0.5,
      inspectionFeesPaidBy: "Recipient",
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Fees Paid By</th>
          <th>Transaction Fees</th>
          <th>Inspection Fees</th>
          <th>Inspection Fees Paid By</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.feesPaidBy}</td>
            <td>{transaction.transactionFees}</td>
            <td>{transaction.inspectionFees}</td>
            <td>{transaction.inspectionFeesPaidBy}</td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const BuyerTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      transactionFees: 5,
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      transactionFees: 10,
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      transactionFees: 7,
    },
    {
      id: 4,
      transferFrom: "7841692299116402",
      transferTo: "7352012357935562",
      amount: 10,
      transactionFees: 0.59,
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Transaction Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.transactionFees}</td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const TradTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      transactionFees: 5,
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      transactionFees: 10,
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      transactionFees: 7,
    },
    {
      id: 4,
      transferFrom: "7841692299116402",
      transferTo: "7352012357935562",
      amount: 10,
      transactionFees: 0.59,
    },
    {
      id: 10,
      transferFrom: "From Escrow ID 30",
      transferTo: "7352012357935562",
      amount: 1.0,
      transactionFees: null,
    },
    {
      id: 8,
      transferFrom: "From Escrow ID 15",
      transferTo: "7352012357935562",
      amount: 0.67,
      transactionFees: 0.33,
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Transaction Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>
              {transaction.transactionFees !== null
                ? transaction.transactionFees
                : ""}
            </td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const SaleTable = () => {
  // Sample data
  const transactions = [
    {
      id: 1,
      transferFrom: "Alice",
      transferTo: "Bob",
      amount: 100,
      transactionFees: 5,
    },
    {
      id: 2,
      transferFrom: "Bob",
      transferTo: "Charlie",
      amount: 200,
      transactionFees: 10,
    },
    {
      id: 3,
      transferFrom: "Charlie",
      transferTo: "Alice",
      amount: 150,
      transactionFees: 7,
    },
    {
      id: 4,
      transferFrom: "7841692299116402",
      transferTo: "7352012357935562",
      amount: 10,
      transactionFees: 0.59,
    },
    {
      id: 10,
      transferFrom: "From Escrow ID 30",
      transferTo: "7352012357935562",
      amount: 1.0,
      transactionFees: null,
    },
    {
      id: 8,
      transferFrom: "From Escrow ID 15",
      transferTo: "7352012357935562",
      amount: 0.67,
      transactionFees: 0.33,
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transfer From</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Transaction Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.transferFrom}</td>
            <td>{transaction.transferTo}</td>
            <td>{transaction.amount}</td>
            <td>
              {transaction.transactionFees !== null
                ? transaction.transactionFees
                : ""}
            </td>
            <td>{/* Action column content */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const AddEscrow = () => {
  return (
    <form id="escrowForm" className="form-horizontal" autoComplete="off">
      <input
        type="hidden"
        name="toUserID"
        id="toUserID"
        className="form-control"
      />
      <div className="form-group mb-1">
        <label htmlFor="transferto" className="col-sm-3 control-label">
          Transfer to :<span className="asterisk">*</span>
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            autoComplete="off"
            name="transferto"
            id="transferto"
            className="form-control"
            placeholder="Enter Wallet ID/Email/Phone"
            required
          />
        </div>
      </div>
      <div className="form-group mb-1">
        <label htmlFor="" className="col-sm-3 control-label">
          Amount :<span className="asterisk">*</span>
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            autoComplete="off"
            name="transferto"
            className="form-control"
            placeholder="$"
            required
          />
        </div>
      </div>

      <div className="form-group mb-1">
        <label className="col-sm-3 control-label">
          Transaction Fees :<span className="asterisk">*</span>
        </label>
        <div className="col-sm-12">
          <input
            type="radio"
            name="escrow_walletpayfees"
            value="1"
            className="transactionFee"
          />{" "}
          Sender pay's &nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="escrow_walletpayfees"
            value="2"
            className="transactionFee"
          />{" "}
          Receiver pay's
          <br />
          <br />
          <label
            className="control-label"
            style={{ display: "none" }}
            id="wallet_fees_note"
          ></label>
          <input
            type="hidden"
            name="escrow_transaction_fees"
            id="escrow_transaction_fees"
            value="0.30"
          />
          <input
            type="text"
            autoComplete="off"
            name="escrow_wallet_transaction_fees"
            id="escrow_wallet_transaction_fees"
            value="0"
            className="form-control"
            readOnly
          />
          <input
            type="hidden"
            name="escrow_final_wallet_amount"
            value="NaN"
            id="escrow_final_wallet_amount"
          />
          <span id="escrow_transaction_msg">
            <small>Receiver Will Get</small>
          </span>
        </div>
      </div>
      <div className="form-group mb-1">
        <label className="col-sm-3 control-label">
          Escrow Days :<span className="asterisk">*</span>
        </label>
        <div className="col-sm-12">
          <select className="form-control" name="escrow_days" id="escrow_days">
            <option value="">--Select Escrow Days--</option>
            {[...Array(30).keys()].map((day) => (
              <option key={day + 1} value={day + 1}>
                {day + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group mb-1">
        <label className="col-sm-3 control-label">
          Remarks :<span className="asterisk">*</span>
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            autoComplete="off"
            name="tran_remarks"
            className="form-control"
            placeholder="Eg: Bill Payment"
            required
          />
        </div>
      </div>

      <div className="panel-footer">
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3">
            <input type="button" className="btn btn-primary" value="Submit" />
            <button
              type="button"
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
};

export const MultiPartyEscrow = () => {
  const [rows, setRows] = useState([{ id: 1 }]); // Initial state with one row

  const addRow = () => {
    const newRow = { id: rows.length + 1 }; // Generate unique ID for new row
    setRows([...rows, newRow]); // Add new row to the state
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id); // Filter out the row to be deleted
    setRows(updatedRows); // Update the state with filtered rows
  };
  return (
    <Form >
      <FormGroup>
        <Label for="TransferTO">Transfer To</Label>
        <Input
          type="text"
          name="TransferTO"
          id="TransferTO"
          placeholder="Enter Wallet ID/Email/Phone"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup>
        <span style={{ color: "green" }}>Available Balance : - 187309.139</span>
        <p id="walletBalanceErr" style={{ display: "none", color: "red" }}>
          Please check your wallet balance.
        </p>
        <p id="error_msg1" style={{ display: "none" }}>
          Wallet User your Sending Funds Have Not Updated Their KYC Please have
          Them Update Their KYC.
          <br />
          <button className="btn btn-info">Click Here to Send Reminder</button>
        </p>
        <Input type="hidden" name="ekycstatus" id="ekycstatus1" value="" />
      </FormGroup>
      <div className="row">
        <Col md="6">
          <FormGroup>
            <Label for="escrowAmount">Amount</Label>
            <Input
              type="hidden"
              name="FromUserwalletBalance"
              id="FromUserwalletBalance"
              value="187309.139"
            />
            <Input
              type="text"
              name="escrowAmount"
              id="escrowAmount"
              placeholder="Enter Amount"
              autoComplete="off"
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Input
              type="hidden"
              name="Walletfeesper"
              id="Walletfeesper"
              value="2.95"
            />
            <Input
              type="hidden"
              name="transactionFees_escrow"
              id="transactionFees_escrow"
              value="0.30"
            />
            <Label>Transaction Fees:- </Label>
            <Input
              type="radio"
              name="escrowPayFees"
              className="MultiEscrowPayFees"
              value="1"
              
            />{" "}
            Sender pay's
            <Input
              type="radio"
              name="escrowPayFees"
              className="MultiEscrowPayFees"
              value="2"
              
            />{" "}
            Receiver pay's
            <Label style={{ display: "none" }} id="wallet_Fees_note" />
            <Input
              type="hidden"
              name="Multiescrow_Transaction_fees"
              id="Multiescrow_Transaction_fees"
              value=""
            />
            <Input
              type="hidden"
              name="Multiescrow_Final_wallet_amount"
              value="0"
              id="Multiescrow_Final_wallet_amount"
            />
            <span id="escrow_Transaction_msg"></span>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>Escrow Days:</Label>
            <Input
              type="select"
              name="multiescrow_days"
              id="multiescrow_days"

            >
              <option value="">-- Select Escrow Days --</option>
              {[...Array(30).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>Remarks:</Label>
            <Input
              type="text"
              name="multiescrowRemark"
              id="multiescrowRemark"
              placeholder="Enter Remarks"
              autoComplete="off"

            />
            <Input
              type="hidden"
              name="MultiEscrowUserSenderFees"
              id="MultiEscrowUserSenderFees"
              value=""
            />
          </FormGroup>
        </Col>
      </div>
     

      <div className="form-group">
        <input type="hidden" name="resultphone[]" id="resultphone_1" value="" />
        <table
          border="0"
          className="tbl-vid-list"
          style={{ borderCollapse: "separate" }}
          cellPadding="5"
          cellSpacing="1"
          id="tbl-list"
          width="100%"
          bgcolor="#DFDFDF"
        >
          <thead>
            <tr>
              <th bgcolor="#EFEFEF">Wallet ID/Email ID/Phone</th>
              <th bgcolor="#EFEFEF">Wallet ID</th>
              <th bgcolor="#EFEFEF">Email</th>
              <th bgcolor="#EFEFEF">Phone</th>
              <th bgcolor="#EFEFEF">Upload Document</th>
              <th bgcolor="#EFEFEF">Fees</th>
              <th bgcolor="#EFEFEF">Fees Paid By</th>
              <th bgcolor="#EFEFEF">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="userName[]"
                    className="form-control text_1"
                    data-id={row.id}
                    id={`userName_${row.id}`}
                    value=""
                    placeholder="Search Email ID"
                    autoComplete="off"
                  />
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="userWalletID[]"
                    className="form-control text_1"
                    data-id={row.id}
                    id={`userWalletID_${row.id}`}
                    value=""
                    placeholder="Wallet ID"
                    autoComplete="off"
                  />
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="userEmail[]"
                    className="form-control text_1 userEmail"
                    data-id={row.id}
                    id={`userEmail_${row.id}`}
                    value=""
                    placeholder="Email Address"
                    autoComplete="off"
                    required
                  />
                </td>
                <td bgcolor="#FFFFFF">
                  <select
                    name="country[]"
                    className="form-control text_1"
                    id={`country_${row.id}`}
                    data-id={row.id}
                  >
                    <option data-countrycode="US" value="+1">
                      UK (+1)
                    </option>
                  </select>
                  <input
                    type="text"
                    name="phone[]"
                    className="form-control text_1 userPhone"
                    id={`userPhone_${row.id}`}
                    data-id={row.id}
                    value=""
                    placeholder="Phone Number"
                    autoComplete="off"
                    maxLength="10"
                    required
                  />
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="file"
                    name="upload_doc[]"
                    className="form-control text_1"
                    data-id={row.id}
                    value=""
                    placeholder=""
                  />
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="text"
                    name="fees[]"
                    className="form-control text_1 user_fees"
                    data-id={row.id}
                    value=""
                    placeholder="User Fees"
                    autoComplete="off"
                    required
                  />
                </td>
                <td bgcolor="#FFFFFF">
                  <input
                    type="radio"
                    name={`feesPaidBy[${row.id}]`}
                    value="1"
                    className="feesPaidBy"
                    placeholder=""
                    required
                  />{" "}
                  Sender
                  <input
                    type="radio"
                    name={`feesPaidBy[${row.id}]`}
                    value="2"
                    className="feesPaidBy"
                    placeholder=""
                    required
                  />{" "}
                  Receiver
                </td>
                <td bgcolor="#FFFFFF" align="center">
                  <a
                    href="#"
                    className="del-vid btn-small btn btn-info"
                    onClick={() => deleteRow(row.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary" onClick={addRow}>
          Add Row
        </button>
      </div>
    </Form>
  );
};
