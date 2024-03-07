import { useState } from "react";
import { LoginWrap } from "./LoginStyle";
import { useDispatch } from "react-redux";
import { login } from "../../store/modules/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Login = () => {
    const [user, setUser] = useState({
        email:'', password:'',
    })
    const [isChk, setIsChk] = useState(false)
    const {authed} = useSelector(state => state.auth)
    const {email, password} = user
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    };
    const onSubmit = (e) => {
        e.preventDefault()
        if(!email || !password)return
        dispatch(login(user))
        setUser({email:'', password:''})
    }
    useEffect(()=>{
        if(authed){
            navigate(`/`)
        }else{
            return
        }
    },[authed])
    return (
        <LoginWrap>
            <div className="inner">
                <h2>LOGIN</h2>
                <form onSubmit={onSubmit} className="inp-wrap">
                    <p>
                        <label htmlFor="userEmail">이메일</label>
                        <input type="email" onChange={onChange} name="email" value={email} id="email" placeholder="이메일을 입력하세요" />
                    </p>
                    <p>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" onChange={onChange} name="password" value={password} id="password" placeholder="비밀번호를 입력하세요" />
                    </p>
                    <p>
                        <button type="submit">로그인</button>
                    </p>
                </form>
            </div>
        </LoginWrap>
    );
};
export default Login;