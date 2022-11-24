import React from "react";
import CardUi from "../CardUi/CardUi";
import Button from "../../Button/Button";
const BTN = { type: "button", content: "okay" };

const ErrorModal = (props) => {
  const { inputError, setInputError } = props;
  const handleModal = () => {
    setInputError(false);
  };
  return (
    <div className=" fixed top-0 left-0 w-full h-screen z-10 bg-black bg-opacity-70">
      <div className=" fixed top-1/4 left-1/3 w-3/4  z-50 overflow-hidden">
        <CardUi>
          <header className=" border-b border-b-sky-600">
            <h2>Error</h2>
          </header>
          <div className=" p-4">
            <p>{inputError}</p>
          </div>
          <footer>
            <Button data={BTN} handleSubmit={handleModal} />
          </footer>
        </CardUi>
      </div>
    </div>
  );
};

export default ErrorModal;
