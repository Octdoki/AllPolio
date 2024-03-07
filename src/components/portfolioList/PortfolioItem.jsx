import React from 'react';
const PortfolioItem = ({item}) => {
    return (
        <li>
            <img src="./images/project/projectImg1.png" alt="" />
            <div className="box">
                <img src="./images/project/projectImg2.png" alt="" />
                <strong>{item.name}</strong>
            </div>
        </li>
    );
};
export default PortfolioItem;