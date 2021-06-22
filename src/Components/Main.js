import React from "react";
import { BodyHeader } from "./BodyHeader";

export const Main = ({ activeBody, changeBody }) => {
  return (
    <>
      <BodyHeader activeBody={activeBody} changeBody={changeBody} />
    </>
  );
};
