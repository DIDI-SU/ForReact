import React from "react";
import Button from "../Button/Button";
import CardUi from "../UI/CardUi/CardUi";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import { useState } from "react";
const BUTTON_DATA = {
  type: "submit",
  content: "Add User",
  className: " m-2  bg-indigo-600 rounded-md p-1",
};
const Form = ({
  userInput,
  setUserInput,
  userAge,
  setUserAge,
  handleSubmit,
  inputError,
  setInputError,
}) => {
  return (
    <>
      {inputError && (
        <ErrorModal inputError={inputError} setInputError={setInputError} />
      )}
      <CardUi>
        <form
          className=" flex flex-col  "
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="name" className=" font-bold mb-2">
            UserName
          </label>
          <input
            type="text"
            id="name"
            className=" border  focus:border-red-600"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <label htmlFor="age" className=" font-bold mb-2">
            Age(Years)
          </label>
          <input
            type="text"
            id="age"
            className=" border  focus:border-red-600"
            value={userAge}
            onChange={(e) => {
              setUserAge(e.target.value);
            }}
          />
        </form>
        <Button data={BUTTON_DATA} handleSubmit={handleSubmit} />
      </CardUi>
    </>
  );
};

export default Form;
