import "./CartCard.css";

const CartCard = ({
  id,
  img,
  title,
  price,
  qnty,
  increse,
  decrese,
  handelProductDelete,
  readonly = false,
  orderstatus,
}) => {
  return (
    <div className="cart_details">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="cart_product_details">
        <h2>{title}</h2>
        <p>Price : ${price}</p>
        {readonly && <em>orderstatus: {orderstatus}</em>}
        <div className="quantity">
          {!readonly && (
            <>
              {" "}
              <p>Qty:</p>
              <button disabled={qnty <= 1} onClick={() => decrese(id)}>
                -
              </button>
              <p>{qnty}</p>
              <button onClick={() => increse(id)}>+</button>
              <button
                className="remove_button"
                onClick={() => handelProductDelete(id)}
              >
                X
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
