import React, { useContext } from "react";
import { LanguageContext } from "./app";

const Button = () => {
  const Language = useContext(LanguageContext);
  return (
    <button class="ui button">
      {Language === "english" ? "Submit" : "Vorlogen"}
    </button>
  );
};

export default Button;
