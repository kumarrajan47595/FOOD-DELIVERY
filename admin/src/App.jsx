import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { Route, Routes } from "react-router-dom"
import List from "./pages/List/List.jsx";
import Add from "./pages/Add/Add.jsx";
import Order from "./pages/Orders/Order.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}></Add>}></Route>
          <Route path="/list" element={<List url={url}></List>}></Route>
          <Route path="/orders" element={<Order url={url}></Order>}></Route>
        </Routes>
      </div>
    </div>
  )
}


export default App