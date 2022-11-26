import React from "react";
import {createRoot} from "react-dom/client";
import "./styles/app.scss"
import App from "./pages/App";

const container = document.getElementById("root")!
createRoot(container).render(<App/>)