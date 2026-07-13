import { Link } from "react-router-dom";
import "./SideBar.css";
import useData from "../../hooks/useData";
const SideBar = () => {
  const { data: Category, error } = useData("/category/display/");
  return (
    <aside className="side_bar">
      <h3>Category</h3>
      <ul>  
        {error && <em className="error_category">{error}</em>}
        {Category &&
          Category.allCategory.map((item) => (
            <li key={item._id}>
              <Link to={`/products?category=${item.name}`}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default SideBar;
