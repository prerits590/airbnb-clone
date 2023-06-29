import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
// import Productgrid from "./components/Productgrid";
// import Switchsec from "./components/Switchsec";
import Homepage from "./pages/Homepage";
import Cardpage from "./pages/Cardpage";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* 👈 Renders at /app/ */}
        <Route path="/Single/:id" element={<Cardpage />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </div>
  );
}

export default App;
