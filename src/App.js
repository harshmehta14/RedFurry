import React from "react";
import Login from "./components/auth/Login";
import Dashbord from "./components/dashboard/Dashbord";
import Restaraunt from "./components/restaraunt/Restaurant";
import Supermarket from "./components/supermarket/Supermarket";
import Chargestation from "./components/chargestation/Chargestation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Saloon from "./components/saloon/Saloon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashbord />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant" element={<Restaraunt />} />
        <Route path="/saloon" element={<Saloon />} />
        <Route path="/supermarket" element={<Supermarket />} />
        <Route path="/chargestation" element={<Chargestation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
