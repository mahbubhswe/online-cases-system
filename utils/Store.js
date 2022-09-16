import { createContext, useReducer } from "react";
import {
  useLocalStorage,
  writeStorage,
  deleteFromStorage,
} from "@rehooks/local-storage";
import Cookies from "js-cookie";
export const contextStore = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      const loginUser = action.payload;
      writeStorage("userInfo", loginUser);
      return { ...state, userInfo: loginUser };
    }
    case "USER_LOGOUT": {
      deleteFromStorage("userInfo");
      Cookies.remove("token");
      return { ...state, userInfo: null };
    }

    default:
      return state;
  }
};
export default function StoreProvider(props) {
  const [userInfo] = useLocalStorage("userInfo");
  const initialState = {
    userInfo: userInfo ? userInfo : null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <contextStore.Provider value={value}>
      {props.children}
    </contextStore.Provider>
  );
}
