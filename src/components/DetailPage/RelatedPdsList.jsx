import { useNavigate } from "react-router-dom";

const RelatedPdsList = ({ products, product }) => {
  // Lay tat ca product co category trung voi product dang xem
  const relatedProducts = products.filter(
    (pd) => pd.category === product.category
  );
  // Chuyen huong den san pham duoc click
  const navigate = useNavigate();
  const handleClick = (pd) => {
    navigate(`/detail/${pd._id.$oid}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {relatedProducts.map((pd) => (
        <div className="col-3" key={pd._id.$oid}>
          <div className="pdItemContent">
            <img
              src={pd.img1}
              alt="pd item"
              className="pdItemImg"
              onClick={() => handleClick(pd)}
            />
            <p className="pdItemName" onClick={() => handleClick(pd)}>
              {pd.name}
            </p>
            <p className="pdItemPrice">{pd.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPdsList;
