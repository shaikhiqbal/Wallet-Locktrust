import { ListGroup, ListGroupItem } from "reactstrap";

export const ChangePassword = () => {
  return (
    <form
      id="changepasswordForm"
      action="change_password"
      className="form-horizontal"
      method="post"
      autoComplete="off"
    >
      <div className="form-group mb-2">
        <div className="row">
          <label className="col-sm-3 control-label">
            Old Password :<span className="asterisk">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              autoComplete="off"
              name="old_password"
              id="old_password"
              className="form-control"
              required=""
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-2">
        <div className="row">
          <label className="col-sm-3 control-label">
            Password :<span className="asterisk">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              autoComplete="off"
              name="new_password"
              id="new_password"
              className="form-control"
              required=""
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-2">
        <div className="row">
          <label className="col-sm-3 control-label">
            Confirm Password :<span className="asterisk">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              className="form-control"
              required=""
              data-sider-insert-id="125d05fe-45b1-4011-87e0-8605d75af37f"
            />
          </div>
        </div>
      </div>
      {/*<div class="form-group">
                    <div class="row">
                        <a href="javascript:void(0)" data-toggle="modal" data-target=".forgotpassword" class="">Forgot Password?</a>
                    </div>
                </div>*/}
      <span id="error_msg" />
      <div className="panel-footer">
        <input
          type="hidden"
          name="fxValidate"
          id="fxValidate"
          defaultValue="%7B%22user_name%22%3A%7B%22func%22%3A%22required%22%2C%22msg%22%3A%22%22%7D%2C%22old_password%22%3A%7B%22func%22%3A%22required%22%2C%22msg%22%3A%22%22%7D%2C%22new_password%22%3A%7B%22func%22%3A%22required%22%2C%22msg%22%3A%22%22%7D%2C%22confirm_password%22%3A%7B%22func%22%3A%22required%22%2C%22msg%22%3A%22%22%7D%7D"
        />
        <div className="row">
          <div className="col-sm-9 col-sm-offset-3">
            {/* <button class="btn btn-primary" onClick="send_otp();">Submit</button> */}
            <input
              type="button"
              className="btn btn-primary"
              onclick="send_otp();"
              defaultValue="Submit"
            />
            <button type="reset" className="btn btn-default">
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export const AcountLinking = () => {
  return (
    <div className="mb-2">
      <form
        id="AcclinkForm"
        action="acc_link"
        className="form-horizontal"
        method="post"
        autoComplete="off"
      >
        <div className="form-group mb-2">
          <label className="col-sm-3 control-label">
            Wallet ID/ Email:<span className="asterisk">*</span>
          </label>
          <div className="col-md-6">
            <input
              type="text"
              autoComplete="off"
              name="l_wid"
              id="l_wid"
              className="form-control"
              placeholder="Enter Wallet ID or Email of the account to be linked."
              required="required"
            />
          </div>
          <p id="walletsuccmsg" style={{ color: "green", display: "none" }} />
          <p id="walleterrmsg" style={{ color: "red", display: "none" }} />
        </div>
        <div className="panel-footer">
          <div className="row">
            <input
              type="hidden"
              name="fxValidate"
              id="fxValidate"
              defaultValue="%7B%22l_wid%22%3A%7B%22func%22%3A%22required%22%2C%22msg%22%3A%22%22%7D%7D"
            />
            <div className="col-sm-9 col-sm-offset-3">
              {/* <button class="btn btn-primary">Submit</button> */}
              <button
                className="btn btn-primary btn-sm mr5"
                type="button"
                id="send_linking_otp"
                style={{ display: "none" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="row" align="center">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Wallet ID</th>
                  <th>Wallet Holder</th>
                  <th>Wallet Balance</th>
                  <th> Total</th>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <td>-</td>
                  <td >-</td>
                  <td >-</td>
                  <td colSpan={2}>0</td>
                </tr>
              </tfoot>
            </table>
          </div>
          {/* table-responsive */}
        </div>
      </div>
    </div>
  );
};

export const HomeSetup = () => {
  const option = [
    { value: "mytransactions", label: "My Transactions" },
    { value: "addmoney", label: "Add Money" },
    { value: "sendmoney", label: "Send Money" },
    { value: "invoice", label: "Invoice Management" },
    { value: "calendar", label: "Calendar Settings" },
    { value: "currencyconvert", label: "Currency Conversion" },
    { value: "accountsettings", label: "Account Settings" },
    { value: "support", label: "Support" },
    { value: "lockscreen", label: "Lock Screen" },
    { value: "logout", label: "Logout" },
  ];
  return (
    <ListGroup numbered>
      {option.map((el) => (
        <ListGroupItem key={el.value}>{el.label}</ListGroupItem>
      ))}
    </ListGroup>
  );
};
