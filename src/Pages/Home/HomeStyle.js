import styled from 'styled-components'

export const VisualWrap = styled.div`
.swiper-button-prev:after, .swiper-button-next:after { font-size: 20px; font-weight: 600; color: #fff; }
.swiper-button-next, .swiper-button-prev {  background-color: #0000008a; height: 47px; width: 47px; }
.swiper-button-next { right: 5px; }
.swiper-button-prev { left: 5px;}
    width: 100%; overflow: hidden; margin-top: 30px;
    img { width: 100%;     border-radius: 10px;}
`

export const MainWrap = styled.div`
    &.main{}
    .inner { padding: 65px 0 }
    h2 { font-size:30px; font-weight:700 }
`