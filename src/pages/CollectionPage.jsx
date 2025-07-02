import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const sidebarRef = useRef(null);
  const filterButtonRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      // Simulate fetching products from an API
      const fetchedProducts = [
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
      setProducts(fetchedProducts);
    }, 1000);
  }, []); // Fetch products when component mounts

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Close sidebar if clicked outside
    const handleClickOutside = (e) => {
      if (
        // Check if sidebarRef is null
        sidebarRef.current &&
        // Check if the target is sidebarRef
        !sidebarRef.current.contains(e.target) &&
        // Check if the target is the filter button
        e.target !== filterButtonRef.current
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        ref={filterButtonRef}
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center cursor-pointer"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter SideBar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
