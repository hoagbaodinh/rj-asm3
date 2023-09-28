import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutOrder from "../components/Checkout/CheckoutOrder";
import BreadCrumb from "../components/Layouts/BreadCrumb";

const CheckoutPage = () => {
  return (
    <>
      <BreadCrumb title="checkout" URL="/home/cart/checkout" />
      <main>
        <div className="container">
          <h2 className="cartTitle">billing details</h2>
          <div className="row">
            <div className="col-8">
              <CheckoutForm />
            </div>

            <div className="col-4">
              <CheckoutOrder />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
