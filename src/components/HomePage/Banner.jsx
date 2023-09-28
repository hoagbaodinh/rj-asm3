import { useNavigate } from "react-router-dom";
import bannerImg from "../../assets/banner1.jpg";

const Banner = () => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/shop");
  };

  return (
    <section className="banner">
      <div className="container">
        <div className="bannerContent">
          <p className="bannerSubtitle">new inspiration 2020</p>
          <h3 className="bannerTitle">
            20% off on new <br /> season
          </h3>
          <button type="button" onClick={clickHandler} className="bannerButton">
            Browse collections
          </button>
          <img src={bannerImg} alt="banner " className="bannerImg" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
