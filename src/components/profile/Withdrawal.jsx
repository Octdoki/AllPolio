import { useParams } from "react-router-dom";
import { WithdrawalWrap } from "./ProfileStyle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUse } from "../../store/modules/authSlice";

const Withdrawal = ({withdraw, setWithdraw}) => {
    const {withdrawalID} = useParams()
    const { dataList } = useSelector(state => state.auth)
    // const withItem = dataList.find( item => item.id === Number(withdrawalID))
    const dispatch = useDispatch()
    // const { id, user, ahthed} = withItem
    const accountRemove = () => {

    }
    return (
        <WithdrawalWrap>
            <div className={withdraw ? 'bg' : 'bg off'} onClick={()=>setWithdraw(false)}></div>
            <div className="popup">
                <h4>탈퇴하기</h4>
                <p>잠깐! 올폴리오를 탈퇴하기 전에<br/>아래 정보를 확인해주세요</p>
                <ul>
                    <li>
                        <strong>관리 중인 서비스들은 해지되지 않아요 🙅‍♀️</strong>
                        <p>올폴리오를 탈퇴해도 올폴리오에서 관리 중인 서비스는 해지되지 않아요. 서비스 해지를 원해 탈퇴하는 거라면 절대 탈퇴하시면 안되요.</p>
                    </li>
                    <li>
                        <strong>처음부터 다시 가입해야 해요 🤦</strong>
                        <p>탈퇴 회원의 정보는 15일간 임시 보관 후 완벽히 삭제되어요. 탈퇴하시면 회원가입부터 다시 해야 해요.</p>
                    </li>
                    <li>
                        <strong>동기화가 되지 않아요</strong>
                        <p>등록되었던 포트폴리오를 불러올 수 없어요. 저희도 정보를 남겨두지 않으므로 처음부터 다시 입력해야해요.</p>
                    </li>
                </ul>
                <p className="btn">
                    <button onClick={()=>setWithdraw(false)}>취소</button>
                    <button onClick={accountRemove}>계정삭제</button>
                </p>
            </div>
        </WithdrawalWrap>
    );
};

export default Withdrawal;