import React from "react";

import { C2 } from "@src/views/pages/admin/component/CP";
import { Activity, Codepen, Columns, CreditCard, FileText } from "react-feather";

const c2 = [
  {
    id: 3,
    icon: <CreditCard />,
    title: "ADD WITH",
    subtitle: "Card",
    modalTarget: "#credit_card_details",
  },

  {
    id: 5,
    icon: <Codepen />,
    title: "ADD WITH",
    subtitle: "	Deposite check ",
    modalTarget: "#wiretransfer",
  },
  {
    id: 2,
    icon: <Columns />,
    title: "	Add With",
    subtitle: "E Voucher",
    modalTarget: "#wiretransfer",
  },
  {
    id: 6,
    icon: <FileText />,
    title: "Generate",
    subtitle: "QR Code",
    modalTarget: "",
  },
  {
    id: 7,
    icon: <Activity />,
    title: "Add With",
    subtitle: "	Wire Transfer",
    modalTarget: ".remote_deposite_cheque",
  },
];

const Addmoney = () => {
  return (
    <div>
      <C2 data={c2} />
    </div>
  );
};

export default Addmoney;
