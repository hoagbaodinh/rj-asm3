import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const currentUser = useRouteLoaderData("root");

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul className="headerLeft">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "activeNav" : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "activeNav" : undefined
                  }
                  end
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <Link to="/" className="headerCenter">
              BOUTIQUE
            </Link>
          </div>
          <div className="col-4">
            <ul className="headerRight">
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "activeNav" : undefined
                  }
                  end
                >
                  <i className="fa-solid fa-cart-flatbed"></i>
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={currentUser ? "" : "/login?mode=login"}
                  className={({ isActive }) =>
                    isActive ? "activeNav" : undefined
                  }
                  end
                >
                  <i className="fa-solid fa-user"></i>
                  {currentUser ? currentUser.fullname : "Login"}
                  {currentUser && <i className="fa-solid fa-caret-down"></i>}
                </NavLink>
              </li>
              {currentUser && (
                <li>
                  <Form action="/logout" method="post">
                    <button>(Logout)</button>
                  </Form>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
