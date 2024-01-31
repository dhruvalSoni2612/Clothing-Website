import { useSelector } from "react-redux"
import css from "../components/Cart.module.css";


const CartSummary = () => {

const cartItems = useSelector(store => store.cart)


  let shipping_fee = 150;
  let totalItem = cartItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  const Menproducts = useSelector(state => state.MenSectionProducts);
    const finalItems = Menproducts.filter(item => {
      const itemIndex = cartItems.indexOf(item.id);
      return itemIndex >= 0;
    })

    finalItems.forEach(cartItem => {
        totalMRP += cartItem.oldPrice;
        totalDiscount += cartItem.oldPrice - cartItem.price; 
      });
  
  let finalPayment =  totalMRP - totalDiscount + shipping_fee;


  return <div className={css.items_summary}>
  <div className={css.heading_text}>ORDER SUMMARY</div>
        <div className={css.total_quantity}>Total Items: {totalItem}</div>
        <div className={css.subtotal}>
    	    <span className={css.text}>Sub Total</span>
            <span className={css.value}>₹{totalMRP}</span>
        </div>
        <div className={css.shipping}>
            <span className={css.text}>Discount</span>
            <span className={css.value}>₹ {totalDiscount}</span>
        </div>
        <div className={css.shipping}>
            <span className={css.text}>Shipping Fee</span>
            <span className={css.value}>₹ {shipping_fee}</span>
        </div>
        <div className={css.total}>
            <span className={css.total_price}>TOTAL(Incl of all Taxes.)</span>
            <span className={css.value}>₹{finalPayment}</span>    
        </div>
        <div>
        <button type="button" className={`btn btn-secondary ${css.placeOrder_btn}`}>Place Order</button>
        </div>
  </div>
}
export default CartSummary;