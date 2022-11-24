import React, { useState } from "react";
import CardUi from "../Components/UI/CardUi/CardUi";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UI/UserCard/UserCard";

const Main = () => {
  //입력 값 이름, 나이
  const [userInput, setUserInput] = useState("");
  const [userAge, setUserAge] = useState("");
  const [addedUserList, setAddedUserList] = useState([]);
  const [inputError, setInputError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0 || userAge.trim().length === 0) {
      setInputError("이름을 정확히 입력해주세요");
      setUserInput("");
    }
    if (+userAge < 1) {
      setInputError("0보다 큰 수를 입력해주세요");
      setUserAge("");
    }
    if (userInput.trim().length !== 0 && userAge > 0) {
      setAddedUserList((prve) => [{ userInput, userAge }, ...prve]);
      setUserInput("");
      setUserAge("");
    }
  };

  return (
    <main className=" flex flex-col justify-center items-center gap-5 m-0">
      <Form
        userInput={userInput}
        setUserInput={setUserInput}
        userAge={userAge}
        setUserAge={setUserAge}
        handleSubmit={handleSubmit}
        inputError={inputError}
        setInputError={setInputError}
      />
      <CardUi>
        {addedUserList &&
          addedUserList.map(({ userInput, userAge }) => {
            return <UserCard userInput={userInput} userAge={userAge} />;
          })}
      </CardUi>
    </main>
  );
};

export default Main;
