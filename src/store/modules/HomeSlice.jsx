import { createSlice } from '@reduxjs/toolkit'
import {portfolioData} from '../../assets/api/portfolioData'
import {categoryData} from '../../assets/api/categoryData'
import { careerData } from '../../assets/api/careerData'
const initialState = { 
  portfolioData: portfolioData,
  sortData : portfolioData,
  categoryData : categoryData,
  careerData : careerData,
  location: '',
}
export const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    onCate: (state, action) => {
      if(action.payload === '전체'){
        state.portfolioData = portfolioData
      }else {
        state.portfolioData = portfolioData.filter(item => item.category === action.payload)
      }
    },
    searchMain: (state, action) => {
      state.portfolioData = portfolioData.filter(item=> item.title.toLowerCase().includes( action.payload.toLowerCase() ))
      // state.portfolioData = portfolioData.filter(item=> item.name.toLowerCase().includes( action.payload.toLowerCase() ))
    },
    changeLoc: (state, action) => { // 현재위치한 페이지 
      state.location = action.payload
    },
    sortCart: (state, action) => {
        state.sortData = state.sortData.sort( (a,b) => a[state.sortData.date] > b[state.sortData.date] ? 1: -1 )
    },
  }
})

export const { onCate, searchMain , changeLoc, sortCart} = HomeSlice.actions
export default HomeSlice.reducer