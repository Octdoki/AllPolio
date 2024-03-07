import { useSelector } from "react-redux";
import { DtListWrap, SocialContent, SocialDetailWrap, SocialDtList, SocialTitle } from "./SocialStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const SocialDetail = () => {
    const { socialID } = useParams();
    const { socialData } = useSelector((state) => state.socialR);
    const detailItem = socialData.find((item) => item.id === Number(socialID));
    const {
        title,
        nick,
        socialCate,
        detail: [
            {
                img1,
                img2,
                img3,
                desc: [{ desctitle1, descQ1, descA1, desctitle2, descQ2, descA2 }],
            },
        ],
    } = detailItem;
    const list1Ref = useRef(null);
    const list2Ref = useRef(null);
    const list3Ref = useRef(null);

    const onList1Click = () => {
        list1Ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const onList2Click = () => {
        list2Ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const onList3Click = () => {
        list3Ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SocialDetailWrap>
            <SocialTitle>
                <p ref={list3Ref}>개발자 인터뷰</p>
                <h1>{title}</h1>
                <div>
                    <span>{nick}</span>
                    <span>{socialCate}</span>
                </div>
            </SocialTitle>

            <SocialContent>
                <div>
                    <img src={img1} alt="" />
                    <span ref={list1Ref}>{desctitle1}</span>

                    <article>
                        <h2>{descQ1}</h2>
                        <p>{descA1}</p>
                    </article>

                    <span ref={list2Ref}>{desctitle2}</span>
                    <img src={img2} alt="" />
                    
                    <article>
                        <h2>{descQ2}</h2>
                        <p>{descA2}</p>
                    </article>
                </div>
            </SocialContent>
            <DtListWrap>
                <SocialDtList>
                    <li onClick={onList1Click}>
                        <span>1. </span>
                        {desctitle1}
                    </li>
                    <li onClick={onList2Click}>
                        <span>2. </span>
                        {desctitle2}
                    </li>
                    <li onClick={onList3Click}>맨위로</li>
                </SocialDtList>
            </DtListWrap>

            <p className="btn">
                <button onClick={() => navigate(`/social`)}>목록</button>
            </p>
        </SocialDetailWrap>
    );
};

export default SocialDetail;
