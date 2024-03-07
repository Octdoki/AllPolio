import styled from "styled-components";
export const SocialListWrap = styled.section`
    display: flex; padding-top: 20px;
    flex-wrap: wrap;
    article {
        width: 22%;
        margin-bottom: 30px;
        text-align: left;
        cursor: pointer;
        margin-right: 50px;
        div {
            margin-bottom: 25px;
            img {
                border-radius: 10px;
                width: 100%;
            }
        }
        h3 {
            word-break: keep-all;
            font-size: 16px;
            margin-bottom: 10px;
        }
        p {
            text-align: center;
            margin-bottom: 10px;
            background: #e5e5e5;
            display: inline-block;
            width: 130px;
            border-radius: 20px;
            span {
                font-size: 12px;
                line-height: 1.3;
                margin-bottom: 20px;
            }
        }
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
`;
export const SocialDetailWrap = styled.div`
    width: 800px;
    margin: 65px auto 120px;
    white-space: pre-line;
    .btn {
        text-align: center;
        button {
            width: 150px;
            padding: 10px 0;
            font-size: 16px;
            font-weight: 500;
            margin-top: 20px;
            background: #fff;
            border: 1px solid #000;
            cursor: pointer;
        }
    }
`;
export const SocialTitle = styled.div`
    display: block;
    p {
        color: #24dfa5;
        font-size: 16px;
    }
    h1 { font-size: 36px; font-weight: 700; line-height: 1; }
    div { margin: 20px 0; 
        span {
            padding: 2px 20px;
            border: 1px solid #dcdcdc;
            border-radius: 50px;
        }
    }
`;
export const SocialContent = styled.section`
    div {
        img { width: 100%; margin-bottom: 10px; }
        span { display: inline-block; font-size: 32px; font-weight: 600; margin-bottom: 10px; }
        article { margin-bottom: 40px;
            h2 { font-size: 23px; font-weight: 500; margin-bottom: 10px; color: #438aff; word-break: keep-all;}
            p { font-size: 18px;  word-break: keep-all; }
        }
    }
`;

export const DtListWrap = styled.div`
    position: fixed;
    width: 700px;
    z-index: 2;
    top: 0px;
`;

export const SocialDtList = styled.ul`
    position: absolute;
    right: -350px;
    top: 230px;
    width: 200px;
    li {
        font-size: 16px;
        line-height: 25px;
        position: relative;
        border-left: 2px solid #999;
        font-weight: 500;
        padding: 8px 0 8px 10px;
        cursor: pointer;
    }
`;

export const Menu = styled.ul`
    display: flex;
    .tag { margin-bottom: 10px;
        border: 1px solid #438aff; border-radius: 15px; padding: 3px 10px; cursor: pointer; color: #438aff; font-size: 18px; text-align: center;
        &.on {
            background-color: #438aff; border-color: #438aff; color: #fff;
        }
    }
    .swiper-button-prev:after, .swiper-button-next:after { font-size: 12px; font-weight: 600; color: #fff; }
    .swiper-button-next, .swiper-button-prev { top: 25px;
        background-color: #007aff;
        height: 30px;
        width: 30px;
        border-radius: 20px; }
    .swiper-button-next { right: 5px; }
    .swiper-button-prev { left: 5px;}
`;
