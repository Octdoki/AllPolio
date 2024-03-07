import { createSlice } from "@reduxjs/toolkit";
import { socialData } from "../../assets/api/socialdata";
import { socialCateData } from "../../assets/api/socialCateData";

const initialState = {
    socialData: socialData,
    socialCateData: socialCateData,
    social: [],
    socialInit: socialData,
};

export const socialSlice = createSlice({
    name: "social",
    initialState,
    reducers: {
        onCate: (state, action) => {
            state.socialData = socialData.filter((item) => item.socialCate === action.payload);
            if (action.payload === "전체") {
                state.socialData = socialData;
            }
        },
        searchSocial: (state, action) => {
            state.socialData = socialData.filter( item => item.title.includes(action.payload));
        },
    },
});

export const { onCate, searchSocial } = socialSlice.actions;
export default socialSlice.reducer;
