import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./component";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};
export default App;
