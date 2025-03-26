
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../../../utils/router";
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import { FaRegCircleUser, FaCircleUser } from "react-icons/fa6";


function DropdownUser({isActive, onToggle, handleLogout}) {
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
        <>
        <Button variant="link" className="acc-name acc-btn" onClick = {() => {onToggle()}}>
            {
            isActive ? (
                <FaCircleUser className="acc-name_icon"/>
            ) : (
                <FaRegCircleUser className="acc-name_icon"/>
            )
            }
            User name
        </Button>
        {
            isActive ? (
                <div className='header-acc'>
                    <ul>
                        <li><Button onClick = {onToggle}><Link to={ROUTERS.USER.USER_INF} >Thông tin cá nhân</Link></Button></li>
                        <li><Button onClick={onToggle}><Link to={ROUTERS.USER.BOOK_HISTORY} >Lịch sử đặt Tour</Link></Button></li>
                        <li><Button onClick={()=> {
                            handleLogout()
                            onToggle()
                        }} variant='link'><Link to={ROUTERS.USER.HOME}>Đăng xuất</Link></Button></li>
                    </ul>
                </div>
            ) : null
        }
        </>
    )
}

export default DropdownUser;