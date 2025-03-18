import FilterBtn from "./filter/filterBtn";
import { FaSearch } from "react-icons/fa";

function Header () {
    return (
        <div className="header">
            <div className = "header-content">
                <div className="logo">
                    <h1 className="pacifico-regular"><p>Đớp</p>
                        Đớp Đớp
                    </h1>
                </div>

                <div className="search">
                    <FilterBtn/>
                    <div className="search-input">
                        <input placeholder="Search" type="text" />
                        <FaSearch  className="search-icon"/>
                    </div>
                    <button className="butt-local">Location</button>
                </div>
                <div className="auth">
                    <button className="log-in">Sign in</button>
                    <button className="sign-up">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;