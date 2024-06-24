import React from "react";
import { Light, Dark } from "../components/ReduxThemes/action/Theme.action";

import { useDispatch, useSelector } from "react-redux";

export default function CounterRedux() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  console.log(theme);

  return (
    <div style={theme}>
      <div style={{ height: "90vh", width: "100vw" }}>
        <h1>Redux Theme</h1>
        <button onClick={() => dispatch(Light())}>Light</button>
        <button onClick={() => dispatch(Dark())}>Dark</button>
      </div>
    </div>
  );
}
