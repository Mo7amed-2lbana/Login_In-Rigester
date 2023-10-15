import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Componant/Layout.jsx/Layout";
import Home from "./Componant/Home/Home";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
