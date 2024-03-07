import {  Link  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavWrap, TopMenu } from './headerStyle';
import { useEffect, useRef, useState } from "react";
import { searchMain } from "../store/modules/HomeSlice";
import { searchCareer } from "../store/modules/CareerSlice";
import { logout } from "../store/modules/authSlice";
import { searchSocial } from "../store/modules/socialSlice";
const NavBar = () => {
    
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { location } = useSelector(state => state.HomeR)
    const {authed} = useSelector(state => state.auth)
    const textRef = useRef()
    const [loc, setLoc] = useState(location)

    useEffect(() => { //검색 갱신
        dispatch(searchCareer(''))
        dispatch(searchMain(''))
        dispatch(searchSocial(''))
    },[])
    const Logout = () => {
        dispatch(logout())
        navigate(`/`)
    }
    const changeInput = e => {
        const {value} = e.target
        setText(value)
    }
    const TopMenuData = [
        { id: 1, menu: 'mainPage', name: '포트폴리오', isOn: true, path: "/"},
        { id: 2, menu: 'careerPage', name: '커리어', isOn: false, path: "/career"},
        { id: 3, menu: 'interPage', name: '개발자인터뷰', isOn: false, path: "/social" },
    ]
    const [data, setData] = useState(TopMenuData)
    const onMenu = (id) => {
       setData(data.map(item=> item.id === id ? {...item, isOn: true} : { ...item, isOn:false }))
    }

    const onSubmit = e => {
        e.preventDefault()
        if(!text) return
        if(location === 'careerPage'){
            dispatch(searchCareer(text))
        }
        if(location === 'mainPage'){
            dispatch( searchMain(text) )
        }
        if(location === 'socialPage'){
            dispatch( searchSocial(text) )
        }
        setText('')
        textRef.current.focus()
    }
    return (
        <>
            <div className="logo-wrap">
                <h1>
                    <Link to={`/`} onClick={()=>onMenu(1)}><img src="./images/logo.svg" alt="logo" /></Link>
                </h1>
            </div>

            <NavWrap className="gnb">
                {
                    data.map(item => <li key={item.id}><Link to={item.path} onClick={() => onMenu(item.id)} className={`${item.isOn ? 'on' : ''}`}> { item.name } </Link></li>)
                }
            </NavWrap>

            <TopMenu className="searchWrap">
                <form onSubmit={onSubmit}>
                    <div className="search-wrap">
                        <input type="text" name="text" value={text} onChange={changeInput} placeholder="포트폴리오 이름을 검색해보세요" ref={textRef} />
                        <svg data-name="\uB808\uC774\uC5B4 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search-icon"><path d="M21.85 21.07L17 16.14a8.46 8.46 0 002.08-5.57 8.58 8.58 0 10-2.82 6.33l4.82 4.92a.54.54 0 00.38.15.53.53 0 00.38-.9zM3.06 10.57a7.49 7.49 0 117.49 7.49 7.5 7.5 0 01-7.49-7.49z" fill="#231F20"></path></svg>
                        {/* <button>검색</button> */}
                    </div>
                </form>
                <ul className="auth-wrap">
                   {
                        authed ? <li ><Link to={"/mypage"} className="sign-in">마이페이지</Link></li>
                        :
                        <li ><Link to={"/login"} className="sign-in">로그인</Link></li>
                    }
                    {
                        authed ? <li onClick={Logout}><button className="sign-out">로그아웃</button></li>
                        :
                        <li ><Link to={"/Join"} className="sign-up black">회원가입</Link></li>
                    }
                </ul>
            </TopMenu>
        </>
    );
};
export default NavBar;
