import { useState } from "react";

import Button from 'react-bootstrap/Button';


import FilterBtn from "./filter/filterBtn";
import SearchInput from "./search/searchInput";
import LocationBtn from "./location/Location";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";
import DropdownLike from "./like/dropdownLike";
import DropdownUser from "./userName/dropdownUser";

function Header () {
    const [showSignIn, setShowSignIn] = useState(false);
    const handleShowSignIn = () => setShowSignIn(true); 
    const handleCloseSignIn = () => setShowSignIn(false);

    const [showSignUp, setShowSignUp] = useState(false);
    const handleShowSignUp = () => setShowSignUp(true); 
    const handleCloseSignUp = () => setShowSignUp(false);

    const [access, setAccess] = useState(false);
    const handleAccess = () => {
        setAccess(true); 
        handleCloseSignIn();
        handleCloseSignUp();
    }

    const handleLogout = () => {
        setAccess(false); 
        setActiveComponent(null); 
    };

    const [activeComponent, setActiveComponent] = useState(null); 
    const handleToggle = (component) => {
        setActiveComponent((prev) => (prev === component ? null : component));
    };



    return (
        <div className="header">
            <div className = "header-content">
                <div className="logo">
                    <h1 className="pacifico-regular"><p>Đớp</p>
                        Đớp Đớp
                    </h1>
                </div>

                <div className="search">
                    <FilterBtn
                        isActive={activeComponent === "filter"} 
                        onToggle={() => handleToggle("filter")}
                    />
                    <SearchInput
                        isActive={activeComponent === "search"} 
                        onToggle={() => handleToggle("search")}
                    />
                    <LocationBtn
                        isActive={activeComponent === "location"} 
                        onToggle={() => handleToggle("location")}
                    />
                </div>
                {
                    access ? (
                        <div className="header-account">
                            
                            <DropdownLike 
                                isActive={activeComponent === "like"} 
                                onToggle={() => handleToggle("like")}
                            />
                            <DropdownUser
                                isActive={activeComponent === "account"} 
                                onToggle={() => handleToggle("account")}
                                handleLogout={handleLogout}
                            />
                        </div>

                    ) : (
                        <div className="auth">
                            <Button variant="primary" onClick={() => {
                                handleShowSignIn()
                                setActiveComponent(null)
                            }} className='log-in'>
                                    Sign in
                            </Button>
                            <SignIn
                                showSignIn={showSignIn} 
                                handleCloseSignIn={handleCloseSignIn} 
                                handleShowSignUp={handleShowSignUp}
                                handleAccess={handleAccess}
                            />

                            <Button variant="primary" onClick={() => {
                                handleShowSignUp()
                                setActiveComponent(null)
                            }} className='sign-up'>
                                Sign up
                            </Button>
                            <SignUp
                                showSignUp={showSignUp}
                                handleCloseSignUp={handleCloseSignUp}
                                handleShowSignIn={handleShowSignIn}
                                handleAccess={handleAccess}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Header;