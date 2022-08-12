import './App.css';
import ContactList from "./components/ContactList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <main>
          <Search/>
          <div>
              <h1>Contacts:</h1>
              <ContactList/>
          </div>
      </main>
    </div>
  );
}

export default App;
