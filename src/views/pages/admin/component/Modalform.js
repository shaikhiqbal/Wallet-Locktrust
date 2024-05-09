import React from "react";
import { Activity, Codepen, Columns, CreditCard, FileText } from "react-feather";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

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

const Modalform = (props) => {
  return (
    <Modal isOpen={props.open} toggle={props.toggle} contentClassName="pt-0" className="modal-dialog-centered modal-lg">
      <ModalHeader
        className="mb-1"
        
        toggle={props.toggle}
        tag="div"
      ></ModalHeader>
      <ModalBody className="flex-grow-1">
        <props.Component data={c2} />
      </ModalBody>
    </Modal>
  );
};

export default Modalform;
