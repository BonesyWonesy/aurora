import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginScreen from "./components/ui/login/loginScreen";
import HomeScreen from "./components/homeScreen";
import Aurora from "./components/aurora";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/aurora" element={<Aurora />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirects any unknown routes to Home */}
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
