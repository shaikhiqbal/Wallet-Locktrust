import React, { useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";

const exchangeRates = {
  "United Arab Emirates Dirhams - AED": 3.672925,
  "Australia Dollars - AUD": 1.52065,
  "Canada Dollars – CAD": 1.37259,
  "China Yuan Renminbi - CNY": 7.226497,
  "Euro - EUR": 0.932255,
  "United Kingdom Pounds - GBP": 0.80242,
  "India Rupees - INR": 83.50215,
  "Japan Yen - JPY": 155.902499,
  "Singapore Dollars - SGD": 1.356935,
};

function Currencyconversion() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [exchangedAmount, setExchangedAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    currencyConversion();
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    currencyConversion();
  };

  const currencyConversion = () => {
    const exchangeRates = {
      AED: 3.672925,
      AUD: 1.52065,
      CAD: 1.37259,
      CNY: 7.226497,
      EUR: 0.932255,
      GBP: 0.80242,
      INR: 83.50215,
      JPY: 155.902499,
      SGD: 1.356935,
    };

    const convertedAmount =
      parseFloat(amount) * exchangeRates[selectedCurrency];
    setExchangedAmount(convertedAmount.toFixed(2));
  };

  return (
    <>
      <div className="row" id="account-linkForm">
        <div className="col-12">
          <div className="card">
            <div className="card-body wizard-content">
              <h4 className="card-title">Currency Conversion</h4>
              <h6 className="card-subtitle"></h6>
              <table
                className="responsive table table-bordered"
                style={{ width: "80%" }}
                align="center"
              >
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>Exchange Rate</th>
                  </tr>
                </thead>
                <tbody id="t_body">
                  {Object.keys(exchangeRates).map((currency) => (
                    <tr key={currency}>
                      <td>{currency}</td>
                      <td>{exchangeRates[currency]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button className="mt-2 btn btn-primary">
                Refresh Exchange Rate
              </Button>

              <form
                id="form-validate"
                action="#"
                method="post"
                autoComplete="off"
                className="mt-2"
              >
                <table
                  className="responsive table table-bordered"
                  style={{ width: "80%" }}
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td>Amount :</td>
                      <td>
                        <input
                          type="text"
                          name="convert_am"
                          id="convert_am"
                          style={{ width: "100%" }}
                          className="form-control "
                          placeholder="Enter Amount"
                          value={amount}
                          onChange={handleAmountChange}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Convert From:</td>
                      <td>
                        <select
                          className="custom-select form-control custom-select-lg"
                          defaultValue="1"
                        >
                          <option value="1">USD</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Convert To:</td>
                      <td>
                        <select
                          id="convert_to"
                          name="Cur_to"
                          className="custom-select form-control custom-select-lg"
                          data-placeholder="Convert To.."
                          onChange={handleCurrencyChange}
                        >
                          <option value="">Select</option>
                          <option value="AED">AED</option>
                          <option value="AUD">AUD</option>
                          <option value="CAD">CAD</option>
                          <option value="CNY">CNY</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                          <option value="INR">INR</option>
                          <option value="JPY">JPY</option>
                          <option value="SGD">SGD</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Exchanged Amount: </td>
                      <td id="exchanged_amount">{exchangedAmount}</td>
                    </tr>
                  </tbody>
                </table>
                <div id="fb-root"></div>
                <div className="panel-footer mt-2">
                  <div className="row">
                    <div className="col-sm-9 col-sm-offset-3 currencybtn">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={currencyConversion}
                      >
                        Convert
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currencyconversion;
