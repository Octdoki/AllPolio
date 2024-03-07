import styled from "styled-components"
export const MypageWrap = styled.div`
    .inner{display: flex;padding-top: 50px;}
    article {
        margin-right: 10px;
        &:last-child {margin-right: 0;}
        &.mypage-main {
            border: 1px solid #ddd;width: 990px;text-align: center;padding: 20px;box-sizing: border-box;
            .tab-menu {
                display: flex;
                li {
                    padding: 20px 10px;box-sizing: border-box;font-size: 16px;
                    a{
                        &.on{color: #2C5BF0;font-weight: 500;}
                    }
                    &:first-child {padding-left: 0;}
                }
            }
            .line {width: 950px;border-bottom: 1px solid #ddd;}
        }
    }
`