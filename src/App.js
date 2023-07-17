import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
// import Productgrid from "./components/Productgrid";
// import Switchsec from "./components/Switchsec";
import Homepage from "./pages/Homepage";
import Cardpage from "./pages/Cardpage";
import Auth from "./pages/Signup";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
// import Adminpage from "./pages/Adminpage";
import Addhome from "./pages/Addhome";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Addhome" element={<Addhome />} />
        <Route path="/Home/:id" element={<Homepage />} />{" "}
        <Route path="/Single/:id" element={<Cardpage />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
