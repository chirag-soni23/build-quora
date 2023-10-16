import React from "react";
import Quoraheader from "../Header/Quoraheader";
import "../css/Quora.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
// Define the Quora component
function Quora() {
  return (
    <div className="quora">
      {/* Render the Quora header component */}
      <Quoraheader />
      
      <div className="quora_contents">
        <div className="quora_content">
          {/* Render the Sidebar component for navigation */}
          <Sidebar />
          
          {/* Render the Feed component for user content */}
          <Feed />
          
          {/* Render the Widget component for additional content */}
          <Widget />
        </div>
        </div>
        </div>
  );
}

export default Quora; 















