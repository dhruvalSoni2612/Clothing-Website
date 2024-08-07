import { createSlice } from "@reduxjs/toolkit";

const WomenSectionProductsSlice = createSlice({
  name: "WomenSectionProducts",
  initialState: [
    {
      id: "1",
      image: "../images/women1.avif",
      item_brand: "CHHABRA",
      item_detail: "Floral Print Dress",
      price: 2132,
      oldPrice: 5199,
      discount: 59,
    },
    {
      id: "2",
      image: "../images/women2.avif",
      item_brand: "FASHOR",
      item_detail: "Sequin Gown",
      price: 3998,
      oldPrice: 9995,
      discount: 60,
    },
    {
      id: "3",
      image: "../images/women3.avif",
      item_brand: "KAMI KUBA",
      item_detail: "White Flared Tunic",
      price: 600,
      oldPrice: 1999,
      discount: 70,
    },
    {
      id: "4",
      image: "../images/women4.avif",
      item_brand: "YOUSTA",
      item_detail: "Regular Fit Wrap Top",
      price: 506,
      oldPrice: 2199,
      discount: 77,
    },
    {
      id: "5",
      image: "../images/women5.avif",
      item_brand: "GLORYANCE",
      item_detail: "Omber-Dyed Georgette Saree ",
      price: 896,
      oldPrice: 2799,
      discount: 68,
    },
    {
      id: "6",
      image: "../images/women6.avif",
      item_brand: "SWADESI STUFF",
      item_detail: "Saree With Contrast Border",
      price: 1050,
      oldPrice: 2999,
      discount: 65,
    },
    {
      id: "7",
      image: "../images/women7.avif",
      item_brand: "MISS CHASE",
      item_detail: "WIDE LEG Pants",
      price: 2000,
      oldPrice: 3999,
      discount: 50,
    },
    {
      id: "8",
      image: "../images/women8.avif",
      item_brand: "AG",
      item_detail: "Floral Print",
      price: 396,
      oldPrice: 1130,
      discount: 65,
    },
    {
      id: "9",
      image: "../images/women9.avif",
      item_brand: "YOUSTA",
      item_detail: "Floral Print A-Line Skort",
      price: 6199,
      oldPrice: 12398,
      discount: 50,
    },
    {
      id: "10",
      image: "../images/women10.avif",
      item_brand: "TAJORI",
      item_detail: "Printed Flared Skirt",
      price: 1333,
      oldPrice: 4299,
      discount: 69,
    },
    {
      id: "11",
      image: "../images/women11.avif",
      item_brand: "POPWINGS",
      item_detail: "V-Neck Bodycon Dress",
      price: 2099,
      oldPrice: 3499,
      discount: 40,
    },
    {
      id: "12",
      image: "../images/women12.avif",
      item_brand: "DAEVISH",
      item_detail: "Leaf Print Flare Dress",
      price: 675,
      oldPrice: 2699,
      discount: 75,
    },
  ],
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const WomenSectionProductsAction = WomenSectionProductsSlice.actions;
export default WomenSectionProductsSlice;
