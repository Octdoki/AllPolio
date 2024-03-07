
import { MainPopup , MainContentWrapper, MainPopupWrap} from '../Home/HomePopupBasicStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaFolder, FaShare } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Popup = ({setIsopen , item}) => {
    const navigate = useNavigate()

    return (
        <MainPopup>
            <MainContentWrapper>
                <MainPopupWrap> 
                    <div className="inner">
                        {/* <HomePopupContent item={item}/>  */}
                        <button className='closeBtn' onClick={()=>setIsopen(false)}><IoMdClose /></button>
                    </div>
                    <div className='popBG' onClick={()=>setIsopen(false)}></div>
                </MainPopupWrap >
            </MainContentWrapper>  
        </MainPopup>
    );
};

export default Popup;