import React from 'react';
import { ProfilePopupWrap } from './ProfileStyle';
import ProfilePopupForm from './ProfilePopupForm';
import ProfilePopupEdit from './ProfilePopupEdit';

const ProfilePopup = ({isOpen, setIsOpen}) => {
    return (
        <ProfilePopupWrap>
            <div className={isOpen ? 'bg' : 'bg off'} onClick={()=>setIsOpen(false)}></div>
            <div className="popup">
                <ProfilePopupEdit isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </ProfilePopupWrap>
    );
};

export default ProfilePopup;