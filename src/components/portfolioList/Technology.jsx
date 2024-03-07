import TechnologyItem from './TechnologyItem';
import { IoIosArrowDown } from "react-icons/io";
import { TechnologyWrap } from './PortfolioListStyle';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
const Technology = ({changeForm}) => {
    const {categoryData} = useSelector(state => state.HomeR)
    const { category } = categoryData
    const [isOpen, setIsOpen] = useState(false)
    const onClick = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    return (
        <TechnologyWrap>
            <button onClick={onClick}>
                {category}
                <i>
                    <IoIosArrowDown />
                </i>
            </button>
            {
                isOpen ? <ul className='selectBox'>
                {categoryData.map(item => <TechnologyItem key={item.id} item={item} onSelect={onSelect} changeForm={changeForm} />)}
                </ul> : null
            }
        </TechnologyWrap>
    );
};
export default Technology;