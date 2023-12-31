import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import formatPrice from "../../util/format-price";
import { motion } from "framer-motion";
const CartItem = (props) => {
  const { image, title, quantity, totalPrice, price, id } = props.item;
  const fmPrice = formatPrice(price);
  const formatTotalPrice = formatPrice(totalPrice);

  // Dispatch redux
  const dispatch = useDispatch();

  // Thêm 1 item vào cart item
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        image,
        title,
        price,
        quantity: 1,
      })
    );
  };

  // Xoá 1 item
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  // Hàm xoá item khỏi cart
  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFormCart(id));
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      open
      className="cartGrid"
    >
      {/* Image */}
      <div className="cartGridItem cartItemImg">
        <img src={image} alt="cart item" />
      </div>
      {/* Product name */}
      <div className="cartGridItem  cartItemTitle">{title}</div>
      {/* Price */}
      <div className="cartGridItem  cartItemPrice">{fmPrice}</div>
      {/* Quantity */}
      <div className="cartGridItem  cartItemQuantity">
        <button className="navBtn" onClick={removeItemHandler}>
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <span>{quantity}</span>
        <button className="navBtn" onClick={addItemHandler}>
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
      {/* Total Price */}
      <div className="cartGridItem  cartItemPrice">{formatTotalPrice}</div>
      {/* Remove Item */}
      <div className="cartGridItem  cartItemRemove">
        <button className="  cartItemRemoveBtn" onClick={deleteItemHandler}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
