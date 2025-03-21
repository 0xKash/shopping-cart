import App from "./App";
import Home from "./pages/home/home";

const routes = [
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/:name",
    element: <App />,
  },
];

export default routes;
