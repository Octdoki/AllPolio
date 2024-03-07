import React from 'react';
import { addComment, changecommnet, changeEdit, deleteComment, edit } from '../../store/modules/PopupHomeSlice';
import { MainPopup , MainContentWrapper, MainPopupWrap} from './HomePopupStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaFolder, FaShare } from "react-icons/fa";
import { IoEyeSharp,  IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const HomeCommentAdd = () => {
    const {comments } = useSelector( state => state.popupHome)
    const [user, setUser] = useState({  comment : '' , date:'' })
    const [now, setNow] = useState(new Date())
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const changeInput = e=>{
        const {value, name} = e.target
        setUser({
            ...user,
            [name] : value
        })
        console.log(user)
    }
    const { comment , date } = user
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!comment){
            alert('댓글을 입력해주세요')
            return
        }
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} `
        dispatch(addComment(user))
        setUser({  comment : ''})

    }
    const onEdit = (id)=>{
        const newItem = comments.find( item => item.id === id )
        dispatch(edit(newItem))
        dispatch(changeEdit())
        // navigate(`/popupHome/commentEdit`)
      }
    return (
        <div className='LeaveCommentWrap'>
            <form className="LeaveComment" onSubmit={onSubmit}>
                <button type='button'onClick={()=>dispatch(changecommnet())} ><IoCloseOutline /></button>
                <p>
                    <input type="text" name='comment' value={comment} onChange={changeInput} />
                    <button type='submit'>댓글 남기기</button>
                </p>
            </form>
            <div className='ShowCommentWrap' >
                {
                    comments.map(item => 
                    <div className="ShowComment" key={item.id} >
                        <p>
                            <img src="./images/portImg/proimg37.png" alt="" />
                        </p>
                        <div className='commentWrap'>
                            <div className='comment'>
                                <strong>닉네임<span> {item.date} </span> </strong>
                                <p>{item.comment} </p>
                            </div>
                            <div className='commentBtn'>
                                <button onClick={()=>dispatch(deleteComment(item.id))}><IoTrashOutline /></button>
                                <button onClick={()=>onEdit(item.id) } ><MdOutlineEdit /></button>
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default HomeCommentAdd;