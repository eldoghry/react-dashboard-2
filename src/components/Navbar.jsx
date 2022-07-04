import React from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

import avatar from "./../data/avatar.jpg";

const NavButton = ({ title, icon, fc }) => {
  return (
    <Tooltip title={title} placement="bottom">
      <IconButton
        onClick={fc}
        style={{ color: "blue" }}
        className="text-md relative"
      >
        <span
          className="w-2.5 h-2.5 absolute rounded-full top-1 right-1"
          style={{ background: "red" }}
        />
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  return (
    <div className="p-3 flex items-center justify-between">
      <NavButton title="menu" icon={<AiOutlineMenu />} />

      <div className="flex items-center gap-3 mr-2">
        <NavButton title="message" icon={<BiComment />} />
        <NavButton title="notification" icon={<AiOutlineBell />} />
        <Tooltip title="user profile" placement="bottom">
          <Avatar alt="avatar" src={avatar} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
