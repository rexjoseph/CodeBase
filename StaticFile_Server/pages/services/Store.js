import React, { createContext, useReducer } from "react";
// voor nu even true!!
const initialState = { authed: true };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "userLogin":
        return Object.assign({}, state, { data: action.payload, authed: true });
      case "userUpdate":
        return Object.assign({}, state, { data: action.payload });
      case "getUsers":
        return Object.assign({}, state, { data: action.payload });
      case "ForumTopics":
        return Object.assign({}, state, { forums: action.payload });
      case "AuthorList":
        return Object.assign({}, state, { authors: action.payload });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
