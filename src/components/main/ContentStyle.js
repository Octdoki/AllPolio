import styled from 'styled-components'
export const MainCon = styled.section`
    .swiper-button-prev:after, .swiper-button-next:after { font-size: 12px; font-weight: 600; color: #fff; }
    .swiper-button-next, .swiper-button-prev { top: 25px;
        background-color: #007aff;
        height: 30px;
        width: 30px;
        border-radius: 20px; }
    .swiper-button-next { right: 5px; }
    .swiper-button-prev { left: 5px;}
    .tit {
        text-align: left; font-weight: 600; margin-bottom: 30px;
    }
    .mainPort { padding-top: 20px;
        ul { display: flex; flex-wrap: wrap; 
            li { width: 23%; margin-bottom: 20px; margin-right: 37px; margin-bottom: 40px;
                &:nth-child(4n) { margin-right: 0; }
                img { 
                    width: 100%; border-radius: 10px;  height: 200px; cursor: pointer;
                }
                span {
                    &.cateName { display: inline-block;
                        margin: 15px 0 10px 0;
                        background: #f1f1f1;
                        color: #6a6b6c;
                        border-radius: 10px;
                        font-size: 15px;
                        padding: 5px 15px;
                    }
                }
                div { display: flex; justify-content: space-between; margin-top: 10px; align-items: center;
                    .thum {
                        img { border-radius: 50px; width: 35px; height: 35px; margin-right: 20px; }
                        span { font-size: 14px; }
                    }
                    i { svg {margin-right: 5px; color:#24dfa5;} }
                }
            }
        }
        .moreBtn { 
            font-size: 16px;
            padding: 10px 0;
            width: 200px;
            margin: 0 auto;
            text-align: center;
            background-color: #ffffff;
            border: 1px solid #333;
            transition: .3s; cursor: pointer;
            &:hover { background-color: #333; color: #fff; transition: .3s; border-color: #ddd; }
        }
    }

`
export const UpdatePort = styled.section`
    background-color: #252525;
    .inner { 
        h2 { color: #fff; margin-bottom: 30px;}
        .curPort { margin-top: 10px; color: #fff;
            ul { display: flex; flex-wrap: wrap; justify-content: space-between;
                li { width: 23%; margin-bottom: 20px; margin-right: 37px;
                &:nth-child(4n) { margin-right: 0; }
                    img { 
                        width: 100%; border-radius: 10px;  height: 200px; cursor: pointer;
                    }
                    span {
                        &.cateName { display: inline-block;
                            margin: 15px 0 10px 0;
                            background: #000;
                            color: #d4d2d2;
                            border-radius: 10px;
                            font-size: 15px;
                            padding: 5px 15px;
                        }

                    }
                    div { display: flex; justify-content: space-between; margin-top: 10px; align-items: center;
                        .thum {
                            img { border-radius: 50px; width: 35px; height: 35px; margin-right: 20px; }
                            span { font-size: 14px; }
                        }
                        i { svg {margin-right: 5px; color:#24dfa5;} }
                    }
                }
            }
        }
    }

`
export const Interview = styled.section`
    .tit-box { display: flex;  justify-content: space-between;  margin-bottom: 30px; align-items: baseline;
        a { display: inline-block; line-height: 3; }
        button { 
            border: none;
            background-color: #007aff;
            color: #ffffff;
            border-radius: 13px;
            height: 40px;
            width: 100px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
        }
        .tit {text-align: left; font-weight: 600; }
    }
    .mainPort {  display: flex; justify-content: space-between; 
        article {  width: 22%; text-align: left;
            cursor: pointer;    margin-right: 50px;
            div {
                margin-bottom: 25px;
                img {
                    border-radius: 10px;
                    width: 100%;
                }
            }
            h3 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            p {text-align: center; margin-bottom: 10px;
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
    }
`

export const Career = styled.section`
    background-color: #f7f7f7;
    .tit-box { margin-bottom: 30px;  display: flex; justify-content: space-between; align-items: baseline;
        a { display: inline-block; line-height: 3; }
        button { 
            border: none;
            background-color: #007aff;
            color: #ffffff;
            border-radius: 13px;
            height: 40px;
            width: 100px;
            font-weight: 600;
            font-size: 14px; cursor: pointer;
        }
    }
    ul { display: flex;  justify-content: space-between; 
        li {  width: 450px; cursor: pointer;position: relative;
            &:before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 250px; background-color: #000000b5; opacity: 0; transition: .4s; border-radius: 10px; }
            &:after { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0; transition: .4s; color: #ffffff; font-size: 28px; font-weight: 500; }
            &:nth-child(1):after { content: '교육';  }
            &:nth-child(2):after { content: '이벤트'; }
            &:nth-child(3):after { content: '네트워킹'; }

            &:hover:before  {
                opacity: 1; transition: .4s;
            }
            &:hover:after {
                opacity: 1; transition: .4s;
            }
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
            img { border-radius: 10px; 
                
                
            }
        }
    }

`