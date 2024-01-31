import { useSelector } from "react-redux";
import WishlistItems from "../components/WishlistItems";
import css from "../components/WishlistItems.module.css";
import { WishlistEmpty } from "../components/EmptyMsg";


const Wishlist = () =>{

  const wishlistItems = useSelector(state => state.wishlist);
  const MenProduct = useSelector(state => state.MenSectionProducts);
    const finalItems = MenProduct.filter(item => {
      const itemIndex = wishlistItems.indexOf(item.id);
      return itemIndex >= 0;
      
    })


  return <>
  <section className={css.products}>
  <div className={css.productscontainer}>
    {finalItems.length == 0 ? <WishlistEmpty/> : finalItems.map((item) => (<WishlistItems key={item.id} item ={item} > </WishlistItems>))}
  
  </div>
</section>
  </>
}
export default Wishlist;


