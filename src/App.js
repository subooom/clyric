import { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTranslation from "./pages/CreateTraslation";
import Translations from "./pages/Translations";

function App() {
  useEffect(() => {
    fetch("https://api.genius.com/search?q=Kendrick%20Lamar", {
      method: "get",
      headers: {
        Authorization:
          "Bearer amNPN1JSUGG5F7FRkB9bLGDxq7HwqD0RR57HRy3r8oYE8l196Os8T_mPmY7E-p-s",
        "content-type": "application/json",
      },
    })
      .then(console.log)
      .catch(console.error);
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ padding: "0 50px" }} className="container-fluid ">
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
