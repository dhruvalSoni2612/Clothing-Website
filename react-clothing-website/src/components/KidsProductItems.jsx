import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";
import css from "../components/Men.module.css";
import { wishlistAction } from "../store/wishlistSlice";

const KidsProductItems = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist);

  const elementFound = cartItems.indexOf(products.id) >= 0;
  const wishlistElementFound = wishlistItems.indexOf(products.id) >= 0;

  const handelAddToBag = () => {
    dispatch(cartAction.addToCart(products.id));
  };

  const handelAddToWishlist = () => {
    dispatch(wishlistAction.addToWishlist(products.id));
  };

  const handelRemove = () => {
    dispatch(cartAction.removeFromCart(products.id));
  };

  const handelRemoveWishlist = () => {
    dispatch(wishlistAction.removeFromWishlist(products.id));
  };

  return (
    <>
      <div className={css.productcontainer}>
        <div className={css.productdetails}>
          <img
            className={css.productimage}
            src={products.image}
            alt="product"
          />
          {wishlistElementFound ? (
            <a onClick={handelRemoveWishlist}>
              {" "}
              <span className={css.wishlist}>
                <FaHeart size={25} color="red" />{" "}
              </span>
            </a>
          ) : (
            <a onClick={handelAddToWishlist}>
              {" "}
              <span className={css.wishlist}>
                <FaHeart size={25} />{" "}
              </span>
            </a>
          )}

          <p className={css.product_brand}>{products.item_brand}</p>
          <p className={css.product_details}>{products.item_detail}</p>

          <div className={css.price_check}>
            <span className={css.productprice}>₹{products.price}</span>
            <span className={css.productOldPrice}>₹{products.oldPrice}</span>
            <span className={css.discount}> {products.discount}%</span>
          </div>

          <p>
            {elementFound ? (
              <button
                type="button"
                id="Removebtn"
                className={`btn btn-outline-danger ${css.Removebtn}`}
                onClick={handelRemove}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                type="button"
                id="Addbtn"
                className={`btn btn-outline-success ${css.Addbtn}`}
                onClick={handelAddToBag}
              >
                Add to Cart
              </button>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default KidsProductItems;
