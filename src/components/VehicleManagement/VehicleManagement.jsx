import React, {useState} from 'react';

import {tabOption} from "../../../data/tabOption.js";
import Tab from "../Tab/Tab.jsx";

import "./VehicleManagement.css";

function VehicleManagement() {
    const [selectedOption, setSelectedOption] = useState(tabOption[0]);
    const CurrentTabComponent = selectedOption.component;

    return (
        <form className="VehicleManagement">
            <h2 className='VehicleManagementHeading'>Vehicle Management</h2>
            <Tab tabOption={tabOption} selectedOption={selectedOption}
                 setSelectedOption={setSelectedOption}/>
            <CurrentTabComponent/>
        </form>
    );

}

export default VehicleManagement;