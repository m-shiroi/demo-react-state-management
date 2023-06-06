import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { Page1 } from "./page/Page1";
import { Page2 } from "./page/Page2";
import { ColorProvider } from "./providers/colorProvider";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ColorProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ColorProvider>
  </StrictMode>
);
