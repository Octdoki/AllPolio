import { useState } from "react";
import { ProfileWrap } from "./ProfileStyle";
import ProfilePopup from "./ProfilePopup";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logout } from "../../store/modules/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import { profileUp } from '../../store/modules/mypageSlice';
import Withdrawal from "./Withdrawal";

const Profile = () => {
    const {profileID} = useParams()
    const {profileData} = useSelector(state => state.mypage)
    const newItem = profileData
    const { id, nickname, imgurl, career, occupation } = newItem
    const [isOpen, setIsOpen] = useState(false)
    const [withdraw, setWithdraw] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onOpen = () => {
        setIsOpen(!isOpen)
        dispatch(profileUp(newItem))
    }
    const Logout = () => {
        dispatch(logout())
        navigate(`/`)
    }
    const secOpen = () => {
        setWithdraw(!withdraw)
    }
    return (
        <ProfileWrap key={id}>
            <div className="img-box">
                <img src={imgurl} alt="" />
            </div>
            <p className="nickname">{nickname}</p>
            <p className="info">
                <span>{occupation}</span>
                <span>{career}</span>
            </p>
            <p className="btn">
                <button onClick={onOpen}>프로필 편집</button>
            </p>
            {isOpen && <ProfilePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
            <p className="disabled" onClick={Logout}>로그아웃</p>
            <p className="disabled" onClick={secOpen}>회원탈퇴</p>
            {withdraw && <Withdrawal withdraw={withdraw} setWithdraw={setWithdraw} />}
        </ProfileWrap>
    );
};

export default Profile;