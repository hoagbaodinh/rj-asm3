import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import RelatedPdsList from "./RelatedPdsList";

const RelatedPds = ({ product }) => {
  const { products } = useLoaderData();

  return (
    <div className="relatedPds">
      <h2>Related Products</h2>
      <div className="relatedPdsContent">
        <div className="row">
          <Suspense
            fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
          >
            <Await resolve={products}>
              {(loadedProducts) => (
                <RelatedPdsList products={loadedProducts} product={product} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default RelatedPds;
