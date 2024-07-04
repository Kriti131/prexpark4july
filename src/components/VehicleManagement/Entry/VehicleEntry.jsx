import React, {useState} from "react";

import "./VehicleEntry.css";

const Icon = ({id, className}) => (
    <svg className={className}>
        <use href={`/assets/icons/sideBarMenuIcons.svg#${id}`}/>
    </svg>
);

function VehicleEntry() {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [isVehicleNumberActive, setIsVehicleNumberActive] = useState(false);

    return (
        <div className="VehicleEntry">
            <div className="InputVehicleNumber">
                <Icon id={isVehicleNumberActive ? 'NumberPlateActive' : 'NumberPlateDefault'}/>
                <input onChange={e => setVehicleNumber(e.target.value)}
                       onFocus={() => setIsVehicleNumberActive(true)} onBlur={() => setIsVehicleNumberActive(false)}
                       placeholder="Vehicle Number"/>
            </div>
            <button type="submit" className="Submit">Check In</button>
        </div>
    );
}

export default VehicleEntry;