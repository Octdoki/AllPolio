import React from 'react';
import PortfolioList from '../../../components/portfolioList/PortfolioList';
import { PortfolioWrap } from './PortfolioStyle';
import { useState } from 'react';
import PortfolioAdd from '../../../components/portfolioList/PortfolioAdd';
const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onAdd = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <PortfolioList />
            <PortfolioWrap>
                <div className="port-add">
                    <button onClick={onAdd}>포트폴리오 추가</button>
                </div>
                {isOpen && <PortfolioAdd setIsOpen={setIsOpen} isOpen={isOpen} />}
                <ul>
                    <li><img src="./images/project/banner1.png" alt="" /></li>
                </ul>
            </PortfolioWrap>
        </div>
    );
};
export default Portfolio;