import { Await, defer, json, useLoaderData } from "react-router-dom";
import BreadCrumb from "../components/Layouts/BreadCrumb";
import DetailImgs from "../components/DetailPage/DetailImgs";
import { Suspense } from "react";
import DetailInfo from "../components/DetailPage/DetailInfo";
import DetailDescription from "../components/DetailPage/DetailDescription";
import RelatedPds from "../components/DetailPage/RelatedPds";

const DetailPage = () => {
  // Lay product co id trung voi tham so router
  const { product } = useLoaderData();

  return (
    <>
      <BreadCrumb title="Detail" URL="detail" />
      <section className="detailProduct">
        <div className="container">
          <Suspense
            fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
          >
            <Await resolve={product}>
              {(loadedProduct) => {
                return (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <DetailImgs product={loadedProduct} />
                      </div>

                      <div className="col-6">
                        <DetailInfo product={loadedProduct} />
                      </div>
                    </div>

                    <DetailDescription product={loadedProduct} />

                    <RelatedPds product={loadedProduct} />
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default DetailPage;

async function loadProducts() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch events." });
  } else {
    const resData = await response.json();
    let VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    let products = resData.map((pd) => {
      return { ...pd, price: VND.format(pd.price).replace("₫", "VND") };
    });

    return products;
  }
}

async function loadProduct(id) {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch events." });
  } else {
    const resData = await response.json();
    const product = resData.find((pd) => pd._id.$oid === id);

    return product;
  }
}

export async function loader({ params }) {
  const id = params.detailId;

  return defer({
    product: await loadProduct(id),
    products: loadProducts(),
  });
}
