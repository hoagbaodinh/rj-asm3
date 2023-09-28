import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

const ProductItem = (props) => {
  const [isShowingDetail, setIsShowingDetail] = useState(false);
  const { name, price, img1 } = props.product;

  const handleDone = () => {
    setIsShowingDetail(false);
  };

  const handleClick = () => {
    setIsShowingDetail(true);
  };
  return (
    <>
      <AnimatePresence>
        {isShowingDetail && (
          <ProductDetail onDone={handleDone} product={props.product} />
        )}
      </AnimatePresence>
      <div className="col-3">
        <div className="pdItemContent">
          <img
            src={img1}
            alt="pd item"
            className="pdItemImg"
            onClick={handleClick}
          />
          <p className="pdItemName" onClick={handleClick}>
            {name}
          </p>
          <p className="pdItemPrice">{price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
