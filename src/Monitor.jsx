import React from 'react';
import Header from "./components/header/header.jsx";
import SideBar from "./components/sidebar/SideBar.jsx";
import VehicleManagement from "./components/VehicleManagement/VehicleManagement.jsx";

import Chart from "./components/chart/chart.jsx";
import ReactPlayer from 'react-player';
import './monitor.css';
import video1 from './video1.mp4';
import video2 from './video2.mp4';
import "./App.css";
import ParkingOverview from "./components/ParkingOverview/ParkingOverview.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <SideBar/>
            <div className="Content">
                <div className="TopSection">
                   <div className="camera-feed-container">
      <div className="camera-feed">
        <ReactPlayer
          url={video1}
          playing
          controls
          width="100%"
          height="auto"
        />
        <div className="camera-label"><b>1st Floor</b></div>
      </div>
      <div className="divider"></div>
      <div className="camera-feed">
        <ReactPlayer
          url={video2}
          playing
          controls
          width="100%"
          height="auto"
        />
        <div className="camera-label"><b>2nd Floor</b></div>
      </div>
      <div className="show-all">
        <a href="#">Show all &raquo;</a>
      </div>
    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
