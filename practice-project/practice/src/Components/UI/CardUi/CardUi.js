import React from "react";

const CardUi = ({ children }) => {
  return (
    <article className=" flex flex-col   bg-white    my-5 rounded-md   max-w-lg p-4  w-10/12 ">
      {children}
    </article>
  );
};

export default CardUi;
