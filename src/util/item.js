import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { Flex } from "antd";
export const item = [
    {
        to: "/",
        icon: <BiBarChartSquare className="icon" size={24} />,
        title: "Order",
        breadcrumb: "Order"
    },
    {
        to: "/customer",
        icon: <LuUser2 className="icon" size={24} />,
        title: "Customers",
        breadcrumb: "Customer"
    },
    {
        to: "/setting",
        icon: <IoSettingsOutline className="icon" size={24} />,
        title: "Settings",
        breadcrumb: "Setting"
    },
    {
        to: "/message",
        icon: <AiOutlineMessage className="icon" size={24} />,
        title: <Flex align="center" gap={50}>Messages <span className="counter">5</span></Flex>,
        breadcrumb: "Message"
    }
]