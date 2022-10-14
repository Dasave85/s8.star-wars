import { types } from "../types";

export const userListReducer = (state, action) => {
  switch (action.type) {
    case types.signin:
      return [...state, action.payload];

    case types.login:
      const userLogin = action.payload;

      const newStateLogin = state.map((user) => {
        if (user.name === userLogin.name) {
          user = { ...user, logged: true };
        }
        return user;
      });

      return newStateLogin;

    case types.logout:
      const newStateLogout = state.map((user) => {
        if (user.logged === true) {
          user = { ...user, logged: false };
        }
        return user;
      });

      return newStateLogout;

    default:
      return state;
  }
};
