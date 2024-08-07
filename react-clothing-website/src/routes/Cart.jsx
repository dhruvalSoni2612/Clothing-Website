import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import css from "../components/Cart.module.css";
import EmptyMsg from "../components/EmptyMsg";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const Menproducts = useSelector((state) => state.MenSectionProducts);
  const Womenproducts = useSelector((state) => state.WomenSectionProducts);
  const Kidsproducts = useSelector((state) => state.KidsSectionProducts);

  const menCartItems = Menproducts.filter((item) =>
    cartItems.includes(item.id)
  );
  const womenCartItems = Womenproducts.filter((item) =>
    cartItems.includes(item.id)
  );
  const kidsCartItems = Kidsproducts.filter((item) =>
    cartItems.includes(item.id)
  );

  const finalItems = [...menCartItems, ...womenCartItems, ...kidsCartItems];

  return (
    <section className={css.cart_page}>
      <div className={css.cart_items_container}>
        {finalItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </div>
      {finalItems.length == 0 ? <EmptyMsg /> : <CartSummary />}
    </section>
  );
};
export default Cart;
