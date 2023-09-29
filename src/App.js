import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import DetailPage from "./pages/Detail";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RootPage, { currentUserLoader } from "./pages/Root";
import ErrorPage from "./pages/Error";
import { loader as productsLoader } from "./components/HomePage/Products";
import { loader as pdDetailLoader } from "./pages/Detail";
import { action as authAction } from "./components/AuthPage/AuthForm";
import { action as logoutAction } from "./components/AuthPage/Logout";
import { fetchCartData, sendCartData } from "./store/cart-actions";

// Router v6
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    loader: currentUserLoader,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage />, loader: productsLoader },
      { path: "shop", element: <ShopPage />, loader: productsLoader },
      {
        path: "detail",
        children: [
          {
            path: ":detailId",
            element: <DetailPage />,
            loader: pdDetailLoader,
          },
        ],
      },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LoginPage />, action: authAction },
      { path: "register", element: <RegisterPage /> },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
let isInitial = true;
function App() {
  // Lấy cart từ store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Lấy dữ liệu cart từ localStorage
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // Nếu lần đầu tiên vào web thì không cần update cart từ store
    if (isInitial) {
      isInitial = false;
      return;
    }
    // Update dữ liệu cart khi cart thay đổi
    sendCartData(cart);
  }, [cart]);
  return <RouterProvider router={router} />;
}

export default App;
