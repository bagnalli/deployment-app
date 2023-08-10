import React from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.css";

import { App } from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
