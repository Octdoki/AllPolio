import styled from 'styled-components'

export const SubVisWrap = styled.div`
    width: 100%; overflow: hidden; margin: 30px 0;
    .swiper-pagination-bullet { width: 10px; height:10px; background: transparent; border: 2px solid #fff; opacity: 1; }
    .swiper-pagination-bullet-active { width: 10px; transition: width .5s; border-radius: 10px; background: #fff; border: 2px solid transparent; }
    img { width: 100%;  height: 400px; border-radius: 20px;}


`

export const CareerTab = styled.div`
    display: flex;  justify-content: space-between; 
    ul {display: flex; 
        li { cursor: pointer;
            color: #cacaca;
            font-size: 18px;
            margin-right: 20px;
            span { display: inline-block;
                &.on { font-weight: 500; color:#252525; border-bottom: 1px solid #000; }
            }
            
        }
    }
    button {  border: none; background-color: transparent; padding: 0; font-size: 27px; color: #4d4d4d; cursor: pointer; }
    
`

export const CareerGallery = styled.section`
    margin-top: 30px; display: flex; flex-wrap: wrap; justify-content: space-between;
    li {  width: 330px; margin-bottom: 30px; max-width: 330px; cursor: pointer;
        &.on { opacity: .5;}
        h2 {
            margin: 10px 0 5px 0;
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            letter-spacing: -0.5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .imgBox {
            width: 100%;
            height: 226px;
            border-radius: 4px;
            overflow: hidden;
            box-sizing: border-box;
            border: 1px solid rgb(228, 228, 228);
            img {     width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s ease 0s;
                image-rendering: -webkit-optimize-contrast;
            }
        }
        span { 
            display: inline-block;
            margin-top: 15px;
            background-color: #f2efef;
            color: #969393;
            padding: 3px 8px;
            border-radius: 8px;
            font-size: 14px;
        }
    }
    
`