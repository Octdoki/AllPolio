import React from 'react';
import { ProfilePopupEditWrap, ProfilePopupFormWrap } from './ProfileStyle';
import { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { profileAdd, profileEdit } from '../../store/modules/mypageSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfilePopupEdit = ({ setIsOpen }) => {
    const { current } = useSelector(state => state.mypage) 
    const [upload, setUpload] = useState(true)
    const [editUser, setEditUser] = useState(current)
    const { id, nickname, occupation, career, imgurl } = editUser;
    const dispatch = useDispatch();
    
    const changeImg = (e) => {
        const file = e.target.files[0];
        const imgurl = URL.createObjectURL(file);
        const {name} = e.target
        setUpload(imgurl);
        setEditUser({
            ...editUser,
            [name]: imgurl,
        });
    };
    const changeInp = (e) => {
        const { name, value } = e.target;
        setEditUser({
            ...editUser,
            [name]: value,
        });
        
    };
    const profileSubmit = (e) => {
        e.preventDefault();
        dispatch(profileEdit(editUser));
        setIsOpen(false)
    };
    return (
        <ProfilePopupEditWrap onSubmit={profileSubmit} key={id}>
            <p>
                {upload ? <img src={imgurl} alt="" /> : <img src="./images/portImg/andro04.png" alt="" />}
                <label htmlFor="file">
                    <AiOutlinePicture />
                </label>
                <input type="file" id="file" name="imgurl" onChange={changeImg} />
            </p>
            <p>
                <label htmlFor="nickname">닉네임</label>
                <input type="text" name="nickname" value={nickname} onChange={changeInp} placeholder="닉네임을 입력해주세요" />
            </p>
            <p>
                <label htmlFor="occupation">직군</label>
                <input type="text" name="occupation" value={occupation} onChange={changeInp} placeholder="웹, 앱 프론트엔드 개발자" />
            </p>
            <p>
                <label htmlFor="career">경력</label>
                <input type="text" name="career" value={career} onChange={changeInp} placeholder="1년차, 2년차" />
            </p>
            <p>
                <button type="submit">수정</button>
                <button onClick={() => setIsOpen(false)}>취소</button>
            </p>
        </ProfilePopupEditWrap>
    );
};

export default ProfilePopupEdit;
