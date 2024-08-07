// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Dashboard />
    </>
  );
}
export default App;
