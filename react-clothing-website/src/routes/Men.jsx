import { useSelector } from "react-redux";
import MenProductItems from "../components/MenProductItems";
import css from "../components/Men.module.css";

const Men = () => {
  const MenProducts = useSelector((store) => store.MenSectionProducts);

  // if (!Array.isArray(MenProducts)) {
  //   return <div>No products available</div>;
  // }

  return (
    <section className={css.products}>
      <div className={css.productscontainer}>
        {MenProducts.length === 0 ? (
          <h3>Server is not Running..., Check Women or Kids Section</h3>
        ) : (
          MenProducts.map((products) => (
            <MenProductItems key={products.id} products={products} />
          ))
        )}
      </div>
    </section>
  );
};
export default Men;
