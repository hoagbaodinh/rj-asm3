import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { getFromStorage } from "../../util/local-storage";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CheckoutForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const currentUser = getFromStorage("currentUser");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setFullname(currentUser.fullname);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
    }
  }, [currentUser]);

  const handleClick = (e) => {
    e.preventDefault();
    // Neu du lieu form validate thi xoa gio hang và chuyen huong ve index
    if (fullname && email && phone && address) {
      window.alert("Successfully placed your order!");
      //reset cart
      dispatch(
        cartActions.replaceCart({
          items: [],
          totalQuantity: 0,
        })
      );
      // chuyen huong ve trang chu
      return navigate("/");
    } else {
      window.alert("You must fill all required fields!");
      return navigate("/checkout");
    }
  };
  return (
    <Form className="checkoutForm">
      <div className="checkoutFormItem">
        <label htmlFor="fullname">full name:</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter your full name here!"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="checkoutFormItem">
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="checkoutFormItem">
        <label htmlFor="phone">phone number:</label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number here!"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="checkoutFormItem">
        <label htmlFor="address">address:</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address here!"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className="primary-button" onClick={handleClick}>
        Place Order
      </button>
    </Form>
  );
};

export default CheckoutForm;
