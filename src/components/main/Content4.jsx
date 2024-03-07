import { onTab } from '../../store/modules/CareerSlice';
import { Career } from "./ContentStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const Content4 = () => {
    const { careerCateData } = useSelector(state => state.CareerR)
    const navigate = useNavigate()
    const dispatch  = useDispatch()
    const onThum = () => {
        navigate('/career')
        dispatch(onTab('교육'))
    }
    const [ data, setData ] = useState(careerCateData)
    const IsOn = (id) => {
        setData( data.map( item => item.id === id ? {...item, isOn : true}  : {...item,isOn:false}))
    }
    return (
        <Career>
            <div className="inner">
                <div className="tit-box">
                    <h2 className="tit">올폴리오 똑똑하게 이용하는법</h2>
                    <button onClick={() => navigate(`/career`)}>더보러가기</button>
                </div>

                <ul>
                    <li onClick={() => IsOn(item.id)}><img src="./images/cont4_01.jpg" alt="" /></li>
                    <li onClick={ () => onThum('이벤트') }><img src="./images/cont4_02.jpg" alt="" /></li>
                    <li onClick={ () => onThum('네트워킹') }><img src="./images/cont4_03.jpg" alt="" /></li>
                </ul>
            </div>
        </Career>
    );
};

export default Content4;