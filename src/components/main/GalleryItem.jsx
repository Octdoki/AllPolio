import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import PopupHome from "../../Pages/Popup/PopupHome";
import { portfolioData } from "../../assets/api/portfolioData";

const GalleryItem = ({item }) => {
    const { category, id ,title,likes, name } = item
    const [isOpen , setIsopen] = useState(false)
    const dispatch = useDispatch()
    const { gallery1, gallery2 ,loading } = useSelector( state => state.galleryR )
    const openPopup=()=>[
        setIsopen(true)
    ]
    return (
       <>
        {
            !loading && gallery1 && gallery2 && <li onClick={ openPopup }>
            {
                id > gallery1.length-1 ? <img src={ gallery1[id-gallery1.length].urls.raw } alt="portpolio image"/> : <img src={ gallery1[id].urls.raw } alt="portpolio image"/>
            }
            <span className="cateName">{category}</span>
            <p>{title}</p>
            <div>
                <p className="thum">
                {
                    id > gallery2.length-1 ? <img src={ gallery2[id-gallery2.length].urls.regular } alt="portpolio image"/> : <img src={ gallery2[id].urls.regular } alt="portpolio image"/>
                }
                    <span>{name}</span>
                </p>
                <i><FaHeart /><span>{likes}</span></i>
            </div>
        </li>
        }
        { isOpen && <PopupHome setIsopen={setIsopen} item={item}/> }
       </>
    );
};
export default GalleryItem;