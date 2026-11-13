import React from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

createRoot(document.getElementById("root")).render(<App />);

// Remove any service worker left by older Create React App deployments.
serviceWorker.unregister();
