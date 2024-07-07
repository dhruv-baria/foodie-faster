import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {  } from "react"
import ReactDOM from "react-dom/client"
import Header from './Header';
import Body from './Body';
import About from './About';
import Help from './Help';
import Offers from './Offers';
import RestaurantMenu from './RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './Footer';
import { Provider } from "react-redux";
import appStore from './utiles/appStore';
import Cart from './Cart';


const Applayout = () => {
  return (
      <Provider store={appStore}>
          <div className="app">
              <Header />
              <Outlet />
              <Footer />
          </div>
      </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <Applayout />,
      children : [
          {
              path: "/",
              element: <Body />,
          },
          {
              path: "/about",
              element: <About />,
          },
          {
              path: "/help",
              element: <Help />,
          },
          {
              path: "/offers",
              element: <Offers />,
          },
          {
              path: "/restaurant/:resId",
              element: <RestaurantMenu />,
          },
          {
              path: "/cart",
              element: <Cart/>,
          },
      ],
  }]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
