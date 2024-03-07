import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../../Pages/Popup/Popup";
import PopupCareer from "../../Pages/Popup/PopupCareer";
const CareerItem = ({item}) => {
    const { thumImg, title, popCate, startDate, lastDate,ispopLink,   popLink } = item
    const [date, setDate] = useState(new Date())
    const { careerData } = useSelector(state => state.CareerR)
    // const { isopen } = useSelector( state => state.careerPopup )
    const [isopen , setIsopen] = useState(false)
    const openPopup=()=>{
        if(ispopLink){
            window.open(popLink)
        }else{
            setIsopen(true)
        }
    }
    return (
        <>
            <li className={ date > careerData.lastDate ? 'on' : '' } onClick={openPopup}>
                <div className="imgBox">
                    <img src={thumImg} alt={title} />
                </div>
                <span className="tabCate">{popCate}</span>
                <h2 className="tabTitle">{title}</h2>
                <p className="tabDate">{startDate} - {lastDate}</p>
            </li>
            { isopen && <PopupCareer setIsopen={setIsopen} item={item}/> }
        </>
    );
};
export default CareerItem;