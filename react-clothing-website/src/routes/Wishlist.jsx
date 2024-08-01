import { useSelector } from "react-redux";
import WishlistItems from "../components/WishlistItems";
import css from "../components/WishlistItems.module.css";
import { WishlistEmpty } from "../components/EmptyMsg";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const MenProduct = useSelector((state) => state.MenSectionProducts);
  const WomenProduct = useSelector((state) => state.WomenSectionProducts);
  const KidsProduct = useSelector((state) => state.KidsSectionProducts);

  const menWishlistItems = MenProduct.filter((item) =>
    wishlistItems.includes(item.id)
  );
  const womenWishlistItems = WomenProduct.filter((item) =>
    wishlistItems.includes(item.id)
  );
  const kidsWishlistItems = KidsProduct.filter((item) =>
    wishlistItems.includes(item.id)
  );

  const finalItems = [
    ...menWishlistItems,
    ...womenWishlistItems,
    ...kidsWishlistItems,
  ];

  // const finalItems = MenProduct.filter(item => {
  //   const itemIndex = wishlistItems.indexOf(item.id);
  //   return itemIndex >= 0;
  // })

  return (
    <>
      <section className={css.products}>
        <div className={css.productscontainer}>
          {finalItems.length == 0 ? (
            <WishlistEmpty />
          ) : (
            finalItems.map((item) => (
              <WishlistItems key={item.id} item={item}>
                {" "}
              </WishlistItems>
            ))
          )}
        </div>
      </section>
    </>
  );
};
export default Wishlist;
