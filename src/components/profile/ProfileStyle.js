import styled from "styled-components";

export const ProfileWrap = styled.div`
    width: 400px;border: 1px solid #ddd;height: 700px;text-align: center;padding: 40px 0;box-sizing: border-box;border-radius: 5px;
    .img-box{
        width: 170px;height: 170px;border-radius: 50%;border: 1px solid #ddd;margin: auto;padding-top: 8px;box-sizing: border-box;margin-bottom: 30px;
        img {width: 150px;height: 150px;border: 1px solid #ddd;border-radius: 100%;}
    }
    .nickname {font-size: 24px;margin-bottom: 20px;}
    .info {
        span {display: block;font-size: 16px;}
    }
    .btn {margin: 30px 0;
        button {width: 320px;height: 60px;border-radius: 5px;border: 1px solid #2C5BF0;font-size: 16px;color: #2C5BF0;background-color: #fff;cursor: pointer;}
    }
    .disabled {text-align: left;text-indent: 40px;margin-top: 20px;font-size: 18px;color: #a7a7a7;cursor: pointer;}
`

export const ProfilePopupWrap = styled.div`
    .bg {
        position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.2);
        &.off {display: none;}
    }
    .popup {width: 500px;height: 700px;background-color: #fff;position: fixed;left: 50%;top: 50%;transform:translate(-50%,-50%);border-radius: 5px;z-index: 1;}
`

export const ProfilePopupFormWrap = styled.form`
    padding: 80px 50px;
    img {border-radius: 100%;width: 170px;height: 170px;margin-bottom: 50px;}
    p{  
        position: relative;
        label {display: block;text-align:left;font-size: 14px;color: #aaa;}
        input[type=text] {width: 100%;height:40px;border: none;border-bottom: 1px solid #aaa;margin-bottom: 20px;outline:none;font-size: 16px;}
        button {
            width: 197px;height: 50px;margin-right: 5px;margin-top: 20px;border: none;background-color: #2c5bf0;color: #fff;font-size: 16px;border-radius: 5px;
            &:last-child { margin-right: 0;background-color: #e5e5e5;color: #6e6e6e;}
        }
        &:first-child label { font-size: 22px;position: absolute; left: 65%;bottom: 50px;transform:translateX(-50%);background-color: #6e6e6e;color: #fff;width: 40px;height: 40px;line-height: 40px;text-align: center;border-radius: 100%;cursor: pointer;}
        /* &:first-child input[type=file] { position: absolute;left: 65%;bottom: 50px;transform:translateX(-50%);width: 0;height: 0;padding: 0;overflow: hidden;border: 0; } */
        &:first-child input[type=file] { position: absolute;left: 90%;bottom: 50px;transform:translateX(-50%);width: 0;height: 0;overflow: hidden;}
    }
`

export const ProfilePopupEditWrap = styled.form`
    padding: 80px 50px;
    img {border-radius: 100%;width: 170px;height: 170px;margin-bottom: 50px;}
    p{  
        position: relative;
        label {display: block;text-align:left;font-size: 14px;color: #aaa;}
        input[type=text] {width: 100%;height:40px;border: none;border-bottom: 1px solid #aaa;margin-bottom: 20px;outline:none;font-size: 16px;}
        button {
            width: 197px;height: 50px;margin-right: 5px;margin-top: 20px;border: none;background-color: #2c5bf0;color: #fff;font-size: 16px;border-radius: 5px;
            &:last-child { margin-right: 0;background-color: #e5e5e5;color: #6e6e6e;}
        }
        &:first-child label { font-size: 22px;position: absolute; left: 65%;bottom: 50px;transform:translateX(-50%);background-color: #6e6e6e;color: #fff;width: 40px;height: 40px;line-height: 40px;text-align: center;border-radius: 100%;cursor: pointer;}
        /* &:first-child input[type=file] { position: absolute;left: 65%;bottom: 50px;transform:translateX(-50%);width: 0;height: 0;padding: 0;overflow: hidden;border: 0; } */
        &:first-child input[type=file] { position: absolute;left: 90%;bottom: 50px;transform:translateX(-50%);width: 0;height: 0;overflow: hidden;}
    }
`

export const WithdrawalWrap = styled.div`
        .bg {
        position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.2);
        &.off {display: none;}
    }
    .popup {
        width: 500px;height: 750px;background-color: #fff;position: fixed;left: 50%;top: 50%;transform:translate(-50%,-50%);border-radius: 5px;padding: 80px 50px ;box-sizing: border-box;z-index: 1;
        h4 {font-size: 24px;font-weight: 600;margin-bottom: 10px;}
        >p {color: #a7a7a7;margin-bottom: 30px;}
        ul {
            text-align: left;
            li {
                background-color: #f1f1f1;margin-bottom: 20px;border-radius: 5px;padding:13px 20px;box-sizing: border-box;
                strong {font-weight: 500;margin-bottom: 5px;display: block;}
                p { color: #a7a7a7;}
            }
        }
        .btn {
            display: flex;
            button {
                height: 50px;cursor: pointer;
                &:first-child {width: 400px;margin-right: 10px;border-color: #a7a7a7;color: #a7a7a7;}
                &:last-child {background-color: #2c5bf0; color: #fff;}
            }
        }
    }
`