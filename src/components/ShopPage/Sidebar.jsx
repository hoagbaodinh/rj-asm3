import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../../store";

const Sidebar = (props) => {
  const category = useSelector((state) => state.productList.category);
  const dispatch = useDispatch();

  const handleClick = (cate) => {
    dispatch(productListActions.changeCate(cate));
  };

  return (
    <div className="sidebar">
      <h2 className="sidebarTitle">categories </h2>
      <div className="sidebarContent">
        <div className="sidebarItem">
          <h2 className="sidebarItemHeader">apple</h2>
          <span
            className={`sidebarLink ${category === "all" ? "activeCate" : ""}`}
            onClick={() => handleClick("all")}
          >
            All
          </span>
        </div>

        <div className="sidebarItem">
          <h2>iphone & mac</h2>
          <div className="itemContent">
            <span
              className={`sidebarLink ${
                category === "iphone" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("iphone")}
            >
              Iphone
            </span>
            <span
              className={`sidebarLink ${
                category === "ipad" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("ipad")}
            >
              Ipad
            </span>
            <span
              className={`sidebarLink ${
                category === "mac" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("mac")}
            >
              Mac
            </span>
          </div>
        </div>
        <div className="sidebarItem">
          <h2>wireless</h2>
          <div className="itemContent">
            <span
              className={`sidebarLink ${
                category === "airpod" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("airpod")}
            >
              Airpod
            </span>
            <span
              className={`sidebarLink ${
                category === "watch" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("watch")}
            >
              Watch
            </span>
          </div>
        </div>
        <div className="sidebarItem">
          <h2>other</h2>
          <div className="itemContent">
            <span
              className={`sidebarLink ${
                category === "mouse" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("mouse")}
            >
              Mouse
            </span>
            <span
              className={`sidebarLink ${
                category === "keyboard" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("keyboard")}
            >
              Keyboard
            </span>
            <span
              className={`sidebarLink ${
                category === "other" ? "activeCate" : ""
              }`}
              onClick={() => handleClick("other")}
            >
              Other
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
