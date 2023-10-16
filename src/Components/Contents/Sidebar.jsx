import React from 'react';
import "../css/Sidebar.css";
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* Sidebar component containing various options */}
      <SidebarOption />
    </div>
  );
}

export default Sidebar;
