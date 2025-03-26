


function SubItem({ checkSubmenu, menus}) {
    return (
        <>
            {menus.map((menu, index) =>
                checkSubmenu === index ? (
                    <div key={index} className="submenu">
                        {menu.submenu.map((sub, subIndex) => (
                            sub.title ? (
                                <div key={subIndex}>
                                    <p className="submenu-title">{sub.title}</p>
                                    <ul className="submenu-item">
                                        {sub.submenu.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : 
                            // (
                            //     <div key={subIndex}>
                            //         <ul className="submenu-item">
                            //             {sub.submenu.map((item, itemIndex) => (
                            //                 <li key={itemIndex}>{item}</li>
                            //             ))}
                            //         </ul>
                            //     </div>
                            // ) 
                            null
                        ))}
                    </div>
                ) : null
            )}
        </>
    );
}

export default SubItem;