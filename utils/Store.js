import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';
import * as themes from '../styles/themes';

export const Store = createContext();
const themeNames = Object.keys(themes).filter((t) => t !== undefined);
const initialState = {
  themeName: themeNames.includes(Cookies.get('themeName'))
    ? Cookies.get('themeName')
    : 'default_theme',
  testeVar: 'TESTE',
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      const newTheme = action.payload;
      Cookies.set('themeName', newTheme);
      return { ...state, theme: newTheme };
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