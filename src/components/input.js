import React, { useContext } from "react";
import { LanguageContext } from "./app";

const Input = () => {
  const Language = useContext(LanguageContext);
  return (
    <div class="field">
      <label>{Language === "english" ? "Name" : "Naam"}</label>
      <input type="text" />
    </div>
  );
};

export default Input;
