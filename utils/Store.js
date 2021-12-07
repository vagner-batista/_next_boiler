import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import dinamicTheme, { themeNames } from "lib/themes";

export const Store = createContext();

const initialState = {
  themeName: themeNames[0],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_THEME": {
      const newTheme = action.payload;
      Cookies.set("themeName", newTheme);
      return { ...state, themeName: newTheme };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
