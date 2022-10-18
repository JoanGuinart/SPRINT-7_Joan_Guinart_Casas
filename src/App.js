import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Inicio } from "./components/Inicio";

export function App() {
  return (
    <Router>
      <Link to="/inicio" className="btn btn-dark">
        Inicio
      </Link>
      <br />
      <Link to="/" className="btn btn-dark">
        Welcome-Page
      </Link>
      <hr />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
