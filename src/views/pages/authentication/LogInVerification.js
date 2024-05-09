import { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { AbilityContext } from "@src/utility/context/Can";
import {
  Modal,
  Form,
  ModalBody,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import useJwt from "@src/auth/jwt/useJwt";

import { handleLogin } from "@store/authentication";

import { useDispatch } from "react-redux";
// ** Utils scxc
import { getHomeRouteForLoggedInUser } from "@utils";
// ** Third Party Components
import toast from "react-hot-toast";
// ** Custom Components
import Avatar from "@components/avatar";
import { Coffee, X } from "react-feather";

//** Third Party Input
import OTPInput from "otp-input-react";

import Messages from "./two-step-verification/SVG/Messages.gif";

const abilityList = {
  admin: [
    {
      action: "admin",
      subject: "owner",
    },
  ],
  merchant: [
    {
      action: "merchant",
      subject: "Customer",
    },
  ],
  iso: [
    {
      action: "read",
      subject: "Agent",
    },
  ],
  under_writer: [
    {
      action: "read",
      subject: "employe",
    },
  ],
};
const userType = {
  1: "Admin",
  2: "FRT",
  3: "ISO",
  4: "Under_Writer",
  5: "Merchant",
};

const ToastContent = ({ t, name, role }) => {
  return (
    <div className="d-flex">
      <div className="me-1">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <h6>{name}</h6>
          <X
            size={12}
            className="cursor-pointer"
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
        <span>
          You have successfully logged in as an {role} user to LockTrust. Now
          you can start to explore. Enjoy!
        </span>
      </div>
    </div>
  );
};

const LogInVerfication = ({
  open,
  token = null,
  data = null,
  mobile = "",
  code,
}) => {
  code = code + "";
  const {
    control,
    setError,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ token: token, otp: code ? code : "" });

  const ability = useContext(AbilityContext);

  const [basicModal, setBasicModal] = useState(false);

  const [counter, setCounter] = useState(30);

  const [tokenVal, setTokenVal] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [errorOTP, setErrorOTP] = useState("");

  //** Button Reqiure Resend or Call
  const [fetchTime, setFetchTime] = useState(0);
  const [resendBtn, setResendBtn] = useState(false);
  const [callBtn, setCallBtn] = useState(false);

  useEffect(() => {
    setValue("token", tokenVal);
  }, [tokenVal]);

  const setLocalHost = (res) => {
    const data = {
      ...res.data.userData,
      accessToken: res.data.access,
      refreshToken: res.data.refresh,
      fullName: res.data.user.full_name,
      role: userType[res.data.user.user_type].toLowerCase(),
      ability: abilityList[userType[res.data.user.user_type].toLowerCase()],
    };
    setBasicModal(!basicModal);
    dispatch(handleLogin(data));

    ability.update(data.ability);
    navigate(getHomeRouteForLoggedInUser(data.role));
    toast((t) => (
      <ToastContent
        t={t}
        role={data.role || "admin"}
        name={data.fullName || data.username || "John Doe"}
      />
    ));
  };

  const onCallOTP = () => {
    // old e nd poin
    // .login({ email: data.loginEmail, password: data.password, attempt: 3 })
  
  };

  const onResendOTP = () => {
    // ** Old End Point
    // .login({ email: data.loginEmail, password: data.password, attempt: 2 })
   
  };

  useEffect(() => {
    setBasicModal(open);
  }, [open]);

  useEffect(() => {
    setValue("token", token);
    setValue("otp", code);
  }, [token]);

  const onSubmit = (data) => {
    // console.log(data)

    const fakeData = {
      data: {
        refresh:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNTM1NzQ5NSwiaWF0IjoxNzE1MjcxMDk1LCJqdGkiOiI3MjFkNmZlMGM5Mzc0YWZmOTFiZjBmNzRjMTY0YmZjMiIsInVzZXJfaWQiOiIxZmM5OTI3My0xZWYzLTQyYzItOTIxZC01MmM4OGZhMTU0ZTIifQ.UwABR1TTWGckmEZJTvy_POTauCbKg93bvQ7hnhQNQ10",
        access:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1ODc1ODk1LCJpYXQiOjE3MTUyNzEwOTUsImp0aSI6ImUwNTQxZDllZjUwMTQxM2FiMDBkNzBkOTM4ZmZjNjAyIiwidXNlcl9pZCI6IjFmYzk5MjczLTFlZjMtNDJjMi05MjFkLTUyYzg4ZmExNTRlMiJ9.JjPpJBubftulQ3Jqjrdu-ueDPqBPkIx4fsbRfUXhFSQ",
        user: {
          profile: null,
          full_name: "LT Admin",
          email: "admin@locktrustbank.com",
          mobile: "+919579668524",
          user_type: 1,
          date_joined: "2024-01-17T15:26:07Z",
          uid: "1fc99273-1ef3-42c2-921d-52c88fa154e2",
          country_code: "",
          is_active: true,
          user_role: {
            id: 5,
            up: [
              "create_APPLICATION_FORM",
              "update_APPLICATION_FORM",
              "view_APPLICATION_FORM",
              "delete_APPLICATION_FORM",
              "create_ALL_USER_CREATION",
              "update_ALL_USER_CREATION",
              "view_ALL_USER_CREATION",
              "delete_ALL_USER_CREATION",
              "create_RATEFORM",
              "update_RATEFORM",
              "view_RATEFORM",
              "delete_RATEFORM",
              "create_QUERY_MANGEMENT",
              "update_QUERY_MANGEMENT",
              "view_QUERY_MANGEMENT",
              "delete_QUERY_MANGEMENT",
              "create_MERCHANT_RATE_VIEW",
              "update_MERCHANT_RATE_VIEW",
              "view_MERCHANT_RATE_VIEW",
              "delete_MERCHANT_RATE_VIEW",
              "create_MERCHANT_INFORMATION",
              "update_MERCHANT_INFORMATION",
              "view_MERCHANT_INFORMATION",
              "delete_MERCHANT_INFORMATION",
              "create_ISO_APPLICATION_FORM",
              "update_ISO_APPLICATION_FORM",
              "view_ISO_APPLICATION_FORM",
              "delete_ISO_APPLICATION_FORM",
              "create_APPLICATION_FORM_VIEW",
              "update_APPLICATION_FORM_VIEW",
              "view_APPLICATION_FORM_VIEW",
              "delete_APPLICATION_FORM_VIEW",
              "create_MERCHANT_STATUS",
              "update_MERCHANT_STATUS",
              "view_MERCHANT_STATUS",
              "delete_MERCHANT_STATUS",
              "create_BANK_MANAGEMENT",
              "update_BANK_MANAGEMENT",
              "view_BANK_MANAGEMENT",
              "delete_BANK_MANAGEMENT",
              "create_BANK_FORM",
              "update_BANK_FORM",
              "view_BANK_FORM",
              "delete_BANK_FORM",
            ],
            uid: "51ba88a3-cd98-4fe5-b649-742b69dee052",
            created_at: "2024-01-22T13:17:51Z",
            rn: "Admin",
            created_by: null,
            pur: null,
          },
        },
        by_pass_iso: false,
        approved: false,
        isSuperAdmin: false,
      },
    };

    setLocalHost(fakeData);
  };

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((x) => x - 1);
        setFetchTime((x) => x + 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (fetchTime >= 29 && fetchTime < 60) setResendBtn(true);
    else if (fetchTime >= 60 && fetchTime < 90) {
      setResendBtn(false);
      setCallBtn(true);
    } else {
      setResendBtn(false);
      setResendBtn(false);
    }
  }, [fetchTime]);
  return (
    <div>
      <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
        <ModalBody className="d-flex align-items-center justify-content-center">
          <Card style={{ width: "400px", height: "650px" }}>
            <CardBody>
              <div className="d-flex justify-content-center">
                <img src={Messages} alt="this slowpoke moves" width="150" />
              </div>
              <CardTitle tag="h2" className="fw-bolder mb">
                Verify Your Mobile Number 💬
              </CardTitle>
              <CardText className="mb-75">
                We have sent a verification code to your mobile. Enter the code
                from the mobile in the field below.
              </CardText>
              <CardText className="fw-bolder text-primary">
                {`*********${mobile}`}
              </CardText>
              <Form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1" hidden>
                  {/* <Controller
                id="token"
                name="token"
                control={control}
                render={({ field }) => (
                  <Input
                    color="primary"
                    type="text"
                    placeholder="Token"
                    invalid={errors.token && true}
                    {...field}
                  />
                )}
              /> */}
                </div>
                <h6>Type your 6 digit security code</h6>

                <CardText className="fw-bold text-danger">{errorOTP}</CardText>
                <div className=" otpinput mb-1 mt-2">
                  <Controller
                    className="otp_input_login_verification"
                    name="otp"
                    control={control}
                    render={({ field }) => (
                      <OTPInput
                        autoFocus
                        OTPLength={7}
                        otpType="number"
                        invalid={errors.otp && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <Button block type="submit" color="primary">
                  Verify
                </Button>
                <p className="text-center mt-2">
                  <span>Didn’t get the code?</span>{" "}
                </p>

                <span className="d-flex justify-content-between">
                  <span
                    style={{
                      transition: "all 0.5s",
                      opacity: resendBtn ? "1" : "0",
                    }}
                  >
                    <Button.Ripple
                      onClick={onResendOTP}
                      className="btn-sm"
                      color="info"
                      outline
                      disabled={fetchTime > 30 && true}
                    >
                      Resend
                    </Button.Ripple>
                  </span>
                  <span
                    style={{
                      transition: "all 0.5s",
                      opacity: callBtn ? "1" : "0",
                    }}
                  >
                    <Button.Ripple
                      onClick={onCallOTP}
                      className="btn-sm"
                      color="warning"
                      outline
                      disabled={fetchTime > 60 && true}
                    >
                      Call Now
                    </Button.Ripple>
                  </span>
                </span>
              </Form>

              <div
                className="mb-1 position-relative mt-2"
                style={{ display: "grid", placeItems: "center" }}
              >
                <img
                  className="child-1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeLai2FZHsPuxQ0tR9sNiTBuBCC8MqxS9NucqUWeGQcKyK7QrrPVeediNNbw0nc01L8A&usqp=CAU"
                  alt=""
                  style={{ width: "50px" }}
                />
                <label id="seconds" className="position-absolute">
                  {counter < 10 ? `0${counter}` : counter}
                </label>
              </div>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LogInVerfication;
