import { configureStore } from "@reduxjs/toolkit";
import TrendZoneItemsSlice from "./TrendZoneItemsSlice";
import NewArrivalItemsSlice from "./NewArrivalItemsSlice";
import MenSectionProductsSlice from "./MenSectionProductsSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import celebStyleItemsSlice from "./celebStyleItemsSlice";
import TopStyleItemsSlice from "./TopStyleItemsSlice";

const trendyClothingStore = configureStore({
  reducer: {
    TrendZoneItems: TrendZoneItemsSlice.reducer,
    topStyle: TopStyleItemsSlice.reducer,
    NewArrivalItems: NewArrivalItemsSlice.reducer,
    MenSectionProducts: MenSectionProductsSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    celebStyle: celebStyleItemsSlice.reducer,
  },
});
export default trendyClothingStore;
