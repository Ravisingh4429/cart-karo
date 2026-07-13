import React from "react";
import "./Paginations.css";
const Paginations = ({ totalpost, perpage, onclick, currentPage }) => {
  let page = [];
  for (let i = 1; i <= Math.ceil(totalpost / perpage); i++) {
    page.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {page.length > 1 &&
          page.map((item) => (
            <li key={item}>
              <button
                className={item === Number(currentPage) ? "active" : ""}
                onClick={() => onclick(item)}
              >
                {item}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Paginations;
