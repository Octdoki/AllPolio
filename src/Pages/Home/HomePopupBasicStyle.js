import styled from "styled-components";

export const MainPopup = styled.div`
  display: flex; width: 100vw; height: 100%; overflow: auto; box-sizing: border-box; position: fixed; top: 0px; left: 0px; z-index: 100; /* background-color: rgba(0, 0, 0, 0.8); */
    .closeBtn {
        background: none;
        border: none;
        font-size: 32px;
        font-weight: 700;
        color: #333; cursor: pointer;
        position: absolute;
        top: 10px; right: 10px;

    }


    .LeaveCommentWrap { position: fixed; flex-direction: column; top: 50px; right: 60px; width: 420px; background: #fff; border-radius: 10px; padding: 20px;
        .LeaveComment { justify-content: space-between; margin: 25px 0;
            p {
                input{ width: 300px; height: 33px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px; }
            }
            button {
                display: inline-flex;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                cursor: pointer;
                text-align: center;
                box-sizing: border-box;
                background-color: rgb(247, 249, 249);
                border: 1px solid rgb(228, 232, 232);
                color: rgb(44, 48, 48);
                padding: 10px 12px;
                border-radius: 28px;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -0.25px;
                font-weight: 700;
                text-decoration: unset;
                margin-left: 10px;
                &:first-child{
                    background: none;
                    border: none;
                    position: absolute;
                    top: 0; right: 0;
                    font-size: 24px;
                    font-weight: 600; margin-left: 0;
                }
            }
        
        }
    

    }
`
export const MainContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    height: min-content;
    min-height: 400px;
    margin: 10px auto;
    border-radius: 10px;
    box-sizing: border-box;
  
`
export const MainPopupWrap = styled.div`

    position: relative;
    display: flex;
    box-sizing: border-box;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
    padding: 20px 45px;
    border-radius: 8px;
    border-radius: 8px;
    background: rgb(255, 255, 255);
    border: none;
    min-width: 100%;
    .popBG { width: 100%; height: 100%; position: fixed; top: 0px; z-index: -1; left: 0px; background-color: rgba(0, 0, 0, 0.8); cursor: pointer; }
    .inner { max-width: 700px; box-sizing: border-box; padding: 0;

    }
`