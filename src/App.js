import './App.css';
import ContactSection from "./components/ContactSection";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <main>
          <Search/>
          <ContactSection/>
      </main>
    </div>
  );
}

export default App;
