
const ThemeData = {
  light: {
    background: "#eee",
    color: "#333",
  },
  dark: {
    background: "#333",
    color: "#eee",
  },
};

const initialState = { theme: ThemeData.light };

const themeReducer = function (state = initialState, action) {
  switch (action.type) {
    case "LIGHT":
      return { ...state, theme: ThemeData.light };
    case "DARK":
      return { ...state, theme: ThemeData.dark };
    default:
      return state;
  }
};

export default themeReducer;