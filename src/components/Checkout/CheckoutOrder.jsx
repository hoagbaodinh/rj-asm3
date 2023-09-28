import { useSelector } from "react-redux";
import formatPrice from "../../util/format-price";

const CheckoutOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const fmTotalPrice = formatPrice(totalPrice);

  return (
    <div className="cartTotalContainer">
      <h2>Your Order</h2>
      {cartItems.map((item) => (
        <div className="checkoutItem" key={item.id}>
          <div className="checkoutItemContent">
            <span>{item.title}</span>
            <span className="priceAndQuantity">
              {`${formatPrice(item.price)} x ${item.quantity}`}
            </span>
          </div>
          <div className="hz-line"></div>
        </div>
      ))}
      <div className="cartTotal">
        <h3>total</h3>
        <span> {fmTotalPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutOrder;
