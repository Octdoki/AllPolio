import React from 'react';
import { useSelector } from 'react-redux';

const LikeItem = ({item}) => {
    const { id, name, title, likes, category,tumImg,proImg} = item
    const { gallery1, gallery2 } = useSelector( state => state.galleryR )
    return (
        <li>
                {
                    id > gallery1.length-1 ? <img src={ gallery2[id-gallery1.length].urls.raw } alt="portpolio image"/> : <img src={ gallery1[id].urls.raw } alt="portpolio image"/>
                }
            <div>
                {
                    id > gallery2.length-1 ? <img src={ gallery2[id-gallery2.length].urls.regular } alt="portpolio image"/> : <img src={ gallery2[id].urls.regular } alt="portpolio image"/>
                }
                <p>{title}</p>
            </div>
        </li>
    );
};

export default LikeItem;