import { useNavigate } from "react-router-dom";
import cate1 from "../../assets/product_1.png";
import cate2 from "../../assets/product_2.png";
import cate3 from "../../assets/product_3.png";
import cate4 from "../../assets/product_4.png";
import cate5 from "../../assets/product_5.png";

const Categories = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title ">
          <p>carefully created collections</p>
          <h1>browse our categories</h1>
        </div>

        <div className="cateContent">
          <div className="row">
            <div className="col-6 cateItem">
              <img src={cate1} alt="iphone" onClick={clickHandler} />
            </div>
            <div className="col-6 cateItem">
              <img src={cate2} alt="mac" onClick={clickHandler} />
            </div>
            <div className="col-4 cateItem">
              <img src={cate3} alt="ipad" onClick={clickHandler} />
            </div>
            <div className="col-4 cateItem">
              <img src={cate4} alt="watch" onClick={clickHandler} />
            </div>
            <div className="col-4 cateItem">
              <img src={cate5} alt="airpods" onClick={clickHandler} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
