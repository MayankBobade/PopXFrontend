import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Welcome } from "./welcomePage";
import { CreateAccount } from "./createAccount";
import { Account } from "./account";
import { Login } from "./login";
import { UserProvider } from "./userContext";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserProvider><RouterProvider router={myRoutes} /></UserProvider>);
