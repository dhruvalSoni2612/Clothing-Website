import {createSlice} from "@reduxjs/toolkit";

const celebStyleItemsSlice = createSlice({
  name: "celebStyle",
  initialState: [{
          id: '001',
          image: 'images/celeb1.jpg',
      },
      {
              id: '002',
              image: 'images/celeb2.jpg',
          },
          {
              id: '003',
              image: 'images/celeb3.jpg',
          },
          {
              id: '004',
              image: 'images/celeb4.jpg',
          }],
  reducers: {
    addInitialItems: (store,action) =>{
      return store;
    }
  }
})

export const celebStyleAction = celebStyleItemsSlice.actions;
export default celebStyleItemsSlice;