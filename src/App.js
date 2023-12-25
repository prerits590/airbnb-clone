import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Cardpage from "./pages/Cardpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Addhome from "./pages/Addhome";

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
