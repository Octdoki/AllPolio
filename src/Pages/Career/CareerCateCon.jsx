import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupFilter2, popupSort } from '../../store/modules/CareerSlice';
import { CateWrap } from './CarreCateConStyle';
import { GrPowerReset } from "react-icons/gr";


const CareerCateCon = ({setIsopen}) => {
    const { filter1Data , filter2Data} = useSelector(state => state.CareerPopup)
    const [ data, setData ] = useState(filter1Data )
    const [ data2, set2Data ] = useState(filter2Data )

    const IsOn = (id,sortBy) => {
        console.log(id)
        setData( data.map( item => item.id === id ? {...item, isClass : true}  : {...item,isClass:false}))
        dispatch(popupSort(id,sortBy))
    }
    const IsOn2 = (id, category) => {
        set2Data( data2.map( item => item.id === id ? {...item, isClass : true}  : {...item,isClass:false}))
        dispatch(popupFilter2(category))
      
    }
     const close =()=>{
        setIsopen(false)
     }
     const onReset=()=>{
        dispatch(onReset())
     }
        
     
    const dispatch = useDispatch()
    
    return (
        <CateWrap>
            <div className='btnWrap'>
                <strong> 정렬</strong>
                <div className='orderBy'>
                    {
                        data.map(item => <div onClick={() => IsOn(item.id , item.sortBy)}  className={`btn first  ${item.isClass ? 'on' : ''}`}   >{item.category} </div>)
                    }
                </div>
            </div>
            <div className='btnWrap'>
                <strong> 카테고리</strong>
                <div className='orderBy'>
                {
                    data2.map(item => <div  onClick={() => IsOn2(item.id, item.category)} className={`btn  ${item.isClass ? 'on' : ''}`}   >{item.category} </div>)
                }
                </div>

            </div>
            <div className='btnWrap'>
                <div className='orderBy okBtn'>
                    <div className='btn on ' onClick={onReset}  > <GrPowerReset /> </div>
                    <div className='btn first on' onClick={close}  > 적용하기 </div>
       
                </div>
            </div>
        </CateWrap>
    );
};

export default CareerCateCon;