import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState:[],
  reducers:{
    addToWishlist:(state,action)=>{
      state.push(action.payload)
    },
    removeFromWishlist:(state,action) =>{
      return state.filter((item)=> item !== action.payload)
    }
  }
});

export const wishlistAction = wishlistSlice.actions;
export default wishlistSlice;