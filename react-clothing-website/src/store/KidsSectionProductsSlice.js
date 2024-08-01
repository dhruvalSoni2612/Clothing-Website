import { createSlice } from "@reduxjs/toolkit";

const KidsSectionProductsSlice = createSlice({
  name: "KidsSectionProducts",
  initialState: [
    {
      id: "111",
      image: "../images/kids1.avif",
      item_brand: "GAS",
      item_detail: "Checked Cotton Shiret",
      price: 850,
      oldPrice: 1699,
      discount: 50,
    },
    {
      id: "112",
      image: "../images/kids2.avif",
      item_brand: "GAP Kids",
      item_detail: "Short-Sleeves Shirt",
      price: 750,
      oldPrice: 1499,
      discount: 50,
    },
    {
      id: "113",
      image: "../images/kids3.avif",
      item_brand: "U.S. POLO",
      item_detail: "Graphic Print Shirt",
      price: 1439,
      oldPrice: 1799,
      discount: 20,
    },
    {
      id: "114",
      image: "../images/kids4.avif",
      item_brand: "FABRAM",
      item_detail: "Denim Shirt",
      price: 600,
      oldPrice: 1999,
      discount: 70,
    },
    {
      id: "115",
      image: "../images/kids5.avif",
      item_brand: "PSPEACHES",
      item_detail: "Floral Print Dress",
      price: 896,
      oldPrice: 2799,
      discount: 68,
    },
    {
      id: "116",
      image: "../images/kids6.avif",
      item_brand: "AVSAR TRENDz",
      item_detail: "Round-Neck A-Line Dress",
      price: 723,
      oldPrice: 1644,
      discount: 56,
    },
    {
      id: "117",
      image: "../images/kids7.avif",
      item_brand: "MISS CHASE",
      item_detail: "Floral Print Dress",
      price: 439,
      oldPrice: 799,
      discount: 45,
    },
    {
      id: "118",
      image: "../images/kids8.avif",
      item_brand: "JACK & JONES",
      item_detail: "Relaxed Fit T-Shirt",
      price: 396,
      oldPrice: 1130,
      discount: 65,
    },
    {
      id: "119",
      image: "../images/kids9.jpg",
      item_brand: "NUSLY",
      item_detail: "Graphic Print T-Shirt",
      price: 360,
      oldPrice: 899,
      discount: 60,
    },
  ],
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const KidsSectionProductsAction = KidsSectionProductsSlice.actions;
export default KidsSectionProductsSlice;
