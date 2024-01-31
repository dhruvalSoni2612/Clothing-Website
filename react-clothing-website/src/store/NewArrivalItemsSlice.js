import {createSlice} from "@reduxjs/toolkit";


const NewArrivalItemsSlice = createSlice({
  name: "NewArrivalItems",
  initialState: [{
          id: '001',
          image: 'images/newArrival1.avif',
      },
      {
              id: '002',
              image: 'images/newArrival2.avif',
          },
          {
              id: '003',
              image: 'images/newArrival3.avif',
          },
          {
              id: '004',
              image: 'images/newArrival4.avif',
          }],
  reducers: {
    addInitialItems: (store,action) =>{
      return store;
    }
  }
})

export const NewArrivalItemsAction = NewArrivalItemsSlice.actions;
export default NewArrivalItemsSlice;