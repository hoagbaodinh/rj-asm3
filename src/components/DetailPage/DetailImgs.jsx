import { useEffect, useState } from "react";

const DetailImgs = ({ product }) => {
  const imgs = [product.img1, product.img2, product.img3, product.img4];
  const [currentImg, setCurrentImg] = useState(product.img1);

  //  thay doi hinh anh khi product thay doi
  useEffect(() => {
    setCurrentImg(product.img1);
  }, [product]);
  return (
    <div className="row">
      <div className="col-2 p-0">
        <div className="detailImgThumb">
          {imgs.map((img, i) => (
            <img
              src={img}
              alt="thumb"
              key={i}
              onClick={() => setCurrentImg(img)}
            />
          ))}
        </div>
      </div>
      <div className="col-10 p-0">
        <img src={currentImg} alt="main" style={{ padding: "0 0.5rem" }} />
      </div>
    </div>
  );
};

export default DetailImgs;
