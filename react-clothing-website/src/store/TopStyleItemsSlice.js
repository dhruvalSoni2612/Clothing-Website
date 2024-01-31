import {createSlice} from "@reduxjs/toolkit";

const TopStyleItemsSlice = createSlice({
  name: "topStyle",
  initialState: [{
          id: '001',
          image: 'images/style1.avif',
      },
      {
          id: '002',
          image: 'images/style2.avif',
      },
      {
          id: '003',
          image: 'images/style3.avif',
      },
      {
          id: '004',
          image: 'images/style4.avif',
      }],
  reducers: {
    addInitialItems: (store,action) =>{
      return store;
    }
  }
})

export const TopstyleAction = TopStyleItemsSlice.actions;
export default TopStyleItemsSlice;