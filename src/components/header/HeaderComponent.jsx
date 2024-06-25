import "./Header.scss";
import { Avatar, Button, Flex } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import avatar from "../../assets/image_2024-06-06_16-29-29.png"
import { item } from "../../util/item";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const HeaderComponent = ({ collapsed, setCollapsed }) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    useEffect(() => {
        setActive(location.pathname);

    }, [location.pathname]);
    const handleActive = (to) => setActive(to);
    return (
        <Flex className="header">
            <Flex align="center" gap={10}>
                <Button
                    type="text"
                    icon={<IoMdMenu size={24} />}
                    onClick={() => setCollapsed(!collapsed)}
                />
                <h4 className="breadcrumb">
                    {item.map((i) => (
                        <span key={i.to}>  {active === i.to ? i.breadcrumb : ""}</span>
                    ))}/
                </h4>
            </Flex>
            <Flex className="header-search" align="center">
                <input type="text" placeholder="Search" />
                <CiSearch size={20} />
            </Flex>

            <Flex align="center" gap={20}>
                <Flex align="center" className="item-language">
                    EN
                    <RiArrowDropDownLine className="icon" size={24}/>
                </Flex>
                <div className="bell-badge">
                    <FaRegBell size={20} className="header-bell-icon" />
                </div>
                <Avatar size={48} icon={<img src={avatar} />} />
            </Flex>
        </Flex>
    )
}

export default HeaderComponent
