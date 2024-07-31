import { configureStore } from "@reduxjs/toolkit";
import TrendZoneItemsSlice from "./TrendZoneItemsSlice";
import NewArrivalItemsSlice from "./NewArrivalItemsSlice";
import MenSectionProductsSlice from "./MenSectionProductsSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import celebStyleItemsSlice from "./celebStyleItemsSlice";
import TopStyleItemsSlice from "./TopStyleItemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import WomenSectionProductsSlice from "./WomenSectionProductsSlice";

const trendyClothingStore = configureStore({
  reducer: {
    TrendZoneItems: TrendZoneItemsSlice.reducer,
    topStyle: TopStyleItemsSlice.reducer,
    NewArrivalItems: NewArrivalItemsSlice.reducer,
    MenSectionProducts: MenSectionProductsSlice.reducer,
    WomenSectionProducts: WomenSectionProductsSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    celebStyle: celebStyleItemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});
export default trendyClothingStore;
