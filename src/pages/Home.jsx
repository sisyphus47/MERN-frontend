import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
const Home = () => {
  const placeholderProducts = [
    {
      _id: 1,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 2,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 3,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 4,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 5,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 6,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 7,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=9",
          altText: "Casual Shirt",
        },
      ],
    },
    {
      _id: 8,
      name: "Casual Shirt",
      price: 29.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=10",
          altText: "Casual Shirt",
        },
      ],
    },
  ];
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      {/* Top Wears for Women */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
