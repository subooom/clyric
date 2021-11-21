import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Translations from "./pages/Translations";
import CreateTranslation from "./pages/CreateTraslation";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ padding: "0 50px" }}>
          <Routes>
            <Route path="/translations" element={<Translations />} />
            <Route path="/create-translation" element={<CreateTranslation />} />
            <Route path="/" element={<Translations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
