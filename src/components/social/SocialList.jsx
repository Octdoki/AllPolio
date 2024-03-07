import { useSelector } from "react-redux";
import { SocialListWrap } from "./SocialStyle";
import SocialItem from "./SocialItem";

const SocialList = () => {
    const { socialData } = useSelector(state => state.socialR);

    return (
        <SocialListWrap>
            {socialData.map((item) => (
                <SocialItem key={item.id} item={item} />
            ))}
        </SocialListWrap>
    );
};

export default SocialList;
