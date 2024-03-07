import styled from "styled-components";

export const SocialVisual = styled.div`
    width: 100%;
    overflow: hidden;
    margin: 30px 0;
    .swiper-pagination-bullet { width: 10px; height:10px; background: transparent; border: 2px solid #fff; opacity: 1; }
    .swiper-pagination-bullet-active { width: 10px; transition: width .5s; border-radius: 10px; background: #fff; border: 2px solid transparent; }
    img {
        width: 100%;
        height: 400px;
        border-radius: 20px;
    }
`;

export const SocialWrap = styled.div`
    h2 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`;
