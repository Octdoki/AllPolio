import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFollow } from '../../../store/modules/PopupHomeSlice';

const FollowItem = ({item}) => {
    const { id, name, title, likes, category,tumImg,proImg} = item
    const {comments , isfollow } = useSelector( state => state.popupHome)
    const {  gallery2 } = useSelector( state => state.galleryR )
    const dispatch = useDispatch()
    return (
        <>
            {isfollow ? <li>
                {
                    id > gallery2.length-1 ? <img src={ gallery2[id-gallery2.length].urls.regular } alt="portpolio image"/> : <img src={ gallery2[id].urls.regular } alt="portpolio image"/>
                }
                <strong>{name}</strong>
                <button onClick={()=>dispatch(changeFollow(item))}>팔로잉</button>
            </li>: null} 
            
        </>
    );
};

export default FollowItem;