import logo from "./logo.svg";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Translation from "./pages/Translation";
import { useEffect } from "react";

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
            <Route path="/translation" element={<Translation />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
