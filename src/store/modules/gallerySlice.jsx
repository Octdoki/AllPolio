import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {portfolioData} from '../../assets/api/portfolioData'
import {categoryData} from '../../assets/api/categoryData'
// const API_KEY =`37747200-fea77082a5216d6903f06adfa`
const API_KEY = `bjhC3SW-EujaVU-KxmcpLwR_9TPmMWtldjGXYgyxw9A`

export const getGallerys1 = createAsyncThunk(
    'main/getGallerys1',
    async(text1) => {
        // const url =`https://pixabay.com/api/?key=${API_KEY}&q=${text1}&image_type=photo`
        const url = `https://api.unsplash.com/search/photos?query=${text1}&client_id=${API_KEY}`
        const res = await axios.get(url)
        return res.data.results
    }
)
export const getGallerys2 = createAsyncThunk(
    'main/getGallerys2',
    async(text2) => {
        // const url =`https://pixabay.com/api/?key=${API_KEY}&q=${text2}&image_type=photo`
        const url = `https://api.unsplash.com/search/photos?query=${text2}&client_id=${API_KEY}`
        const res = await axios.get(url)
        return res.data.results
    }
)
const initialState = {
    gallery1:[],
    gallery2:[],   
    loading: true, 
    loading1: true, 
    state: null , 
    error: null ,
  /*   text1:'coding',
    text2:'person', */
    text1:'programer',
    text2:'person',
    portfolio: portfolioData,
    categoryData: categoryData,
}
const gallerySlice = createSlice({
    name:'gallery',
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder
        .addCase( getGallerys1.pending, (state, action) => {
            state.loading = true 
            state.state = 'loading'
        })
        .addCase( getGallerys1.fulfilled , (state, action) => {
            state.loading = false
            state.state = 'fulfilled',
            state.gallery1 = action.payload
        })
        .addCase( getGallerys1.rejected, (state, action) => {
            state.loading = true 
            state.state = 'rejected'
        })   
        .addCase( getGallerys2.pending, (state, action) => {
            state.loading1 = true 
            state.state = 'loading'
        })
        .addCase( getGallerys2.fulfilled , (state, action) => {
            state.loading1 = false
            state.state = 'fulfilled',
            state.gallery2 = action.payload
        })
        .addCase( getGallerys2.rejected, (state, action) => {
            state.loading1 = true 
            state.state = 'rejected'
        })  
        
    }
})
// export const { check } = gallerySlice.actions
export default gallerySlice.reducer