import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { Appbar } from "./components/Appbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <div>
            <Appbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
