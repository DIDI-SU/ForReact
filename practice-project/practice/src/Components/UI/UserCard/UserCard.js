import React from "react";

const UserCard = ({ userInput, userAge }) => {
  console.log(userInput);
  return (
    <div className=" border  border-black  my-2">
      {userInput},{userAge}
    </div>
  );
};

export default UserCard;
