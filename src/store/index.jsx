import { configureStore } from '@reduxjs/toolkit'
import galleryReducer  from './modules/gallerySlice'
import HomeReducer  from './modules/HomeSlice'
import CareerReducer  from './modules/CareerSlice'
import socialSlice from './modules/socialSlice'
import popupHome from './modules/PopupHomeSlice'
import CareerPopup from './modules/CareerPopupSlice'
import auth from './modules/authSlice'
import mypage from './modules/mypageSlice'
import pagination from './modules/paginationSlice'
export const store = configureStore({
  reducer: {
    galleryR: galleryReducer ,
    HomeR: HomeReducer ,
    CareerR: CareerReducer ,
    socialR : socialSlice,
    popupHome,
    CareerPopup,
    auth,
    mypage,
    pagination,
  },
})