import { useSelector } from "react-redux";
import css from "../components/Men.module.css";
import WomenProductItems from "../components/WomenProductItems";

const Women = () => {
  const WomenProducts = useSelector((store) => store.WomenSectionProducts);

  return (
    <section className={css.products}>
      <div className={css.productscontainer}>
        {WomenProducts.map((products) => (
          <WomenProductItems key={products.id} products={products} />
        ))}
      </div>
    </section>
  );
};
export default Women;
