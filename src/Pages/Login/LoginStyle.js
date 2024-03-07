import styled from "styled-components";


export const LoginWrap = styled.div`
    h2 {padding: 100px 0 20px;text-align: center;font-size: 24px;}
    .inp-wrap {
        padding: 50px;display: flex; flex-direction: column;align-items: center;margin-bottom: 100px;
        p {
            input {display: block;width: 400px;height: 50px;margin-bottom: 20px;text-indent: 20px;border-radius: 5px;border: 1px solid #a7a7a7;font-size: 16px;}
            label {text-align:left;font-size: 12px;margin-bottom: 10px;display:block;}
            button { width: 410px;height: 54px;border: 1px solid #a7a7a7;background-color: #2C5BF0;color: #fff;border-radius: 5px;cursor: pointer;font-size: 16px;
                /* &:disabled {background-color: #2C5BF0;color: #fff;} */
            }
        }
    }
`

export const JoinWrap = styled.div`
    h2 {padding: 100px 0 20px;text-align: center;font-size: 24px;}
    form {
        padding: 50px;display: flex; flex-direction: column;align-items: center;margin-bottom: 100px;
        p {
                input[type=text],input[type=email],input[type=password] {display: block;width: 400px;height: 50px;margin-bottom: 20px;text-indent: 20px;border-radius: 5px;border: 1px solid #a7a7a7;font-size: 16px;}
                label {text-align:left;font-size: 12px;margin-bottom: 10px;display:block;}
                button { width: 410px;height: 54px;border: 1px solid #a7a7a7;background-color: #2C5BF0;color: #fff;border-radius: 5px;cursor: pointer;font-size: 16px;
                    &:disabled {background-color: #e5e5e5;color: #191919;}
                }
                span {
                    font-size: 14px;
                    &.on {color: green;}
                    &.off {color:red;}
                }
                .email-duplication {
                    position:relative;width: 407px;
                    button {
                        width: 100px;background-color: transparent;color: #2c5bf0;border: none;position: absolute;top: 70%;transform:translateY(-50%);right: 0px;
                    }
                }
                .pw-condition {
                    display: block;width: 400px;font-size:14px;margin-top: -15px;padding-bottom:20px ;
                }
        }
        div{
            input[type=checkbox] {width: 20px;height: 20px;margin-right: 5px;vertical-align: top;}
            .all-chk {
                width: 412px;padding: 20px 0;border-bottom: 1px solid #e5e5e5;
            }
            .sel-chk {
                width: 408px;padding-bottom: 20px;padding-top: 20px;
                li {margin-bottom: 5px;
                    label {display: inline-block;font-size: 15px;}
                }
            }
            
        }
            .tel-number {
                position: relative;
                label {font-size: 12px;margin-bottom: 10px;display: block;}
                input[id=tel] {width: 290px;}
                button {width: 100px;position: absolute;right: 0;top: 32%;border: 1px solid #2C5BF0;transform:translateY(-50%) ;background-color: #fff;color: #2c5bf0;}
            }
    }
`