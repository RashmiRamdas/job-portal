import React, { useReducer, useContext } from "react";

const GlobalContext = React.createContext();
const initialState = {
  user: {
    username: "",
    password: "",
    userType: "employer",
    isSignInSuccess: true,
  },
};

export const ACTIONS = {
  CHANGE_VALUE: "change_value",
  LOGIN_STATUS: "login_status",
};

export const FIELDS = {
  USERNAME: "username",
  PASSWORD: "password",
  USERTYPE: "userType",
  IS_SIGN_IN_SUCCESS: "isSignInSuccess",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_VALUE:
      return {
        // ...state,
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };
    case ACTIONS.LOGIN_STATUS:
      return {
        user: {
          ...state.user,
          [FIELDS.IS_SIGN_IN_SUCCESS]: action.value,
        },
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = [state, dispatch];
  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
