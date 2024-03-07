
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageData : [], //데이터 들어갈곳
    currPage: 1, //현재페이지
    totalPage: 1, //총 갯수 바뀔거
    postsPerPage: 8,  //한페이지당 10개씩 나오는 갯수 고정일경우
}
export const paginationSlice = createSlice({ 
  name: 'pagination',
  initialState,
  reducers: {
    prevPage: (state,action) => { //페이지증가감소
        if(state.currPage ===1) {
            state.currPage = 1
        }else {
            state.currPage--
        }
    },
    nextPage: (state, action) => {
        if(state.currPage === state.totalPage ) {
            state.currPage = state.totalPage
        }else {
            state.currPage++
        }
    },
    currentPage: (state, action) => {//현재페이지 해당번호 눌렀을때
        state.currPage = action.payload
    },

    addData: (state, action) => { //페이지에 해당하는 갯수는 데이터갯수가 다다르니까 
        state.pageData = action.payload
    },
    
    totalData: (state, action) => { //페이지 갯수 - 총갯수도 다름 데이터 변경되면 총갯수가 바뀔것이므로 , 소수점처리 
        state.currPage = 1,
        state.totalPage = Math.ceil(state.pageData.length / state.postsPerPage)
    }
  
  },
})
 
export const { prevPage, nextPage, currentPage, addData , totalData } = paginationSlice.actions

export default paginationSlice.reducer