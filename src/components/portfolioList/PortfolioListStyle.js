import styled from "styled-components";

export const PortfolioListWrap=styled.ul`
    display: flex;flex-wrap: wrap;
    li { margin-right: 24px;margin-top: 20px;
        > img {width: 300px;height: 220px;}
        .box {
            display: flex;justify-content: space-between;padding: 10px 5px;
            > img {width: 50px;height: 50px;border-radius: 50%;}
            strong {line-height: 50px;margin-left: 10px;}
        }
        &:nth-child(3n) {margin-right: 0;}
    }
`
export const PortfolioAddWrap=styled.div`
    .bg {width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);position: fixed;left: 0;top: 0;
        &.off {display:none;}
    }
    form {

        width: 1400px;height: 800px;background-color: #fff;z-index:1;position: fixed;left: 50%;top: 80px;transform:translateX(-50%);padding: 30px 50px;box-sizing: border-box;overflow: scroll;
        h2 {text-align:left;margin-top: 30px;font-size: 30px;margin-bottom: 50px;}
        h3 {text-align:left;margin-top: 20px;font-size:20px;}

        .con1 {
            display: flex;margin-top: 20px;
            p {
                position: relative;margin-right: 20px;
                input[type=radio] {position: absolute;width: 0;height: 0;padding: 0;}
                label {
                    cursor: pointer;
                    img {width: 150px;border-radius: 5px;}
                }
                input[type=radio]:checked + label {
                    outline: 5px solid #2C5BF0;border-radius: 3px;
                }
            }
        }
        .title {
            padding-right: 30px;text-align: left;
            input[type=text] {display: block;margin-right: 30px;width: 1300px;height: 60px;border: none;border-bottom: 1px solid #ddd;outline:none;text-indent: 5px;font-size: 16px;
                &::placeholder {color: #a7a7a7;}
            }
        }
        .con3 {
            margin-top: 20px;
            input[type=date] {text-align: left;width: 600px;height: 60px;border: none;border-bottom: 1px solid #ddd;font-size: 16px;}
            label {margin: 0 44px;font-size: 16px;}
        }
        .category {

            display: flex;justify-content: space-between;flex-wrap:wrap;margin-top: 20px;
        }
        .url {
            margin-top: 20px;
            input[type=text] {margin-right: 30px;width: 1300px;height: 60px;border: none;border-bottom: 1px solid #ddd;font-size: 16px;text-indent: 5px;outline:none;
                &::placeholder {color: #a7a7a7;}
            }
        }
        .detail {
            margin-top: 20px;
            textarea {width: 1300px;margin-right: 30px;padding:10px 5px;box-sizing: border-box;border-color: #ddd;font-size: 16px;outline:none;border-radius: 5px;
                &::placeholder {color: #a7a7a7;}
            }
        }
        > p {
            margin-top: 50px;text-align: right;
            button {width: 200px;height: 60px;margin-left: 20px;border: none;border-radius: 5px;font-size: 16px;
                &:first-child {background-color: #2C5BF0;color: #fff;}
                &:last-child {border-color: #ddd;background-color: #e5e5e5;}
            }
        }
    }
`

export const TechnologyWrap = styled.div`
    text-align: left;position: relative;
    button {position: relative;width: 1300px;height: 60px;border: none;border-bottom: 1px solid #ddd;background-color: #fff;text-align: left;font-size: 16px;color: #a7a7a7;cursor: pointer;}
    i {position: absolute;right: 15px;top: 50%;transform:translateY(-50%);color: #6e6e6e;font-size: 20px;}
    .selectBox {
        width: 1300px;border: 1px solid #438AFF;border-radius: 5px;margin-top: 5px;padding: 5px;box-sizing: border-box;position: absolute;left: 0;top: 60px;background-color: #fff;
        li {padding: 5px 10px;color: #6e6e6e;cursor: pointer;width: 1300px;
            &.on {color: #438aff;}
        }
    }
`

export const TechnologyTegWrap = styled.ul`
    display: flex;flex-wrap:wrap;margin-top: 20px;
    li {
        padding:5px 10px;box-sizing: border-box;border: 1px solid #ddd;border-radius: 5px;margin-right: 20px;color: #6e6e6e;cursor: pointer;
        &.on {border: 1px solid #438aff;color: #438aff;}
    }
`

export const DatepickerWrap = styled.div`
    
`