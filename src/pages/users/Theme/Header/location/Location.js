import React from "react";
import { locaList } from "./locaList";
import MenuItem from "../filter/menuItem";

function LocationBtn({ isActive, onToggle }) {
    
    return (
        <div className="header-location">
            <div className="loca-btn">
                <button 
                    className={`butt-local ${isActive ? "btn-active" : ""}`}
                    onClick={onToggle}
                    // onBlur={() => onToggle(null)}
                >
                    Location
                </button>
            </div>
            <MenuItem isMenuOpen = {isActive} menus = {locaList}/>
        </div>
    );
}
export default LocationBtn;