
import { MainPopup , MainContentWrapper, MainPopupWrap} from '../Home/HomePopupStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaFolder, FaShare } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import HomePopupBtn from '../Home/HomePopupBtn';
import HomePopupContent from '../Home/HomePopupContent';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import HomeCommentAdd from '../Home/HomeCommentAdd';
import HomeEidtorAdd from '../Home/HomeEidtorAdd';
import { useNavigate } from 'react-router-dom';
const PopupHome = ({setIsopen , item}) => {
    
    const scrollRef = useRef(null);
    const {isComments } = useSelector(state => state.popupHome)
    const navigate = useNavigate()
    const onGo =()=>[
        // e.preventDefault()
        navigate('/')
    ]
    const {likes} = item
    return (
        <MainPopup>
            <MainContentWrapper>
                <MainPopupWrap> 
                    <div className="inner">
                        <HomePopupContent item={item}/> 
                        <button className='closeBtn' onClick={()=>setIsopen(false)}><IoMdClose /></button>
                    </div>
                    <div className='popBG' onClick={()=>setIsopen(false)}></div>
                </MainPopupWrap >
                {
                    isComments? <HomeEidtorAdd /> : <HomePopupBtn likes={likes} item={item}/> 
                }
               
            </MainContentWrapper>  
        </MainPopup>
    );
};

export default PopupHome;