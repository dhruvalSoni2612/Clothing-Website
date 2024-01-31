import {createSlice} from "@reduxjs/toolkit";

const TrendZoneItemsSlice = createSlice({
  name: "trendZoneItems",
  initialState: [{
    id: '001',
    image: 'images/trending1.avif',
},
{
    id: '002',
    image: 'images/trending2.avif',
},
{
    id: '003',
    image: 'images/trending3.avif',
},
{
    id: '004',
    image: 'images/trending4.avif',
}],
  reducers: {
    addInitialItems: (store,action) =>{
      return store;
    }
  }
})

export const TrendZoneItemsAction = TrendZoneItemsSlice.actions;
export default TrendZoneItemsSlice;