import styled from "styled-components";

export const LikeListWrap = styled.ul`
    display: flex;margin-top: 20px;position: relative;
    li {
        margin-right: 20px;
        > img {width: 300px;height: 220px;border-radius: 5px;}
        div {
            display: flex;justify-content: space-between;align-items: center;margin-top: 10px;
            img {width: 30px;height: 30px;border-radius: 100%;vertical-align: top;}
            p {font-weight: 500;}
        }
    }
`

export const LikeEmptyWrap = styled.li`
    position: absolute;left: 50%;transform:translateX(-50%);top:150px;
    strong {
            display: block;
            i {
                font-size: 150px;color: #ddd;line-height: 1;
            }
        }
    span {color: #aaa;}
`