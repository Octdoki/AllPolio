import { MainWrap, VisualWrap } from "./HomeStyle";
import { Swiper, SwiperSlide } from 'swiper/react';  
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import Content1 from "../../components/main/Content1";
import { useEffect, useState } from "react";
import Content2 from "../../components/main/Content2";
import Content3 from "../../components/main/Content3";
import Content4 from "../../components/main/Content4";
import { searchMain } from "../../store/modules/HomeSlice";
import { useDispatch } from "react-redux";
const Home = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    useEffect(() => {
        dispatch(searchMain(''))
    },[])
    return (
        <>
            <VisualWrap>
                <Swiper
                    modules={[Autoplay,Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    navigation={true}
                >
                    <SwiperSlide><img src="./images/mainVis02.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/mainVis03.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/mainVis04.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/mainVis05.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/mainVis06.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/mainVis07.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/mainVis08.png" alt="" /></SwiperSlide>
                </Swiper>
            </VisualWrap>

            <MainWrap className="main">
                <Content1/>
                <Content2/>
                <Content3/>
                <Content4/>
            </MainWrap>
        </>
    );
};

export default Home;