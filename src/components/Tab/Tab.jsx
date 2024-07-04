import React from 'react';

import "./Tab.css";

const Icon = ({id, className}) => (
    <svg className={className}>
        <use href={`/assets/icons/sideBarMenuIcons.svg#${id}`}/>
    </svg>
);

function Tab({tabOption, selectedOption, setSelectedOption}) {

    return (
        <div className="OptionContainer">
            {tabOption.map((option) =>
                <div className={`Option ${selectedOption.name === option.name ? 'OptionActive' : ''}`}
                     key={option.name}
                     onClick={() => setSelectedOption(option)}>
                    <Icon id={option.name}/>
                    <h2>{option.name}</h2>
                </div>)}
        </div>
    )
}

export default Tab;