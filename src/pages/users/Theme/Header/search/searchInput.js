import { useEffect } from "react";

import { FaSearch } from "react-icons/fa";

function SearchInput({isActive, onToggle}) {
    useEffect(() => {
            const homeElement = document.querySelectorAll("#root > div > div")[1];
    
            if (homeElement) {
                if (isActive) {
                    homeElement.classList.add("over");
                }
            }
    
            return () => {
                if (homeElement) {
                    homeElement.classList.remove("over");
                }
            };
        }, [isActive]);

    return (
            <div className="header-search">
                <div className={`search-input ${isActive ? "search-input_focus":""}`}>
                    <input 
                        placeholder="Search" type="text"
                        onClick={onToggle}
                    />
                    <FaSearch  className="search-icon"/>
                </div>
                {
                    isActive ? (
                        <div className="header-search_text">
                            <div className="header-search_blogs">
                                <p className="header-search_blogs-title">Blog</p>
                            </div>
                            <div className="header-search_tours">
                                <div className="header-search_tours-img">
                                    <img src="img/anh10.jpeg" alt="a1"/>
                                </div>
                                <div className="header-search_tours-img">
                                    <img src="img/anh10.jpeg" alt="a2"/>
                                </div>
                                <div className="header-search_tours-img">
                                    <img src="img/anh10.jpeg" alt="a3"/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>

    )
}

export default SearchInput;