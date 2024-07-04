import MagnifyingGlass from '../../../../public/assets/icons/Magnifying Glass.svg';

import "./SearchBar.css"


function SearchBar() {
    return (
        <div className="SearchBar">
            <img src={MagnifyingGlass} alt="Magnifying Glass" spellCheck="false"/>
            <input placeholder="Search Vehicle"/>
        </div>
    );
}

export default SearchBar;