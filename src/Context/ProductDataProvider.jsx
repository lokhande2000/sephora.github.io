import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextProductDataProvider = createContext();

const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  async function fetchProductData() {
    try {
      let res = await axios.get(`http://localhost:8080/products`);
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const Singlecategorys = [
    {
      id: 1,
      image:
        "https://www.sephora.com/contentimages/2024-3-1-kerastase-premiere-collection-site-desktop-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=400",
      brand: "Fight Damage with New Kerastase Premier",
      name: "Visibly restore 99% of hairs original strength.",
    },
    {
      id: 2,
      image:
        "https://www.sephora.com/contentimages/2024-2-29-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=400",
      brand: "The Need-to-Know",
      name: "Discover new and exclusive hair care from PATTERN by Tracee Elis Ross.",
    },
    {
      id: 3,
      image:
        "https://www.sephora.com/contentimages/2024-02-19-digital-personalization-bundle-b-site-desktop-home-page-rwd-marketing-banner-february-skincare-trending-on-social-us-final.jpg?imwidth=400",
      brand: "Hot on Social",
      name: "On-trend skincare picks all over your #FYP.",
    },
    {
      id: 4,
      image:
        "https://www.sephora.com/contentimages/2023-9-22-black-owned-brands-site-desktop-mobile-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=400",
      brand: "The Need-to-Know",
      name: "Shop game-changing hair care from adwoa beauty, RIES, and BREAD BEAUTY SUPPLY.",
    },
    {
      id: 5,
      image:
        "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-beauty-on-demand-release.jpg?imwidth=400",
      brand: "Beauty on Demand",
      name: "Fast and easy oprtions that work for you.",
    },
    {
      id: 6,
      image:
        "https://www.sephora.com/contentimages/site-desktop-mobile-home-page-marketing-banner-1cta-0imagelinks-abtest-wave1_01.jpg?imwidth=400",
      brand: "Save with Auto-Replenish",
      name: "Get 5% off subscription deliveries and never run out of your go-tos again.",
    },
  ];

  const details = {
    productData,
    Singlecategorys,
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <ContextProductDataProvider.Provider value={details}>
      {children}
    </ContextProductDataProvider.Provider>
  );
};

export default ProductDataProvider;
