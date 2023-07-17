import React from "react";
import { Route, Routes } from "react-router-dom";
import Addhome from "./Addhome";
import Adminhome from "./Adminhome";

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route
          path="/Addhome/"
          element={<Addhome mainpage={<Adminhome />} />}
        />
        <Route
          path="/Addhome/Trending"
          element={<Addhome mainpage={<Adminhome />} />}
        />
        <Route
          path="/Addhome/Explore"
          element={<Addhome mainpage={<Adminhome />} />}
        />
      </Routes>
    </div>
  );
}
