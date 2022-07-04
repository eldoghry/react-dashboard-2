import React from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { useStateContext } from "./../contexts/ContextProvider";
import avatar from "./../data/avatar.jpg";

const NavButton = ({ title, icon, fc, dotColor, color }) => {
  return (
    <Tooltip title={title} placement="bottom">
      <IconButton onClick={fc} style={{ color }} className="text-md relative">
        <span
          className="w-2.5 h-2.5 absolute rounded-full top-1 right-1"
          style={{ background: dotColor }}
        />
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();

  return (
    <div className="p-3 flex items-center justify-between">
      <NavButton
        title="menu"
        icon={<AiOutlineMenu />}
        color={currentColor}
        fc={() => setActiveMenu((prevActiveMenuState) => !prevActiveMenuState)}
      />

      <div className="flex items-center gap-3 mr-2">
        <NavButton
          title="message"
          icon={<FiMessageSquare />}
          dotColor={currentColor}
          color={currentColor}
          fc={() => {}}
        />
        <NavButton
          title="notification"
          icon={<AiOutlineBell />}
          color={currentColor}
          dotColor={currentColor}
          fc={() => {}}
        />
        <Tooltip title="user profile" placement="bottom">
          <Avatar
            alt="avatar"
            src={avatar}
            className="cursor-pointer"
            onClick={() => {}}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
