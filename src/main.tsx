import React from "react";
import ReactDOM from "react-dom/client";
import Tictac from "./Game/tictac";
import "./css/ticTacStyle.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Tictac />);
