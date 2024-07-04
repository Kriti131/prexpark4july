import {parkingStats} from "../../../data/parkingStats.js";

import "./ParkingOverview.css";
import React from "react";

const Icon = ({id, className}) => (
    <svg className={className}>
        <use href={`/assets/icons/sideBarMenuIcons.svg#${id}`}/>
    </svg>
);

function ParkingOverview() {
    return (
        <div className="ParkingOverview">
            <h2 className="ParkingOverviewHeading">Current Parking Status</h2>
            <div className="CategoryContainer">
                {parkingStats.map((category, index) => (
                    <div className="StatContainer">
                        <div>
                            <h2 className="CategoryHeader">{category.categoryName}</h2>
                            <div className="StatList">
                                {category.stats.map((stat, index) => (
                                    <div key={index} className="StatItem">
                                        <h3>{stat.label}</h3>
                                        <p>{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {index < parkingStats.length - 1 && <div className="Divider"></div>}
                    </div>
                ))}
            </div>
            <div className="ViewAllContainer">
                <p className="ViewAllText">View All Stats</p>
                <Icon id="SideArrow" className="ViewAllIcon"/>
            </div>
        </div>
    )
}

export default ParkingOverview;