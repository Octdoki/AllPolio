import React from 'react';
import { useSelector } from 'react-redux';
import FollowItem from './FollowItem';
import FollowEmpty from './FollowEmpty';
import { FollowListWrap } from './FollowStyle';

const FollowList = () => {
    const {followed, isfollowed} = useSelector(state => state.popupHome)
    return (
        <FollowListWrap>
            {
                followed.length > 0 ? followed.map(item => <FollowItem key={item.id} item={item} />) : <FollowEmpty />
            }

        </FollowListWrap>
    );
};

export default FollowList;