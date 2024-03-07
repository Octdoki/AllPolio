import React from 'react';
import LikeItem from './LikeItem';
import { useSelector } from 'react-redux';
import LikeEmpty from './LikeEmpty';
import { LikeListWrap } from './LikeStyle';

const LikeList = () => {
    const {likedPortf} = useSelector(state => state.popupHome)
    return (
        <LikeListWrap>
            {
                likedPortf.length > 0 ? likedPortf.map(item => <LikeItem key={item.id} item={item} />) : <LikeEmpty />
            }
            
        </LikeListWrap>
    );
};

export default LikeList;