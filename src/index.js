import React from "react";
import { createRoot } from "react-dom/client";
import { RouterRoot } from "@kokateam/router-vkminiapps";
import App from "./App";

import "@vkontakte/vkui/dist/vkui.css";
import { AdaptivityProvider } from "@vkontakte/vkui";

const root = createRoot(document.getElementById("root"));
root.render(
  <RouterRoot>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </RouterRoot>
);
