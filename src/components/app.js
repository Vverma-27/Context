import React, { useState } from "react";
import UserInput from "./userInput";
export const LanguageContext = React.createContext("english");

const App = () => {
  const [language, setLanguage] = useState("english");
  return (
    <section className="ui container">
      <label>Select Language:</label>
      <i onClick={() => setLanguage("english")} className="flag us"></i>
      <i onClick={() => setLanguage("dutch")} className="flag nl"></i>
      <LanguageContext.Provider value={language}>
        <UserInput />
      </LanguageContext.Provider>
    </section>
  );
};

export default App;
