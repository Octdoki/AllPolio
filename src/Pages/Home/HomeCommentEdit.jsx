import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addComment, changeEdit, edit, update } from '../../store/modules/PopupHomeSlice';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { IoEyeSharp,  IoTrashOutline } from "react-icons/io5";


const HomeCommentEdit = () => {
    const {current} = useSelector(state => state.popupHome)
    const [user, setUser] = useState(current)
    const { comment , date } = user
    const [now, setNow] = useState(new Date())
    const dispatch =useDispatch()


    const changeInput=(e)=>{
        const {name, value} =e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const onSubmit = e=>{
        e.preventDefault()
        if(comment === current.comment){
            console.log(e.target.value)
            alert("수정된 내용이 없습니다")
            return
        }else{   console.log(comment)

            user.date =`${now.getFullYear()}-${now.getMonth()+1} - ${now.getDate()}`
            dispatch(update(user))
            setUser({
                comment : ''
            })
            dispatch(changeEdit())
        }

   
    }
    return (
        <div className='LeaveCommentWrap'>
            <form className="LeaveComment" onSubmit={onSubmit}>
                <button type='button' className='close' ><IoCloseOutline /></button>
                <p>
                    <input type="text" name='comment' value={comment} onChange={changeInput} autoComplete='off'/>
                    <button type='submit'>댓글 남기기</button>
                </p>
            </form>
            <div className='ShowCommentWrap' >
                {/* {
                    comments.map(item => <div className="ShowComment" >
                    
                            <p>
                    <img src="https://cdn-bastani.stunning.kr/prod/portfolios/285fae5b-910d-4e22-9885-58ff63ff8466/contents/aRyDrGjGJwbouzv8.1.jpg" alt="" />
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
                */}

            </div>
        </div>
    );
};

export default HomeCommentEdit;