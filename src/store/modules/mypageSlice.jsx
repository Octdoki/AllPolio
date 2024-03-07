import { createSlice } from '@reduxjs/toolkit';
import { mypageTabMenu } from '../../assets/api/portfolioData';
import { portfolioData } from '../../assets/api/portfolioData';
import { thumbnailImages } from '../../assets/api/portfolioData';

const initialState = {
    mypageTabMenu: mypageTabMenu,
    profileData: localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')) : {id:1, imgurl:'', nickname:'닉네임을 입력하세요',occupation:'직군을 입력하세요',career:'경력을 입력하세요'},
    current: {},
    portfolioData : portfolioData,
    thumbImg : thumbnailImages,
    addData: {},
};
let no = 1
let portfolioid = initialState.portfolioData.length + 1
export const mypageSlice = createSlice({
    name: 'mypage',
    initialState,
    reducers: {
        onSelect : (state, action) => {
            state.technologyData = state.technologyData.map(item => item.id === action.payload ? {...item,isOn:true}:{...item,isOn:false})
        },
        onTab : (state, action) => {
            state.mypageTabMenu = state.mypageTabMenu.map(item => item.id === action.payload ? {...item,isTabOn:true}:{...item,isTabOn:false})
        },
        profileAdd: (state,action) => {
            state.profileData={id:no,...action.payload}
            localStorage.setItem('profileData',JSON.stringify(state.profileData))
        },
        profileUp: (state, action) => {
            state.current = action.payload
            localStorage.setItem('current',JSON.stringify(state.current))
        },
        profileEdit: (state, action) => {
            state.profileData = state.current === action.payload ? item : action.payload
            localStorage.setItem('profileData',JSON.stringify(state.profileData))
        },
        onAdd: (state, action) => {
            state.portfolioData.push({id:portfolioid++,...action.payload})
        },
        onTag: (state, action) => {},
    },
});
export const { onSelect, onTab, profileAdd, profileEdit, profileUp, onAdd,onTag } = mypageSlice.actions;
export default mypageSlice.reducer;