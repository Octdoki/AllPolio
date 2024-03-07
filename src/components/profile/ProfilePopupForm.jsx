import React from 'react';
import { ProfilePopupFormWrap } from './ProfileStyle';
import { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { profileAdd, profileEdit } from '../../store/modules/mypageSlice';
import { useSelector } from 'react-redux';

const ProfilePopupForm = ({ isOpen, setIsOpen }) => {
    const [upload, setUpLoad] = useState(null);
    const [profileInput, setProfileInput] = useState({id:1 , imgurl: '', nickname: '닉네임', occupation: '직군', career: '경력' });
    const { nickname, occupation, career, imgurl } = profileInput;
    const dispatch = useDispatch();
    const changeImg = (e) => {
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        const {name} = e.target
        setUpLoad(imgUrl);
        setProfileInput({
            ...profileInput,
            [name]: imgUrl,
        });
    };
    const changeInp = (e) => {
        const { name, value } = e.target;
        if (value) {
            setProfileInput({
                ...profileInput,
                [name]: value,
            });
        } else {
            setProfileInput({
                ...profileInput,
                [name]: '없음',
            });
        }
    };
    const profileSubmit = (e) => {
        e.preventDefault();
        dispatch(profileEdit(profileInput));
        setIsOpen(false)
    };
    return (
        <ProfilePopupFormWrap onSubmit={profileSubmit}>
            <p>
                {upload ? <img src={imgurl} alt="프로필이 없을 때 이미지" /> : <img src="./images/portImg/andro04.png" alt="" />}
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
        </ProfilePopupFormWrap>
    );
};

export default ProfilePopupForm;
