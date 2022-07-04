import React from "react";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import { BiAtom, BiX } from "react-icons/bi";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { useStateContext } from "./../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();

  console.log(currentColor);
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 text-sm rounded-lg text-gray-700 hover:bg-light-gray`;

  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 font-semibold text-white rounded-lg`;

  return (
    <div className="h-screen ml-3 overflow-auto">
      {/* Logo */}
      <div className="mt-2 mb-3 flex items-center justify-between p-2">
        <Link
          to="/"
          className="flex items-center text-xl gap-3 tracking-tight font-bold dark:text-white text-slate-900"
        >
          <BiAtom />
          <span className="capitalize">eShop</span>
        </Link>

        <Tooltip title="close" placement="bottom">
          <IconButton
            onClick={() => setActiveMenu(false)}
            className="text-lg p-2 hover:drop-shadow-xl hover:bg-light-gray"
            // style={{ background: "blue" }}
          >
            <BiX />
          </IconButton>
        </Tooltip>
      </div>

      {/* Links */}
      <div className="flex flex-col">
        {links.map((el) => {
          return (
            <div key={el.title} className="m-3">
              <p className="text-gray-400 uppercase">{el.title}</p>

              {el.links.map((link) => {
                return (
                  <NavLink
                    to={link.name}
                    key={link.name}
                    style={({ isActive }) => {
                      return {

                        background: isActive ? currentColor : ""
                      }
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
