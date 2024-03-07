import { UpdatePort } from "./ContentStyle";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getGallerys1, getGallerys2 } from '../../store/modules/gallerySlice';
import {portfolioData} from '../../assets/api/portfolioData'
import GalleryItem from "./GalleryItem";
import { sortCart } from "../../store/modules/HomeSlice";
const Content2 = () => {
    const { text1,text2,loading , loading1 } = useSelector( state => state.galleryR )
    const { sortData } = useSelector(state => state.HomeR)
    const dispatch  = useDispatch()
    
    const onSort = () => {
        dispatch(sortCart('date'))
    }
    useEffect(() => {
        onSort()
    }, [portfolioData]);

    return (
        <UpdatePort>
            <div className="inner">
                <h2 className="tit">최신 포트폴리오는 올폴리오에서!</h2>
                <div className="curPort">
                    <ul>
                        {  
                            !loading && !loading1 && sortData
                            .map((item, idx) => idx < 4 && <GalleryItem key={item.id} item ={item}  />) 
                        }
                    </ul>
                </div>
            </div>
        </UpdatePort>
    );
};

export default Content2;