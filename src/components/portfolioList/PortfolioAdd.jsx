import React from 'react';
import { PortfolioAddWrap } from './PortfolioListStyle';
import Technology from './Technology';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAdd } from '../../store/modules/mypageSlice';
const PortfolioAdd = ({setIsOpen , isOpen}) => {
    const [portfolio, setPortfolio] = useState({tumImg:'', category:'',name:'',proImg:'',likes:"" ,title:'', portfolioURL:'', detail:'', date:'' })
    const { addData, portfolioData } = useSelector(state => state.mypage)
    const [ nowDate, setNowDate] = useState(new Date())
    const { tumImg, category, name, proImg, likes, title, portfolioURL, date, detail} = portfolio
    const dispatch = useDispatch()
    const changeForm = e => {
        const {name, value} = e.target
        setPortfolio({
            ...portfolio,
            [name]:value
        })
    }
    console.log(portfolioData)
    const onSubmit = (e) => {
        e.preventDefault()
        setNowDate(`${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`)
        portfolio.name =
        dispatch(onAdd(portfolio))
        setIsOpen(false)
        console.log(nowDate)
    }
    return (
        <PortfolioAddWrap>
            <div className={isOpen ? 'bg' : 'bg off'} onClick={()=>setIsOpen(false)} ></div>
            <form onSubmit={onSubmit}>
               <h2>포트폴리오</h2>
               <h3>프로젝트 명</h3>
               <div className="title">
                <input type="text" name="title" value={title} placeholder='프로젝트 명을 입력하세요' onChange={changeForm}/>
               </div>
               {/* <h3>프로젝트 기간</h3>
               <div className="con3">
                <Datepicker />
               </div> */}
               <h3>프로젝트 기술 스택</h3>
               <section className="category">
                <Technology changeForm={changeForm}/>
               </section>
               <h3>URL</h3>
               <div className="url">
                <input type="text" name="portfolioURL" value={portfolioURL} placeholder='프로젝트를 확인할 수 있는 URL을 입력하세요(ex.http://www.xxx.com)' onChange={changeForm} />
               </div>
               <h3>프로젝트 소개</h3>
               <div className="detail">
                <textarea name="detail" value={detail} cols="30" rows="10" placeholder='프로젝트를 소개해주세요' onChange={changeForm} ></textarea>
               </div>
               <p>
                    <button type="submit">등록</button>
                    <button onClick={()=>setIsOpen(false)}>취소</button>
               </p>
            </form>
        </PortfolioAddWrap>
    );
};
export default PortfolioAdd;