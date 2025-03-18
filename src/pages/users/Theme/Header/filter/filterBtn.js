import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./menuItem";
import { menuList } from "./menuList";


function FilterBtn() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div>
            <div className="filter-btn">
                <button 
                    className="filter-icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <AiOutlineMenu />
                </button>
            </div>
            <MenuItem isMenuOpen = {isMenuOpen} menus = {menuList}/>
        </div>
    );
}
export default FilterBtn;