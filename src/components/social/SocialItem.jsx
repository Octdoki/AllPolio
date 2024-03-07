import { useNavigate } from "react-router-dom";

const SocialItem = ({ item }) => {
    const { id, image, title, nick, socialCate } = item;
    const navigate = useNavigate();

    return (
        <article onClick={() => navigate(`/social/${id}`)}>
            <div>
                <img src={image} alt="" />
            </div>
            <p>
                <span>{socialCate}</span>
            </p>
            <h3>{title}</h3>
            <h4>{nick}</h4>
        </article>
    );
};

export default SocialItem;
