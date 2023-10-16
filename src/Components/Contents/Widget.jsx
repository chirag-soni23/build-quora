import React from "react";
import WidgetContent from "./WidgetContent"; // Import the WidgetContent component
import "../css/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Space to Follow</h5> {/* Header displaying "Space to Follow" */}
      </div>
      <div className="widget__contents">
        <WidgetContent /> {/* Render the WidgetContent component for content */}
      </div>
      <div className="widget__contents">
        <WidgetContent /> {/* Render another WidgetContent component for more content */}
      </div>
      <div className="widget__contents">
        <WidgetContent /> {/* Render another WidgetContent component for more content */}
      </div>
      <div className="widget__contents">
        <WidgetContent /> {/* Render another WidgetContent component for more content */}
      </div>
      <div className="widget__contents">
        <WidgetContent /> {/* Render another WidgetContent component for more content */}
      </div>
    </div>
  );
}

export default Widget; // Export the Widget component for use in other parts of your application

