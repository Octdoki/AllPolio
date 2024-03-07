import React from 'react';
import FollowEmpty from '../../../components/mypage/follow/FollowEmpty';
import FollowList from '../../../components/mypage/follow/FollowList';
import { FollowWrap } from './FollowWrapStyle';

const Follow = () => {
    return (
        <FollowWrap>
            <h2>팔로우된 사람들</h2>
            <FollowList />
        </FollowWrap>
    );
};

export default Follow;