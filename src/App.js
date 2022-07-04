import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Dashboard,
  Orders,
  Employees,
  Customers,
  Kanban,
  Editor,
  Calendar,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from "./pages";

import { Navbar, Footer, Sidebar } from "./components";

function App() {
  const activeMenu = 
  
  ;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative bg-ligh dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <Tooltip title="Settings" placement="top">
              <IconButton
                onClick={() => {}}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: "blue" }}
              >
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>

          <div
            className={`sidebar bg-white dark:bg-secondary-dark-bg  ${
              activeMenu ? "w-72 fixed" : "w-0"
            }`}
          >
            <Sidebar />
          </div>

          {/* container */}
          <div
            className={`bg-white dark:bg-main-dark-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : ""
            }`}
          >
            <div className="fixed md:static navbar bg-main-bg dark:bg-main-dark-bg w-full">
              <Navbar />
            </div>
            <div className="">
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
