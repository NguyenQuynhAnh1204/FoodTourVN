import React, { useState, useEffect } from "react";
import SubItem from "./subItem";
import { IoIosArrowForward } from "react-icons/io";

function MenuItem({ isMenuOpen, menus }) {
    const [checkSubmenu, setCheckSubmenu] = useState(null);
    
    const handleClick = (index) => {
        setCheckSubmenu(checkSubmenu === index ? null : index); // Đóng nếu bấm lại
    };

    useEffect(() => {
        const homeElement = document.querySelectorAll("#root > div > div")[1];

        if (homeElement) {
            if (isMenuOpen) {
                homeElement.classList.add("over");
            }
        }

        return () => {
            if (homeElement) {
                homeElement.classList.remove("over");
            }
        };
    }, [isMenuOpen]);

    return (
        <>
            {isMenuOpen && (
                <div className="menu">
                    <div className="menu-title">
                        {menus.map((menu, index) => (
                            
                                <div  onClick={() => handleClick(index)} className="menu-title_text">
                                    <p>{menu.title}</p>
                                    <IoIosArrowForward className="menu-icon"/>
                                </div>

                            
                        ))}
                    </div>
                    <SubItem checkSubmenu = {checkSubmenu} menus = {menus}/>
                </div>)}
        </>
    );
}

export default MenuItem;
