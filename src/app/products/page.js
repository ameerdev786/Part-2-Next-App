// pages/products.js
 import { products } from '../utils/productData';
import ProductCard from '../components/ProductCard';

const Products = () => (
  <div className=" bg-[#F8F9FA;]  flex items-center justify-center w-[100%] h-[100vh]">
    <div className="container h-auto   w-[80%] ">
      {/* Use a responsive grid layout with three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {products?.map(product => (
            // product card component to render only ui of product cards
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  </div>
);

export default Products;
