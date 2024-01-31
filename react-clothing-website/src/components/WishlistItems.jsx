import css from "./WishlistItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction } from "../store/wishlistSlice";
import { FaHeart} from "react-icons/fa";
import { cartAction } from "../store/cartSlice";


const WishlistItems = ({item}) =>{

  const dispatch = useDispatch();
  const  cartItems = useSelector((state) => state.cart);
  const elementFound = cartItems.indexOf(item.id) >= 0;



  const handelRemoveItems = () =>{
      dispatch(wishlistAction.removeFromWishlist(item.id));
  }

  const handelAddToBag = () =>{
    dispatch(cartAction.addToCart(item.id))
  }
  const handelRemove = () => {
    dispatch(cartAction.removeFromCart(item.id))
}

  return <>	
  <div className={css.productcontainer}>
  <div className={css.productdetails}>
  <img className={css.productimage} src={item.image} alt="product"/>
  <a onClick={handelRemoveItems}><span className={css.wishlist}>
  <FaHeart size={25} color="red"/>  
      </span></a>
  <p className={css.product_brand}>{item.item_brand}</p>
  <p className={css.product_details}>{item.item_detail}</p>

  <div className={css.price_check}>
  <span className={css.productprice}>₹{item.price}</span>
  <span className={css.productOldPrice}>₹{item.oldPrice}</span>
  <span className={css.discount}> {item.discount}%</span>
  </div>

<p>
{elementFound ? <button type="button" id= "Removebtn" className={`btn btn-outline-danger ${css.Removebtn}`} onClick={handelRemove}>Remove from Cart</button> : <button type="button" id="Addbtn" className={`btn btn-outline-success ${css.Addbtn}`} onClick={handelAddToBag}>Add to Cart</button>}
  </p>
  </div>
  </div>
  </>
}
export default WishlistItems;