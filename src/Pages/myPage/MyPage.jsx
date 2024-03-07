import React from 'react';
import { MypageWrap } from './mypageStyle';
import Profile from '../../components/profile/Profile';
import Portfolio from './portfolio/Portfolio';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onTab } from '../../store/modules/mypageSlice';
import { useEffect } from 'react';
const MyPage = () => {
    const navigate = useNavigate()
    const {mypageTabMenu} = useSelector(state => state.mypage)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(onTab(1))
    },[])
    return (
        <>
            <MypageWrap>
                <div className="inner">
                    <article>
                        <Profile />
                    </article>
                    <article className='mypage-main'>
                        <ul className="tab-menu">
                            {
                                mypageTabMenu.map(item => <li key={item.id}>
                                    <Link to={item.link} className={`${item.isTabOn ? 'on':''}`} onClick={()=>dispatch(onTab(item.id))}>{item.menu}</Link>
                                </li>)
                            }
                        </ul>
                        <div className="line"></div>
                        <div className="content">
                            <Outlet />
                        </div>
                    </article>
                </div>
            </MypageWrap>
        </>
    );
};
export default MyPage;