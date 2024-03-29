import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import css from "../components/Cart.module.css";
import EmptyMsg from "../components/EmptyMsg";


const Cart = () =>{

    const cartItems = useSelector(state => state.cart);
    const Menproducts = useSelector(state => state.MenSectionProducts);
    const finalItems = Menproducts.filter(item => {
      const itemIndex = cartItems.indexOf(item.id);
      return itemIndex >= 0;
    })

  return <section className={css.cart_page}>
  <div className={css.cart_items_container}>
    {finalItems.map(item => <CartItems key={item.id} item={item}/>)}
  </div>
  {finalItems.length == 0 ? <EmptyMsg/> : <CartSummary/> }

  


  
</section>
}
export default Cart;