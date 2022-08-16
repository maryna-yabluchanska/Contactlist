import { React, useState } from "react";
import './App.css';
import ContactList from "./components/ContactList";

function App() {
    const [inputText, setInputText] = useState("");
    let handleChange = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
  return (
    <div className="App">
      <main>
          <h1>Search by name:</h1>
          <input type="search" placeholder="Search" onChange={handleChange}/>
          <p>{inputText}</p>
          <div>
              <h1>Contacts:</h1>
              <ContactList input={inputText}/>
          </div>
      </main>
    </div>
  );
}

export default App;
