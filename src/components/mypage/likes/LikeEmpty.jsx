import React from 'react';
import { CgTrashEmpty } from "react-icons/cg";
import { LikeEmptyWrap } from './LikeStyle';

const LikeEmpty = () => {
    return (
        <LikeEmptyWrap>
            <strong><i><CgTrashEmpty /></i></strong>
            <span>좋아요한 목록이 없습니다.</span>
        </LikeEmptyWrap>
    );
};

export default LikeEmpty;