import React from "react";
import Widgetcontent from "./Widgetcontent";
import "../css/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Space to Follow</h5>
      </div>
      <div className="widget__contents">
        <Widgetcontent />
      </div>
      <div className="widget__contents">
        <Widgetcontent />
      </div>
      <div className="widget__contents">
        <Widgetcontent />
      </div>
      <div className="widget__contents">
        <Widgetcontent />
      </div>
      <div className="widget__contents">
        <Widgetcontent />
      </div>
    </div>
  );
}

export default Widget;
