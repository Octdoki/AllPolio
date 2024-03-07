import styled from 'styled-components'

export const FooterWrap = styled.footer`
    width: 100%;  border-top: 1px solid #f0f0f0;
    .inner {color: #6e6e6e;}
    .as-wrap {
        display: flex; justify-content: space-between;
        .logo{margin-top: 30px;margin-bottom: 10px;
            img {width: 150px; }   }
        .site {
            display: flex;margin-top: 30px;margin-bottom: 10px;
            p {margin-right: 60px; font-size: 14px;}
        }
    }
    .footerDesc { display: grid; flex-wrap: wrap; margin: 28px 0 32px; grid-gap: 8px 24px; gap: 8px 24px;
        p {
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 138.5%;
            letter-spacing: .25px;
            color: #8a8a8a;
        }
    }
    .terms { display: flex; flex-wrap: wrap; margin: 28px 0 32px; grid-gap: 8px 24px; gap: 8px 24px;
        p {
            font-size: 13px;
            letter-spacing: .0194em;
            line-height: 18px;
            color: rgba(23,23,23,.61);
            font-weight: 500;
        }

    }
    .copy-wrap{
        border-top: 1px dotted #E5E5E5;
        height: 100%;     margin-top: 5xs0px;    display: flex;     align-items: center;   justify-content: space-between;

        em{     font-size: 14px;
            letter-spacing: .0194em;
            line-height: 18px;
            margin-top: 20px;
        }
        .sns {
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            height: 100%;
            margin-top: 20px;
    
            a {
                font-size: 24px;
                i {margin-right: 15px;vertical-align: middle;color: #6e6e6e;} 
            }
        }
    }
    
`

