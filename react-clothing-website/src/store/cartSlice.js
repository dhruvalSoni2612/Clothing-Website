import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers:{
    addToCart:(state,action)=>{
      state.push(action.payload)
    },
    removeFromCart:(state,action) =>{
      return state.filter((item)=> item !== action.payload)
    }
  }
});

export const cartAction = cartSlice.actions;
export default cartSlice;