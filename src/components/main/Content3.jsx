import { useNavigate } from "react-router-dom";
import { Interview } from "./ContentStyle";
import SocialItem from "../social/SocialItem";
import { useSelector } from "react-redux";

const Content3 = () => {
    const navigate = useNavigate()
    const { socialInit } = useSelector(state => state.socialR);
    return (
        <Interview>
            <div className="inner">
                <div className="tit-box">
                    <h2 className="tit">현직 개발자의 인터뷰</h2>
                    <button onClick={() => navigate(`/social`)}>더보러가기</button>
                </div>
                <div className="mainPort">
                    {
                        socialInit.map((item, idx) => idx < 4 && 
                        <SocialItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </Interview>
    );
};

export default Content3;