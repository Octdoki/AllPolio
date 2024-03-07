
import { IoShareSocial } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import { CareerConWrap } from "./CareerConStyle";
import { useNavigate } from "react-router-dom";

const CarerrCon = ({item}) => {
    const navigate = useNavigate()
    const {thumImg, title, popCate, startDate, lastDate, popDesc } = item
    const ontop =()=>{
        window.scrollTo(0, 0);
    }
    const onGo =()=>{
        navigate('/complete')
    }
    return (
        <CareerConWrap>
            <div className='title'>
                {title}
            </div>
            <div className='con1'>
                <p>
                    <img src= {thumImg }alt=''/>
                </p>
                <div className='con1Content'>
                    <p className="popCate">{popCate} </p>
                    <strong>{title}</strong>
                    <p className="date">{startDate} (화) -  {lastDate} (금) </p>
                    {/* 텍스트 임의로 넣음  */}
                    <p className="content">{popDesc}</p>
                    <div className="part on" onClick={onGo}>참가 신청</div>
                </div>
            </div>
            <div className="con2">
                <p>
                <img src= {thumImg }alt=''/>
                </p>
            </div>
            <div className='btnwrap'>
                <div className="share"><IoShareSocial /></div>
                <div className="line"></div>
                <div className="top" onClick={ontop}><GoArrowUp /></div>
            </div>
        </CareerConWrap>
    );
};

export default CarerrCon;