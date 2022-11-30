import React from "react";
import classe from "./CartModal.module.css";
import * as ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classe.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classe.modal}>
      <div className={classe.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");

const CartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default CartModal;
