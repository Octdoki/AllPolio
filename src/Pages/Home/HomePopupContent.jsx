import { MainPopup , MainContentWrapper, MainPopupWrap} from './HomePopupStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaFolder, FaShare,FaPlus } from "react-icons/fa";
import { IoEyeSharp,  IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addComment } from '../../store/modules/PopupHomeSlice';
import { MdOutlineEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


const HomePopupContent = ({scrollRef, item}) => {
    const {id,category ,name, title, likes,desc } = item
    const [clickLike, setClickLike] = useState(false)

    const {comments , isliked , isfollow, likedPortf, followed  } = useSelector( state => state.popupHome)
    const { gallery1, gallery2 } = useSelector( state => state.galleryR )
    const [user, setUser] = useState({  comment : '' , date:'' })
    const [now, setNow] = useState(new Date())
    const dispatch = useDispatch()
    const newlike = likedPortf.find(port => port.id  === id)
    const newFollow = followed.find(port => port.id  === id)
    const changeInput = e =>{
        const {value, name} = e.target
        setUser({
            ...user,
            [name] : value
        })
        console.log(user)
    }
    const { comment , date } = user
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!comment){
            alert('댓글을 입력해주세요')
            return
        }
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} `
        dispatch(addComment(user))
        setUser({  comment : ''})
    }
    
    return (
        <div className='Main-PopupWrap'>
            <div className='profile'>
                <p className='proLeft'> 
                    {/* <img src={ gallery2[id].urls.raw } alt=""/> */}
                    {
                        id > gallery2.length-1 ? <img src={ gallery2[id-gallery2.length].urls.regular } alt="portpolio image"/> : <img src={ gallery2[id].urls.regular } alt="portpolio image"/>
                    }

                    <strong>{title}</strong>
                </p>
                <div className='profileName'>
                    <p className='proRight'><em>{name}</em>  ∙  {isfollow ? <em className='following'>팔로잉</em>  : <em className='follow'>팔로우</em> }</p>
                    <p className='proCate'>{category}</p>
                </div>
            </div>
        
            <div className="popup-MainImg">
            {
                id > gallery1.length-1 ? <img src={ gallery1[id-gallery1.length].urls.raw } alt="portpolio image"/> : <img src={ gallery1[id].urls.raw } alt="portpolio image"/>
            }
            </div>

            <div className='popup-desc'>
                <p>
                    {desc}
                </p>
            </div>
            <div className="liksenCollectionWrap">
                <div className="likseCollectionBtnWrap">
                    <button>
                        <span>좋아요 <i className={newlike ? "on" : ""}> <FaHeart /> </i></span>
                    </button>
                </div>
                <p className="title">{title}</p>
                <div className='viewslikesWrap'>
                    <p><IoEyeSharp /><span>132</span></p>
                    <p><FaHeart /><span>{newlike ? (likes ): (likes -1)}</span></p>
                    <p><FaCommentAlt /><span>{comments.length}</span></p>
                </div>
            </div>

            <div className="bottomWrap">
                {
                    id > gallery2.length-1 ? <img src={ gallery2[id-gallery1.length].urls.regular } alt="portpolio image"/> : <img src={ gallery2[id].urls.regular } alt="portpolio image"/>
                }
                <span>{name}</span>
                <div className="btnWrap">
                    {newFollow?  <button> <FaCheck />팔로잉</button>  :  <button> <FaPlus /> 팔로우</button> } 
                    {/* <button><FaCommentDots /> 댓글</button> */}
                </div>
            </div>

            <div className='ShowCommentWrap' ref={scrollRef}></div>
        </div>
        
    
    );
};

export default HomePopupContent;