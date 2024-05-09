import React from "react";
import { Card, CardBody } from "reactstrap";
const CRMItems = [
  {
    id: 1,
    name: "Dental",
    imageSrc: "https://ew.locktrust.com/assets/images/dental-2.jpg",
    loginLink: "javascript:void(0);",
    loginText: "Login",
  },
  {
    id: 2,
    name: "Marine",
    imageSrc: "https://ew.locktrust.com/assets/images/marine.jpg",
    loginLink: "javascript:void(0);",
    loginText: "Login",
  },
  {
    id: 4,
    name: "Rv Park",
    imageSrc: "https://ew.locktrust.com/assets/images/rvpart.jpeg",
    loginLink: "javascript:void(0);",
    loginText: "Login",
  },
  {
    id: 3,
    name: "Task Management",
    imageSrc: "https://ew.locktrust.com/assets/images/crm-icon.jpg",
    comingSoon: true,
  },
  {
    id: 5,
    name: "Locktrust TV",
    imageSrc: "https://ew.locktrust.com/assets/images/television.png",
    loginLink: "https://nerner.locktrust.tv",
    loginText: "Login",
    externalLink: true,
  },
  {
    id: 6,
    name: "Hospital Management",
    imageSrc: "https://ew.locktrust.com/assets/images/hm.jpg",
    loginLink: "https://hm1.locktrust.net/",
    loginText: "Login",
    externalLink: true,
  },
  {
    id: 7,
    name: "Payroll",
    imageSrc: "https://ew.locktrust.com/assets/images/payroll.png",
    loginLink: "https://ew.locktrust.com/payroll/signin",
    loginText: "Login",
    externalLink: true,
  },
];
const Appstore = () => {
  return (
    <div className="row" id="account-linkForm">
      <div className="col-12">
        <div className="card">
          <div className="card-body wizard-content">
            <h4 className="card-title">Select CRM</h4>
            <h6 className="card-subtitle"></h6>
            <section>
              <form
                id="CRMForm"
                className="form-horizontal"
                name="CRMForm"
                onSubmit={(e) => e.preventDefault()}
                encType="multipart/form-data"
                autoComplete="off"
              >
                <div className="row">
                  {CRMItems.map((item) => (
                    <Card key={item.id} className="col-md-3">
                      <CardBody>
                        <div className="d-flex flex-column align-items-center justify-content-center gap-1">
                          <div>
                            <a
                              href={item.loginLink}
                              className="crm11"
                              rel="9.99"
                              data-id={item.id}
                            >
                              <img
                                src={item.imageSrc}
                                width="100"
                                height="100"
                                alt={item.name}
                              />
                            </a>
                          </div>
                          <div>
                            <span>
                              <strong>{item.name}</strong>
                            </span>
                          </div>
                          <div className="footer-btn">
                            {item.comingSoon ? (
                              <input
                                type="button"
                                name="btnSubmit"
                                id="btnSubmit"
                                className="btn btn-info btnpurchase"
                                value="Coming Soon"
                                disabled
                              />
                            ) : (
                              <a
                                href={
                                  item.externalLink
                                    ? item.loginLink
                                    : "javascript:void(0);"
                                }
                                data-id={item.id}
                                className="btn btn-info loginCRM btnpurchase"
                              >
                                {item.loginText}
                              </a>
                            )}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appstore;
