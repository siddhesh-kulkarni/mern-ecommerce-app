import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom/page";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Reviews from "../../Components/Reviews/page";
import MostPopular from "../../Components/MostPopular/page";
import Footer from "../../Components/Footer/page";
import ReviewForm from "../../Components/ReviewForm/page";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const dummyProduct = {
  id: 1,
  title: "Classic Cotton T‑Shirt",
  price: 24.99,
  oldPrice: 39.99,
  rating: 4.5,
  reviews: 87,
  colors: ["#111827", "#6B7280", "#EF4444", "#F59E0B"],
  images: [
    "https://picsum.photos/seed/p1/800/800",
    "https://picsum.photos/seed/p2/800/800",
    "https://picsum.photos/seed/p3/800/800",
    "https://picsum.photos/seed/p4/800/800",
  ],
  sizes: ["S", "M", "L", "XL"],
  description:
    "Soft, breathable cotton tee. Perfect for everyday wear. Machine wash cold, tumble dry low. Designed to keep its shape and color over many washes.",
};

const ProductPage = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState(dummyProduct.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(dummyProduct.colors[0]);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(dummyProduct.images?.[0]);
  const [userReviews, setUserReviews] = useState([]);

  const handleReviewSubmit = (reviewData) => {
    setUserReviews([...userReviews, { ...reviewData, id: Date.now() }]);
  };

  return (
    <>
      <div className="mt-4 max-w-7xl mx-auto px-4 mb-4">
        <Breadcrumbs aria-label="breadcrumb" className="mb-4">
          <Link underline="hover" color="inherit" to="/" className="link">
            {t("home")}
          </Link>
          <Link underline="hover" color="inherit" to="/" className="link">
            {t("fashion")}
          </Link>
          <span className="text-gray-600">{dummyProduct.title}</span>
        </Breadcrumbs>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ProductZoom src={selectedImage} alt={dummyProduct.title} />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-500">{t("moreImages")}</h3>
              <div className="flex gap-2 mt-2">
                {dummyProduct.images.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(img)}
                    className={`w-24 h-24 rounded-md overflow-hidden border transform transition-shadow duration-150 ${
                      selectedImage === img
                        ? "ring-2 ring-primary shadow-lg scale-105"
                        : "hover:shadow-md"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-semibold text-gray-900">
              {dummyProduct.title}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i <= Math.round(dummyProduct.rating)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                {dummyProduct.rating} • {dummyProduct.reviews} reviews
              </div>
            </div>

            <div className="mt-4 flex items-baseline gap-4">
              <div className="text-3xl font-bold text-gray-900">
                ${dummyProduct.price.toFixed(2)}
              </div>
              <div className="text-sm line-through text-gray-400">
                ${dummyProduct.oldPrice.toFixed(2)}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-medium text-gray-700">
                {t("size")}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {dummyProduct.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-2 border rounded-md text-sm transition transform ${
                      selectedSize === s
                        ? "border-primary bg-primary/10 scale-105 shadow-sm"
                        : "bg-white hover:scale-105"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700">
                {t("color")}
              </div>
              <div className="flex items-center gap-3 mt-2">
                {dummyProduct.colors.map((c) => (
                  <button
                    key={c}
                    aria-label={`color-${c}`}
                    onClick={() => setSelectedColor(c)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${
                      selectedColor === c
                        ? "ring-2 ring-offset-1 scale-110"
                        : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/10 transition transform hover:scale-110 active:scale-95 font-semibold"
                  title="Decrease quantity"
                >
                  −
                </button>
                <div className="px-6 py-3 font-bold text-lg text-gray-900 min-w-16 text-center select-none">
                  {qty}
                </div>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/10 transition transform hover:scale-110 active:scale-95 font-semibold"
                  title="Increase quantity"
                >
                  +
                </button>
              </div>

              <button className="bg-primary text-white px-6 py-3 rounded-md hover:opacity-95 shadow-md hover:shadow-lg transition">
                {t("addToCart")}
              </button>

              <button className="border px-4 py-3 bg-primary rounded-md hover:bg-gray-50 transition ml-2">
                <FaHeart className="!text-white"/>
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold">{t("productDetails")}</h3>
              <p className="mt-2 text-sm text-gray-700">
                {dummyProduct.description}
              </p>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                {Array.isArray(t("productFeatures")) ? (
                  t("productFeatures", { returnObjects: true }).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))
                ) : (
                  <>
                    <li>100% cotton</li>
                    <li>Regular fit</li>
                    <li>Machine washable</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">{t("relatedProducts")}</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                <img
                  src={`https://picsum.photos/seed/related-${i}/300/200`}
                  alt={`rel-${i}`}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="mt-2">
                  <div className="text-sm font-medium">Product {i}</div>
                  <div className="text-sm text-gray-600">$19.99</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">{t("customerReviews")}</h2>
          <Reviews />
          <ReviewForm onSubmit={handleReviewSubmit} />
          {userReviews.length > 0 && (
            <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">New Reviews</h3>
              <div className="space-y-4">
                {userReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">{review.name}</div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Most popular section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">{t("mostPopular")}</h2>
          <MostPopular />
        </div>

        {/* Footer */}
        <div className="mt-12"></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
