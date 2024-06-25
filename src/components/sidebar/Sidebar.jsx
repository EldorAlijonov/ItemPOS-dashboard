import React, { useEffect, useState } from 'react'
import "./Sidebar.scss";
import { item } from '../../util/item';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    useEffect(() => {
        setActive(location.pathname);

    }, [location.pathname]);
    const handleActive = (to) => setActive(to);



    return (
        <div className={`sidebar ${!collapsed ? "sidebar-w" : "sidebar-collapsed"}`}>
            <div className="demo-logo-vertical" >{!collapsed && "ItemPOS"}</div>
            <ul className="sidebar-menu">
                {item.map((item, index) => (
                    <li key={index}>
                        <Link className={`link ${active === item.to ? "active" : ""}`} to={item.to} onClick={() => handleActive(item.to)} >
                            {item.icon}
                            <span className={`${collapsed ? "dispaly-none" : ""}`}>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            {
                !collapsed && <div className="sidebar-bottom">
                    <div className='sidebar-bottom-item'>
                        <h4>Sunscription</h4>
                       
                        <span>
                            Explore 20+ Feature
                            With Lifetime Membership
                        </span>
                        <button className="sidebar-btn">Upgrade Now</button>
                    </div>
                </div>
            }
        </div >
    )
}

export default Sidebar
