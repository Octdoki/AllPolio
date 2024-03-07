import { MainMenu } from "./CategoryStyle";
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import { onCate } from "../../store/modules/HomeSlice";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
    const dispatch = useDispatch()
    const { categoryData } = useSelector(state => state.HomeR)
    const [ data, setData ] = useState(categoryData)

    const IsOn = (id) => {
        setData( data.map( item => item.id === id ? {...item, isOn : true}  : {...item,isOn:false}))
    }
    
    return (
        <MainMenu>
            <Swiper
               modules={[Navigation]}
               spaceBetween={20}
               slidesPerView={7}
               autoplay={{ delay: 4000, disableOnInteraction: false }}
               navigation={true}
           >
                {
                   data.map(item =>  
                   <SwiperSlide onClick={() => dispatch(onCate(item.category))} key={item.id}>
                        <li onClick={() => IsOn(item.id)} className={`tag ${item.isOn ? 'on' : ''}`} >
                            {item.category}
                        </li>
                   </SwiperSlide>) 
                }

           </Swiper>
            
        </MainMenu>
    );
};

export default Category;