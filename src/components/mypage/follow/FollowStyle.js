import styled from "styled-components";

export const FollowEmptyWrap = styled.div`
    position: relative;margin-top:20px ;
    .empty {
        position: absolute;left: 50%;transform:translateX(-50%);top:150px;
        strong {
            display: block;
            i {
                font-size: 150px;color: #ddd;line-height: 1;
            }
        }
        span {color: #aaa;}
    }
`

export const FollowListWrap = styled.ul`
    display: flex;position: relative;flex-direction:column;
    li {
        border-radius: 5px;border: 1px solid #e5e5e5;padding: 15px 25px;box-sizing: border-box;margin-top: 20px;display: flex; align-items: center;
        img {border-radius: 100%;width: 70px;height: 70px;}
        strong {display: block;width: 600px;text-align: left;margin-left: 25px;margin-right: 50px;}
        button {margin-left: 50px;width: 130px;height: 50px;line-height: 40px;border-radius: 5px;border: 1px solid rgb(30, 202, 211);color: rgb(30, 202, 211);font-size: 16px;background-color: rgb(255,255,255);}
    }
`