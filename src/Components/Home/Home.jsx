import React from 'react';
import Feed from '../Contents/Feed'; // Import the Feed component
import Widget from '../Contents/Widget'; // Import the Widget component
import Sidebar from '../Contents/Sidebar'; // Import the Sidebar component

function Home() {
  return (
    <div className='quora'>
      <div className='quora_content'>
        <Sidebar /> {/* Render the Sidebar component for navigation and user information */}
        <Feed /> {/* Render the Feed component for displaying posts and content */}
        <Widget /> {/* Render the Widget component for additional content or widgets */}
      </div>
    </div>
  );
}

export default Home; // Export the Home component for use as the main entry point of your application
