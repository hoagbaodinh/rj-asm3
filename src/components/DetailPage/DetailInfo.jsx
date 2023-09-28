import { useEffect, useState } from "react";
import { cartActions } from "../../store/index";
import { useDispatch } from "react-redux";
import formatPrice from "../../util/format-price";

let isInitial = true;

const DetailInfo = ({ product }) => {
  const [quantityNum, setQuantityNum] = useState("1");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  // Function format giá
  const price = formatPrice(product.price);
  // Thêm item vào cart theo số lượng
  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product._id.$oid,
        image: product.img1,
        title: product.name,
        quantity: +quantityNum,
        price: product.price,
      })
    );
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    setQuantityNum(inputValue);
  }, [inputValue]);

  return (
    <div className="detailInfo">
      <h2 className="detailInfoTitle">{product.name}</h2>
      <p className="detailInfoPrice">{price}</p>
      <p className="detailInfoDesc">{product.short_desc}</p>
      <p className="detailInfoCate">
        category:
        <span>{product.category}</span>
      </p>

      <div className="detailInfoQuantity">
        <input
          type="number"
          placeholder="quantity"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="detailInfoQuantityNum">
          <button
            className="navBtn"
            onClick={(e) => {
              e.preventDefault();
              setQuantityNum((prevState) => {
                if (+prevState === 1) return prevState;
                return +prevState - 1;
              });
            }}
          >
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <span>{quantityNum}</span>
          <button
            className="navBtn"
            onClick={(e) => {
              e.preventDefault();
              setQuantityNum((prevState) => +prevState + 1);
            }}
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
        <button
          className="primary-button detailInfoButton"
          onClick={addItemToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DetailInfo;
