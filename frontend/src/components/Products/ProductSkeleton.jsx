import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductSkeleton = () => {
  return <Skeleton className="product_card_skeleton" height={300}></Skeleton>;
};

export default ProductSkeleton;
