import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./menuItem";
import { menuList } from "./menuList";

function FilterBtn({ isActive, onToggle }) {
    return (
        <div className="header-filter">
            <div className="filter-btn">
                <button 
                    className={`filter-icon ${isActive ? "btn-active" : ""}`}
                    onClick={onToggle}
                    // onBlur={() => onToggle(null)}
                >
                    <AiOutlineMenu />
                </button>
            </div>
            <MenuItem isMenuOpen={isActive} menus={menuList} />
        </div>
    );
}

export default FilterBtn;
