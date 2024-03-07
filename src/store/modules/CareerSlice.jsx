import { createSlice } from '@reduxjs/toolkit'
import {careerData} from '../../assets/api/careerData'
import {careerCateData} from '../../assets/api/careerCateData'
const initialState = { 
    careerData: careerData,
    careerCateData: careerCateData,
    TabData : [],
    filterData : careerData // 추후 보완할 떄 필터된 데이터 들어갈 부분
}
export const CareerSlice = createSlice({
    name: 'Career',
    initialState,
   
    reducers: {
      onTab: (state, action) => {
        state.careerData = careerData.filter(item => item.tabCate === action.payload)
        if(action.payload === '전체'){
         state.careerData = careerData
        }
      },
      searchCareer: (state, action) => {
        state.careerData = careerData.filter(item=> item.title.toLowerCase().includes( action.payload.toLowerCase() ))
      },
      popupSort: (state, action) => {
        if(action.payload.id === 1){
          state.careerData.sort((a,b) => a[action.payload.sortBy]>b[action.payload.sortBy] ? 1 : -1)
        }
        if(action.payload.id === 2){
          console.log(action.payload.sortBy)
          state.careerData.sort((a,b) => a[action.payload.sortBy]>b[action.payload.sortBy] ? 1 : -1).reverse()
        }
        if(action.payload.id !== 3){
          state.careerData = state.careerData
        }
      },

      popupFilter2 : (state, action) =>{
        //팝업 카테고리.. 수정 필요
        state.careerData = careerData.filter(item => item.popCate === action.payload)
        if(action.payload === '' ){
          state.careerData = state.careerData
        }
      }
    }
  })
  
  export const { onTab , searchCareer ,popupSort, popupFilter2} = CareerSlice.actions
  export default CareerSlice.reducer