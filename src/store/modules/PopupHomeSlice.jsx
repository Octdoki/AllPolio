import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isliked : false,
    isfollow : false,
    isComments : false,
    comments : [
      {id: 1, comment : '최고의 프로젝트입니다.' , date : '2023-07-01'},
    ],
    current : {},
    ifEdit : false,
    likedPortf : [] ,  //좋아요 클릭 한 포트폴리오
    followed: [] //팔로우 클릭 한 포트폴리오
}
let no = initialState.comments.length + 1 
export const popupHomeSlice = createSlice({
  name: 'popupHome',
  initialState,
  reducers: {
    changeLikes: (state, action) => {
        state.isliked = !(state.isliked)
        if(state.isliked){
          state.likedPortf.push(action.payload)
        }else{
          state.likedPortf = state.likedPortf.filter(item => item.id !== action.payload.id)
        }
    },
    changeFollow: (state, action) => {
        state.isfollow = !(state.isfollow)
        if(state.isfollow){
          state.followed.push(action.payload)
        }else{
          state.followed = state.followed.filter(item => item.id !== action.payload.id)
        }
    },
    changecommnet : (state, action) =>{
      state.isComments = !(state.isComments)

    },
    changeEdit : (state, action) =>{
      state.ifEdit= !(state.ifEdit)

    },
    addComment : (state, action) =>{
      state.comments.push({ ...action.payload })
      console.log(state.comments)
    }, 
    deleteComment : (state, action) =>{
      state.comments = state.comments.filter(item => item.id !== action.payload)
    },
    update: (state, action) => {
      state.comments =state.comments.map(item => item.id === action.payload.id ? action.payload : item )
     },
     edit: (state, action) => {
       state.current = action.payload
     },
    
  },
})
// Action creators are generated for each case reducer function
export const {changeEdit ,changeLikes ,   changeFollow, changecommnet,  addComment, deleteComment, update, edit } =  popupHomeSlice.actions

export default popupHomeSlice.reducer