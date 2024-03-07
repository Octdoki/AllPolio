import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./SocialStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { onCate } from "../../store/modules/socialSlice";
import { changeLoc } from "../../store/modules/HomeSlice";

const SocialMenu = () => {
    const { socialData, socialCateData } = useSelector((state) => state.socialR);
    const { location } = useSelector(state => state.HomeR);
    const [data, setData] = useState(socialCateData);
    const dispatch = useDispatch();
    const IsOn = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isOn: true } : { ...item, isOn: false })));
    };

    const [loc, setLoc] = useState(location);
    useEffect(() => {
        dispatch(changeLoc("socialPage"));
    }, []);

    return (
        <>
            <Menu>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={7}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <li
                                onClick={() => {
                                    if (item.socialCate !== "전체") {
                                        dispatch(onCate(item.socialCate));
                                    } else {
                                        dispatch(onCate("전체"));
                                    }
                                    IsOn(item.id);
                                }}
                                className={`tag ${item.isOn ? "on" : ""}`}
                            >
                                {item.socialCate}
                            </li>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Menu>
        </>
    );
};

export default SocialMenu;
