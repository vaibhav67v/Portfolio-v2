import {createRoot} from "react-dom/client";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import App from "./App";
import Home from "./pages/Home";
import '../index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);