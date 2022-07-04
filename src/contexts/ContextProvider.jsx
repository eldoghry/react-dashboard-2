import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [themeSettingMenu, setThemeSettingMenu] = useState(false);
  const [currentColor, setCurrentColor] = useState("#1A97F5");

  const activeThemeSettingMenu = () => {
    setThemeSettingMenu(!themeSettingMenu);
    // activeMenu && setActiveMenu(false);
  };

  const setColorMode = (color) => {
    setCurrentColor(color);
    setThemeSettingMenu(false);
    localStorage.setItem("colorMode", color);
  };

  return (
    //passing values to provider: this will act as global variable for all components
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        themeSettingMenu,
        activeThemeSettingMenu,
        setThemeSettingMenu,
        currentColor,
        setColorMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
