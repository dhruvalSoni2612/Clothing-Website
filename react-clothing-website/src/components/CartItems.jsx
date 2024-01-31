import { MdDelete } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";
import css from "../components/Cart.module.css";
import { wishlistAction } from "../store/wishlistSlice";



const CartItems = ({item}) =>{

const dispatch = useDispatch();

const handelRemoveItems = () =>{
    dispatch(cartAction.removeFromCart(item.id));
}
const handelAddToWishlist = () =>{
    dispatch(wishlistAction.addToWishlist(item.id));
    dispatch(cartAction.removeFromCart(item.id));
  }

  return <div className={css.cart_item_container}>
  <div className={css.left_side}>
  <img className={css.item_image} src={item.image} alt="product"/>
  </div>
  <div className={css.right_side}>
  <p className={css.product_name}>{item.item_brand} </p>
  <p className={css.product_detail}>{item.item_detail} </p>

  <p> <span className={css.product_price}>Current Price:</span> <span>₹{item.price}</span></p>
  <p> <span className={css.old_Price}>Old Price:</span> <span className={css.productOldPrice}>₹{item.oldPrice}</span></p>
  <p> <span className={css.product_discount}>Discount:</span> <span className={css.discount}>{item.discount}%</span></p>

  <div className={css.action}>
      <a onClick ={handelRemoveItems} >
      <div className={css.remove}>
          <span className={css.remove_icon}>
          <MdDelete />
          </span>
          <div className={css.remove_text}>Remove</div>
      </div>
      </a>
      <span>|</span>
      <a onClick={handelAddToWishlist}>
      <div className={css.wishlist_cart}>
          <span className={css.wishlist_icon}>
          <TbHeartPlus />
          </span>
          <div className={css.wishlist_text}> Move to Wishlist</div>
      </div>
      </a>
  </div>
  </div>
</div>
}
export default CartItems;