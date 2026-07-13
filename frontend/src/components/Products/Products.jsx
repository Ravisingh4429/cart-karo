import { useParams, useSearchParams } from "react-router-dom";
import useData from "../../hooks/useData.js";
import ProductCard from "./ProductCard";
// import ProductList from "./ProductList.jsx";
import "./Products.css";
import ProductSkeleton from "./ProductSkeleton.jsx";
import SideBar from "./SideBar.jsx";
import Paginations from "../Common/Paginations.jsx";

const Products = () => {
  const [search, setserach] = useSearchParams();
  const category = search.get("category");
  const searchquery = search.get("search");
  const page = search.get("page");
  const pageClickHanel = (page) => {
    const categoryStore = Object.fromEntries([...search]);
    setserach({ ...categoryStore, page: page });
  };
  const {
    data: products,
    error,
    isloading,
  } = useData(
    "/products/display",
    {
      params: {
        search: searchquery,
        category: category,
        page,
      },
    },
    [searchquery, category, page]
  ); // data:product rename
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="product_main">
      <SideBar />
      <div className="main">
        <div className="upper_side">
          <h3>Products</h3>
          <select name="" id="">
            <option value="">Relevance</option>
            <option value="price desc">price high to low</option>
            <option value="price asc">price low to high</option>
            <option value="rate desc">rating high to low</option>
            <option value="rate asc">rating low to high</option>
            {/* <option value="">Relevance</option> */}
          </select>
        </div>
        <div className="product_card">
          {error && <em>{error}</em>}
          {isloading
            ? skeleton.map((item) => <ProductSkeleton key={item} />)
            : products &&
              products.products.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  price={item.price}
                  image={item.images[0]}
                  name={item.title}
                  rating={item.reviews.rate}
                  ratingcount={item.reviews.counts}
                  stock={item.stock}
                ></ProductCard>
              ))}
        </div>
        <Paginations
          totalpost={products?.totalProducts}
          perpage={8}
          onclick={pageClickHanel}
          currentPage={page}
        />
      </div>
    </section>
  );
};

export default Products;
