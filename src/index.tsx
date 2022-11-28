import React from "react";
import {createRoot} from "react-dom/client";
import "./styles/app.scss"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import {Container} from "react-bootstrap";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/user/:id",
        element: <User/>
    }
])

const container = document.getElementById("root")!
createRoot(container).render(
    <Container>
        <RouterProvider router={router}/>
    </Container>
)