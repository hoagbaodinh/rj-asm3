import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getFromStorage } from "../../util/local-storage";

const CheckoutForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const currentUser = getFromStorage("currentUser");
  useEffect(() => {
    if (currentUser) {
      setFullname(currentUser.fullname);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
    }
  }, [currentUser]);
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
        />
      </div>
      <button className="primary-button">Place Order</button>
    </Form>
  );
};

export default CheckoutForm;
