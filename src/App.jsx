import React from 'react';
import Header from "./components/header/header.jsx";
import SideBar from "./components/sidebar/SideBar.jsx";
import VehicleManagement from "./components/VehicleManagement/VehicleManagement.jsx";

import Chart from "./components/chart/chart.jsx";

import "./App.css";
import ParkingOverview from "./components/ParkingOverview/ParkingOverview.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <SideBar/>
            <div className="Content">
                <div className="TopSection">
                    <ParkingOverview/>
                    <VehicleManagement/>
                    
                </div>
                <br/>
                <div className="BottomSection">
                    <Chart/>
                </div>
            </div>
        </div>
    );
}

export default App;