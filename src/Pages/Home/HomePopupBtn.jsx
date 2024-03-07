import { MainPopup , MainContentWrapper, MainPopupWrap} from './HomePopupStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaPlus, FaShare } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { changecommnet, changeFollow, changeLikes } from '../../store/modules/PopupHomeSlice';
import { FaCheck } from "react-icons/fa6";
import { CareerConWrap } from '../Career/CareerConStyle';
import { IoShareSocial } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import PopupShare from '../Popup/PopupShare';
const HomePopupBtn = ({move, item }) => {
    const { isliked, isfollow, likedPortf, followed  } = useSelector( state => state.popupHome)
    const { authed } = useSelector( state => state.auth)
    const { gallery2 } = useSelector( state => state.galleryR )
    const dispatch = useDispatch()
    const {id,likes} = item
    const [cnt, setCnt] = useState(likes)
    const [isshare , setIsShare] = useState(false)
    
    const newlike = likedPortf.find(port => port.id  === id)
    const newFollow = followed.find(port => port.id  === id)
    const onClickLike = (item)=>{
        dispatch(changeLikes(item))
        if(isliked) {
            setCnt(cnt+1)
        }
    }
    const ontop =()=>{
        window.scrollTo(0, 0);
    }
    const onLogin =()=>{
        if(!authed){
            navigate('/login')
        }

    }
    const openShare =()=>{
       setIsShare(true)
    }

    const navigate = useNavigate()
    return (
        
        <div className="MainPopupBtnWrap">
            <p>
                {
                    id > gallery2.length-1 ? <img src={ gallery2[id-gallery2.length].urls.regular } alt="portpolio image"/> : <img src={ gallery2[id].urls.regular } alt="portpolio image"/>
                }
                <span>프로필</span>
            </p>
            <p>
                <button onClick={()=>dispatch(changecommnet())}> <FaCommentAlt /> </button>
                <span>댓글</span>
            </p>

            <p className='likes' onClick={()=>onClickLike(item)} >
                <button  className={ newlike ? "on" : ""}><FaHeart /></button>
                <span>좋아요</span>
            </p>
            
            <p className='collection'>
                <button onClick={()=>dispatch(changeFollow(item))}>   {
                    newFollow ? <FaCheck />  : <FaPlus /> 
                 }  </button>
                <span>팔로우</span>
            </p>

            <p className='collection'>
                <button onClick={openShare} >
                    {
                        isshare && <PopupShare setIsShare={setIsShare} item={item} />
                    } 
                <FaShare /></button>
                <span>공유하기</span>
            </p>

           
        </div>
     
    );
};

export default HomePopupBtn;