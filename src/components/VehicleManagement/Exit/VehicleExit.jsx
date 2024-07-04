import React, {useState} from "react";

import "./VehicleExit.css";

const Icon = ({id, className}) => (
    <svg className={className}>
        <use href={`/assets/icons/sideBarMenuIcons.svg#${id}`}/>
    </svg>
);

function VehicleExit() {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [isVehicleNumberActive, setIsVehicleNumberActive] = useState(false);

    return (
        <div className="VehicleExit">
            <div className="InputVehicleNumber">
                <Icon id={isVehicleNumberActive ? 'NumberPlateActive' : 'NumberPlateDefault'}/>
                <input onChange={e => setVehicleNumber(e.target.value)}
                       onFocus={() => setIsVehicleNumberActive(true)} onBlur={() => setIsVehicleNumberActive(false)}
                       placeholder="Vehicle Number"/>
            </div>

            <button type="submit" className="Submit">Check Out</button>
        </div>
    );
}

export default VehicleExit;