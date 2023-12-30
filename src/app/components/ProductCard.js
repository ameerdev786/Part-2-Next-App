// components/ProductCard.js
import Link from 'next/link';

const ProductCard = ({ id, name, price, image, description }) => (
    // to render detail of product name and price in home page grid 
  <div className="product-card bg-[white] mx-auto text-center sm:w-[60%] w-[100%] p-3 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    <div className="product-image">
      <img src={image} alt={name} className="w-full h-32  object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">${price.toFixed(2)} AED</p>
      <p className="text-gray-700">{description}</p>
      {/* Use Link to navigate to the product-specific route */}
      <Link href={`/products/${id}`}>
        <div className="block bg-red-600 text-white py-2 px-4 rounded-full text-center hover:bg-red-500 transition duration-300 ease-in-out">
          View Details
        </div>
      </Link>
    </div>
  </div>
);

export default ProductCard;
