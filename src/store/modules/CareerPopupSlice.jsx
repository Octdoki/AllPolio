
import { createSlice } from '@reduxjs/toolkit'
import {careerData} from '../../assets/api/careerData'
import {careerCateData} from '../../assets/api/careerCateData'
import {  filter1Data} from '../../assets/api/filter1Data'
import { filter2Data } from '../../assets/api/filter2Data'
const initialState = { 
    careerData: careerData,
    filter1Data : filter1Data,
    filter2Data : filter2Data,
    isopen : false,
   
}
export const CareerPopupSlice = createSlice({
    name: ' CareerPopup',
    initialState,
   
    reducers: {
        toggle : (state, action) =>{
            state.filter1Data =  state.filter1Data.map(( item => item.id === id ? 
                {...item, isClass:true } : {...item, isClass:false } ))
        },
        reset : (state, action) =>{
            state.filter1Data = filter1Data
            state.filter2Data = filter2Data
        }
    }
  })
  
  export const { toggle , reset } =  CareerPopupSlice.actions
  export default CareerPopupSlice.reducer