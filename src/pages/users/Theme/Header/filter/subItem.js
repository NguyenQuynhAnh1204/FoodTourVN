


function SubItem({ checkSubmenu, menus}) {
    return (
        <>
            {menus.map((menu, index) =>
                checkSubmenu === index ? (
                    <div key={index} className="submenu">
                        {menu.submenu.map((sub, subIndex) => (
                            <div>
                                <p className="submenu-title">{sub.title}</p>
                                <ul className="submenu-item">
                                    {sub.submenu.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : null
            )}
        </>
    );
}

export default SubItem;