import { useEffect, useState } from "react";
import { cartActions } from "../../store/index";
import { useDispatch } from "react-redux";
import formatPrice from "../../util/format-price";

const DetailInfo = ({ product }) => {
  const [quantityNum, setQuantityNum] = useState("1");
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  // Function format giá
  const price = formatPrice(product.price);
  // Thêm item vào cart theo số lượng
  const addItemToCartHandler = () => {
    setSuccess(true);
    //Them item vào cart theo so luong
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
  // Bat su kien inputValue thay thoi
  useEffect(() => {
    if (inputValue === "") return;
    else setQuantityNum(inputValue);
  }, [inputValue]);

  // Neu product thay doi
  useEffect(() => {
    setSuccess(false);
  }, [product]);

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
      {/* Thong bao cho nguoi dung sau khi them vao kho hang */}
      {success && (
        <p style={{ color: "green", marginTop: "0.5rem" }}>
          Add product to cart Successfully!
        </p>
      )}
    </div>
  );
};

export default DetailInfo;
