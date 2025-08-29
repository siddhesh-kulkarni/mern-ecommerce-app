import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 11,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",  // original price for cutoff
    discount: "20%",  // discount percentage
    rating: 4, // out of 5 stars
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  {
    id: 12,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",
    discount: "20%",
    rating: 4,
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  {
    id: 12,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",
    discount: "20%",
    rating: 4,
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  {
    id: 12,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",
    discount: "20%",
    rating: 4,
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  {
    id: 12,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",
    discount: "20%",
    rating: 4,
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  {
    id: 12,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",
    discount: "20%",
    rating: 4,
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  {
    id: 12,
    name: "Multicolored Open-Knit Crewneck",
    brand: "Gadget Zone",
    price: "$79.00",
    originalPrice: "$99.00",
    discount: "20%",
    rating: 4,
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/85-home_default/hummingbird-cushion.jpg",
    imageHover: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg",
    link: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/footwear/11-259-hummingbird-cushion.html#/1-size-small/11-color-black",
  },
  // Add more unique IDs for other products
];

const ProductItemsPage = () => {
  return (
    <section className="py-6 px-2 lg:px-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 ease-in-out"
          >
            {/* Image container */}
            <div className="relative overflow-hidden">
              {/* Discount badge */}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 shadow z-20">
                  {product.discount} OFF
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                src={product.imageHover}
                alt=""
                className="w-full absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />

              {/* Hover buttons - show on hover (all screen sizes) */}
              <div className="flex flex-col gap-2 absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {[FaRegHeart, MdOutlineShoppingCart].map((Icon, i) => (
                  <button
                    key={i}
                    className="bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500 hover:scale-110 transition-transform duration-300 ease-in-out"
                    style={{
                      transitionProperty: "color, transform",
                    }}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info section */}
            <div className="p-3 text-center">
              <p className="text-xs text-gray-500">{product.brand}</p>
              <h3 className="text-sm font-semibold mt-1">{product.name}</h3>

              {/* Rating stars */}
              <div className="flex justify-center mt-1 space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) =>
                  i < product.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                )}
              </div>

              {/* Prices */}
              <div className="mt-2 flex justify-center items-center gap-2">
                <span className="text-base font-bold text-[#333]">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductItemsPage;
