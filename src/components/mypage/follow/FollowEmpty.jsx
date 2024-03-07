import { CgTrashEmpty } from "react-icons/cg";
import { FollowEmptyWrap } from "./FollowStyle";

const FollowEmpty = () => {
    return (
        <FollowEmptyWrap>
            <div className='empty'>
                <strong><i><CgTrashEmpty /></i></strong>
                <span>팔로우한 목록이 없습니다.</span>
            </div>
        </FollowEmptyWrap>
    );
};

export default FollowEmpty;