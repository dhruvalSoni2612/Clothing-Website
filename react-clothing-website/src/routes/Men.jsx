import { useSelector } from "react-redux";
import MenProductItems from "../components/MenProductItems";
import css from "../components/Men.module.css";

const Men = () =>{


  const MenProducts = useSelector(store => store.MenSectionProducts);


  return <section className={css.products}>
  <div className={css.productscontainer}>
    {MenProducts.map(products =>  (<MenProductItems key={products.id} products={products}/>))}
  </div>
</section>
}
export default Men;

