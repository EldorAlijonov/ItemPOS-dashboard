import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import "./App.css";
import { Sidebar, HeaderComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home, Messages, Order, Settings } from './pages';
const App = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <>
      <div className="app">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="app-container">
          <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Order />} />
              <Route path="/customer" element={<Home />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/message" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;