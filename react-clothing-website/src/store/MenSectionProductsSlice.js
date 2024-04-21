import { createSlice } from "@reduxjs/toolkit";

const MenSectionProductsSlice = createSlice({
  name: "MenSectionProducts",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      return action.payload;
    },
  },
});

export const MenSectionProductsAction = MenSectionProductsSlice.actions;
export default MenSectionProductsSlice;
