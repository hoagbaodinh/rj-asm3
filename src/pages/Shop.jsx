import { Suspense, useState } from "react";
import BreadCrumb from "../components/Layouts/BreadCrumb";
import Sidebar from "../components/ShopPage/Sidebar";
import ProductList from "../components/ShopPage/ProductList";
import { Await, useLoaderData } from "react-router-dom";

const ShopPage = () => {
  const [category, setCategory] = useState("all");
  const { products } = useLoaderData();

  const getCategory = (cate) => {
    setCategory(cate);
  };

  return (
    <>
      <BreadCrumb title="shop" URL="shop" />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar onGetCate={getCategory} />
            </div>

            <div className="col-9">
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={products}>
                  {(loadedProducts) => (
                    <ProductList
                      cateIsShowing={category}
                      products={loadedProducts}
                    />
                  )}
                </Await>
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopPage;
