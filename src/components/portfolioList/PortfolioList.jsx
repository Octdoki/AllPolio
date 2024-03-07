import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioListWrap } from './PortfolioListStyle';
import { useSelector } from 'react-redux';
const PortfolioList = () => {
    const { portfolioData } = useSelector(state => state.mypage)
    const { gallery1, gallery2 } = useSelector( state => state.galleryR )
    return (
        <PortfolioListWrap>
            {
                portfolioData.length > 0 ? portfolioData.map(item => <PortfolioItem key={item.id} item={item} />) : <PortfolioItem />
            }
            {/* <PortfolioItem /> */}
        </PortfolioListWrap>
    );
};
export default PortfolioList;