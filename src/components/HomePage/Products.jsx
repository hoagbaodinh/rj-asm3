import { Suspense } from "react";
import ProductItem from "./ProductItem";
import { Await, defer, json, useLoaderData } from "react-router-dom";

const Products = () => {
  const { products } = useLoaderData();

  return (
    <section className="trendingProducts">
      <div className="container">
        <div className="section-title trendingPdTitle">
          <p>made it hard way</p>
          <h1>top trending products</h1>
        </div>

        <div className="pdContent">
          <div className="row">
            <Suspense
              fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
            >
              <Await resolve={products}>
                {(loadedProducts) => {
                  let pds;
                  if (loadedProducts.length > 8)
                    pds = loadedProducts.slice(0, 8);
                  else pds = loadedProducts;
                  return pds.map((prd) => (
                    <ProductItem key={prd.name} product={prd} />
                  ));
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

async function loadProduct() {
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
    let prds = resData.map((pd) => {
      return { ...pd, price: VND.format(pd.price).replace("₫", "VND") };
    });
    console.log(prds);
    return prds;
  }
}

export function loader() {
  return defer({
    products: loadProduct(),
  });
}
