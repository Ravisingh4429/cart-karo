import React from "react";
import HeroSections from "./HeroSections";

import FeatureProducts from "./FeatureProducts";
import iphone14 from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/ChatGPT Image Dec 30, 2025, 09_43_40 PM.png";

const Home = () => {
  const subtitle =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus quaerat est soluta officia cupiditate veniam in? Dicta quos officia ea laborum. Velit veritatis fuga libero molestias ipsa facilis ad.";
  return (
    <div>
      <HeroSections
        title="iphone 14"
        link={"/products/product/695e02d552812d386c17f19a"}
        subtitle={subtitle}
        image={iphone14}
      ></HeroSections>
      <FeatureProducts></FeatureProducts>
      <HeroSections
        title="Build the Untimate system"
        subtitle={subtitle}
        image={mac}
        link={"/products/product/695e02d552812d386c17f1a2"}
      ></HeroSections>
    </div>
  );
};

export default Home;
