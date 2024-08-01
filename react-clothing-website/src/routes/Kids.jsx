import { useSelector } from "react-redux";
import css from "../components/Men.module.css";
import KidsProductItems from "../components/WomenProductItems";

const Kids = () => {
  const KidsProducts = useSelector((store) => store.KidsSectionProducts);

  return (
    <section className={css.products}>
      <div className={css.productscontainer}>
        {KidsProducts.map((products) => (
          <KidsProductItems key={products.id} products={products} />
        ))}
      </div>
    </section>
  );
};
export default Kids;
