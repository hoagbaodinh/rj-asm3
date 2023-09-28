import { useNavigate } from "react-router-dom";
import Modal from "../Layouts/Modal";

const ProductDetail = (props) => {
  const { name, price, img1, short_desc } = props.product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <Modal onClose={props.onDone}>
      <div className="pdDetailContainer">
        <div className="row">
          <div className="col-6">
            <img src={img1} alt="pd detail" className="w-100" />
          </div>
          <div className="col-6">
            <div className="pdDetailContent">
              <h2 className="pdDetailTitle">{name}</h2>
              <p className="pdDetailPrice">{price}</p>
              <p className="pdDetailDescription">{short_desc}</p>
              <button className="pdDetailButton" onClick={handleClick}>
                <i className="fa-solid fa-cart-shopping"></i>
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;
