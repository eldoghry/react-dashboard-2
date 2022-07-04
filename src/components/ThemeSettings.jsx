import { IconButton, Tooltip } from "@mui/material";
import { BiX } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import React from "react";
import { themeColors } from "./../data/dummy";
import { useStateContext } from "./../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setThemeSettingMenu, currentColor, setColorMode } = useStateContext();
  return (
    <div className="w-screen h-screen nav-item bg-half-transparent fixed top-0 left-0 ">
      <div className="w-72 bg-white h-screen float-right p-3">
        <div className="flex items-center justify-between">
          <span className="text-xl capitalize font-bold text-slate-900">
            settings
          </span>

          <Tooltip title="close" placement="bottom">
            <IconButton
              onClick={() => setThemeSettingMenu(false)}
              className="text-lg p-2 hover:drop-shadow-xl hover:bg-light-gray"
              // style={{ background: "blue" }}
            >
              <BiX />
            </IconButton>
          </Tooltip>
        </div>

        <div className="mt-6 border-t-1 border-color">
          <p className="text-md capitalize font-bold text-slate-900 pt-4">
            Theme Mode
          </p>

          <div className="mt-2">
            <input type="radio" id="light" value="light" checked={false} />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>

            <div className="mt-2">
              <input type="radio" id="dark" value="dark" checked={true} />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t-1 border-color">
          <p className="text-md capitalize font-bold text-slate-900 pt-4">
            Theme Colors
          </p>

          <div className="flex gap-3 mt-3 flex-wrap">
            {themeColors.map((item) => {
              console.log(item.color, currentColor);
              return (
                <IconButton
                  onClick={() => setColorMode(item.color)}
                  className="text-white w-10 h-10 text-sm hover:drop-shadow-xl hover:bg-light-gray"
                  style={{ background: item.color }}
                >
                  {item.color === currentColor && <AiOutlineCheck />}
                </IconButton>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
