// import { useState } from "react";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductListItem from "./ProductListItem";
import { AnimatePresence } from "framer-motion";

const ProductList = ({ products }) => {
  const [pageNum, setPageNum] = useState(1);
  const [productsIsShowing, setProductsIsShowing] = useState([]);
  const cateIsShowing = useSelector((state) => state.productList.category);
  useEffect(() => {
    console.log(cateIsShowing);
    if (cateIsShowing === "all") return setProductsIsShowing([...products]);
    else
      setProductsIsShowing(() => {
        let filPd = products.filter((pd) => pd.category === cateIsShowing);
        return filPd;
      });
  }, [cateIsShowing, products]);

  console.log(productsIsShowing);
  return (
    <div className="productList">
      <div className="pdListTop">
        <input
          type="text"
          className="pdListSearch"
          placeholder="Enter Search Name"
        />

        <select name="sort" className="pdListSort">
          <option value="Default Sorting">Default Sorting</option>
          <option value="From Lowest">From Lowest</option>
          <option value="From Highest">From Highest</option>
        </select>
      </div>

      <div className="pdListContent">
        <div className="row">
          <AnimatePresence>
            {productsIsShowing.map((product) => (
              <ProductListItem product={product} key={product.name} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="pdListPageNav">
        <div className="pageNavBtns">
          <button>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <input
            type="text"
            className={`pageNum ${
              productsIsShowing.length === 0 ? "d-none" : ""
            }`}
            value={pageNum}
            onChange={(e) => setPageNum(e.target.value)}
          />
          <button>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>

        <p className="pageNavDescription">{`Showing 1-9 of ${productsIsShowing.length} results`}</p>
        <p></p>
      </div>
    </div>
  );
};

export default ProductList;
