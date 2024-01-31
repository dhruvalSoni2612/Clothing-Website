import {createSlice} from "@reduxjs/toolkit";


const MenSectionProductsSlice = createSlice({
  name:  "MenSectionProducts",
  initialState:[
    {
        id: '001',
        image: '../images/men1.avif',
        item_brand: 'NETPLAY',
        item_detail: 'Checked Slim Fit Blazer',
        price: 1440,
        oldPrice: 2999,
        discount: 52,
  
    },
    {
        id: '002',
        image: '../images/men2.avif',
        item_brand: 'HIGH STAR',
        item_detail: 'Men Regular Fit Jacket',
        price: 1036,
        oldPrice: 2799,
        discount: 63,
  
    },
    {
        id: '003',
        image: '../images/men3.avif',
        item_brand: 'CAMPUS SUTRA',
        item_detail: 'Zip-Front Bomber Jacket',
        price: 1680,
        oldPrice: 3499,
        discount: 52,
  
    },
    {
        id: '004',
        image: '../images/men4.avif',
        item_brand: 'iVOC',
        item_detail: 'Flat-Front Cargo Pants',
        price: 1440,
        oldPrice: 3199,
        discount: 55,
  
    },
    {
        id: '005',
        image: '../images/men5.avif',
        item_brand: 'CAMPUS SUTRA',
        item_detail: 'Blue Jeans Pant',
        price: 1500,
        oldPrice: 2305,
        discount: 30,
  
    },
    {
        id: '006',
        image: '../images/men6.webp',
        item_brand: 'DNMX',
        item_detail: 'All-Over Print Slim Fit Shorts',
        price: 300,
        oldPrice: 999,
        discount: 70,
  
    },
    {
        id: '007',
        image: '../images/men7.webp',
        item_brand: 'SUPERDRY',
        item_detail: 'Loopback Regular Fit Pants',
        price: 2000,
        oldPrice: 3999,
        discount: 50,
    },
    {
        id: '008',
        image: '../images/men8.avif',
        item_brand: 'KISAH',
        item_detail: 'Floral Print Sherwani Set',
        price: 6155,
        oldPrice: 17097,
        discount: 64,
  
    },
    {
        id: '009',
        image: '../images/men9.avif',
        item_brand: 'KISAH',
        item_detail: 'Men Regular Fit Sherwani',
        price: 6199,
        oldPrice: 12398,
        discount: 50,
  
    },
    {
        id: '10',
        image: '../images/men10.avif',
        item_brand: 'JOMPERS',
        item_detail: 'Embroidered Long Kurta',
        price: 1333,
        oldPrice: 4299,
        discount: 69,
  
    },
    {
        id: '11',
        image: '../images/men11.avif',
        item_brand: 'GAP',
        item_detail: 'Men Logo Print Sweatshirt',
        price: 2099,
        oldPrice: 3499,
        discount: 40,
  
    },
    {
        id: '12',
        image: '../images/men12.avif',
        item_brand: 'GAP',
        item_detail: 'Men Ribbed Shawl Cardigan',
        price: 4499,
        oldPrice: 4499,
        discount: 0,
    }
  ],
  reducers:{
    addInitialItems: (store,action) =>{
    return store;
  }
}
}) 

export const MenSectionProductsAction = MenSectionProductsSlice.actions;
export default MenSectionProductsSlice;