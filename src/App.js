import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantMenu from "./components/Restaurantmenu";
import "../index.css";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
// import About from "./components/About";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On Demand Loading
// Dynamix Import

const AppLayout = () => {
  // authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    // make your api call here
    const data = {
      name: "sumit singh",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const roots = ReactDOM.createRoot(document.getElementById("root"));

// How to render functional component
roots.render(<RouterProvider router={appRouter} />);
