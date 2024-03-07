import { useState } from "react";
import { JoinWrap } from "./LoginStyle";
import { useDispatch } from "react-redux";
import { check, signup } from "../../store/modules/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const Join = () => {
    const [user, setUser] = useState({
        email:'',nonEmailDuplication:false, username: '', password:'',confirmpassword: '', tel:'',istel:'', agreeCheck: false
    })
    //nonEmailDuplication=이메일중복체크여부,agreeCheck: 동의 여부 확인
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {email,nonEmailDuplication, username, password,validPw,confirmpassword,correctPw, tel, istel, agreeCheck} = user
    const [allAgreed, setAllAgreed] = useState(false)
    const [agreements, setAgreements] = useState({
        termsAgreed: false, serviceAlarmAgreed: false,
    })
    const [num, setNum] = useState("")
    const {dataList} = useSelector(state => state.auth)
    //아래 조건을 모두 충족할 시 제출 버튼 활성화.
    const submitRequirements = 
        email && password && confirmpassword
    
    //내용 객체 출력
    const inputChg = (e) => {
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    }
    //체크박스 함수
    const handleSingleCheck = (e) => {
        const {name, checked} = e.target
        setAgreements((prevAgreements => ({...prevAgreements, [name]:checked})));
        const allchecked = Object.values({...agreements, [name]:checked}).every((value)=>value === true)
        setAllAgreed(allchecked)
    }//필수동의/선택동의 항목 체크
    const handleAllCheck = (e) => {
        const {checked} = e.target
        setAgreements(prevAgreements => Object.keys(prevAgreements).reduce((newAgreements, agreementKey)=>({...newAgreements, [agreementKey]:checked}),{}))
        setAllAgreed(checked)
    }//전체동의
    //회원가입완료    
    const register = (e) => {
        e.preventDefault()
        if(!email || !password || !confirmpassword) return alert('입력해주세요')
        dispatch(signup(user))
        if(password !== confirmpassword){
            return alert('비밀번호가 일치하지 않습니다.')
        }
        //정규식 모음 객체
        const pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/
        if(pwRegex.test(password)){
            alert('형식에 맞는 비밀번호 입력')
        }

        setUser({
            email:'', username: '', password:'',confirmpassword: '', tel:'',istel:'', agreeCheck: false
        })
        setAgreements({termsAgreed: false, serviceAlarmAgreed: false,})
        setAllAgreed(false)
        navigate(`/login`)
        setNum('')

    }
    //중복확인버튼
    const onAlarm = (e)=>{
        e.preventDefault()
        // dispatch(check(user))
    }
    //인증번호버튼
    const onTelAuth = e => {
        e.preventDefault()
        let regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
        if(regPhone.test(tel)){
            setNum(Math.floor(Math.random()*99999))
        }else{return}
    }
    
    return (
        <JoinWrap>
            <div className="inner">
                <h2>JOIN</h2>
                <form onSubmit={register}>
                    <p>
                        <p className="email-duplication">
                            <label htmlFor="email">이메일</label>
                            <input type="email" name="email" id="email" value={email} onChange={inputChg} placeholder="이메일을 입력하세요" required />
                            {/* <button onClick={onAlarm}>중복확인</button> */}
                            {/* {
                                nonEmailDuplication ? <span className="on">사용가능합니다.</span> : <span className="off">중복된 이메일 입니다.</span>
                            } */}
                        </p>
                    </p>
                    <p>
                        <label htmlFor="username">이름</label>
                        <input type="text" name="username" id="username" value={username} onChange={inputChg} placeholder="이름을 입력하세요"/>
                    </p>
                    <p className="tel-number">
                        <label htmlFor="tel">휴대폰번호</label>
                        <input type="text" name="tel" id="tel" value={tel} onChange={inputChg} placeholder="010-0000-0000"  />
                        <button onClick={onTelAuth}>인증번호받기</button>
                        <input type="text" name="istel" id="istel" value={num} onChange={inputChg} placeholder="인증번호를 입력해 주세요"/>
                    </p>
                    <p>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" name="password" id="password" value={password} onChange={inputChg} placeholder="비밀번호를 입력해주세요" required />
                    </p>
                    <p>
                        <label htmlFor="confirmpassword">비밀번호확인</label>
                        <input type="password" name="confirmpassword" id="confirmpassword" value={confirmpassword} onChange={inputChg} placeholder="비밀번호를 다시 한번 입력해주세요" required />
                        <span className="pw-condition">영문 대소문자, 숫자 2가지 이상으로 조합하여 8자 이상 16자 이하로 입력해주세요</span>
                    </p>
                    <div>
                        <p className="all-chk">
                            <input type="checkbox" id="agree_check_all" name="agree_check_all" checked={allAgreed} onChange={handleAllCheck}/>
                            <span htmlFor="agree_check_all">전체 동의</span>
                        </p>
                        <ul className="sel-chk">
                            <li>    
                                <input type="checkbox" id="agree_check_used" name="termsAgreed" checked={agreements.termsAgreed} onChange={handleSingleCheck} required />
                                <label htmlFor="agree_check_used">올폴리오 이용약관 및 개인정보 수집 이용 동의(필수)</label>
                            </li>
                            <li>
                                <input type="checkbox" id="agree_check_push" name="serviceAlarmAgreed" checked={agreements.serviceAlarmAgreed} onChange={handleSingleCheck}/>
                                <label htmlFor="agree_check_push">올폴리오 맞춤 정보 및 마케팅 정보 받기(선택)</label>
                            </li>
                        </ul>
                    </div>
                    <p>
                        <button type="submit" disabled={!submitRequirements}>회원가입</button>
                    </p>
                </form>
            </div>
        </JoinWrap>
    );
};

export default Join;