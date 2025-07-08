import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products, navigate } = useContext(AppContext);

  //<Route path="/products/:category" element={<ProductPage />} />
  //http://localhost:3000/products/electronics
  //const { category } = useParams();
  //console.log(category); // Output: "electronics"
  const { category } = useParams();
  console.log("category", category);

  // search category product
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  // search category ke under jo product aaye hai uske uper filter method ko apply karna hai.
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div>
      <h2 className="bg-green-600 text-white p-3">Product Category Page</h2>
      <div className="mt-16">
        {searchCategory && (
          <div className="flex flex-col items-end w-max">
            <h1 className="text-3xl md:4xl font-medium">
              {/* serch category ke text yaha uppercase ke under hona chahiye */}
              {searchCategory.text.toUpperCase()}
            </h1>
          </div>
        )}
        {filteredProducts.length > 0 ? (
          <div>
            <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-3xl md:text-4xl font-medium">
            No Product Found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
