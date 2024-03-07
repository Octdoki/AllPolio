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
    .MainPopupBtnWrap { position: fixed; width: max-content; height: auto;  
        flex-direction: column; top: 20px; right: 25%; z-index: 999;
        &:nth-child(2) {
            button{
                border-radius: 50%;
                outline: none;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 55px;
                height: 55px;
                background: none rgb(30, 202, 211);
                padding: 0px; cursor: pointer;
                color : #ffffff; font-size: 18px;
            } 
        }
        .likes {
            button{ 
                color: rgb(255, 255, 255); background: rgb(248, 82, 114); line-height: 14px; letter-spacing: -0.25px; font-weight: 700;
                &.on{color: rgb(30 202 211); }
            }
        } 
        .collection {
            button { border-radius: 50%; outline: none; border: none; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 48px; height: 48px; background: none rgb(255, 255, 255); padding: 0px; cursor: pointer; color: #000;
            }
        }
        p { margin-bottom: 24px; flex-shrink: 0; display: flex; flex-direction: column; -webkit-box-align: center; align-items: center;
            color:  rgb(255, 255, 255); font-size: 13px; line-height: 20px; letter-spacing: -0.25px; font-weight: 500;
            img { width: 55px; height: 55px; border-radius: 50%; }
            span { color: rgb(255, 255, 255); font-size: 13px; line-height: 20px; letter-spacing: -0.25px; font-weight: 500; }
        }
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
    
        .ShowComment{
            border-top: 1px solid rgb(231 231 231);
            display: flex;
            padding: 12px 12px;
            box-sizing: border-box;
            img { width: 50px; height: 50px; border-radius: 50%; }
            .commentWrap{
                display: flex;
                justify-content: space-between;
                width: 100%;
                .comment{
                    margin-left: 20px; word-break: keep-all;
                    strong{
                        cursor: default;
                        margin-bottom: 20px;
                        color: rgb(22, 28, 28);
                        font-size: 16px;
                        line-height: 24px;
                        letter-spacing: -0.5px;
                        font-weight: 700;
                        span{ 
                            color : #A7A7A7;
                            font-weight: 500;
                            margin: 20px 10px;
                            font-size: 14px;
                        }
                    }
                }
                .commentBtn { margin-left: 5px; display: flex;
                    button { border: none; background: none; font-size: 20px; cursor: pointer; }
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
        .profile { position: relative; display: flex; -webkit-box-align: center; align-items: center; flex-direction: row;  
            padding: 20px 0; box-sizing: border-box; justify-content: space-between;
            .proLeft { display: flex; align-items: center;
                img { width: 50px; height: 50px; border-radius: 50%; margin-right: 20px; }
                strong{
                    cursor: default;
                    margin-bottom: 2px;
                    color: rgb(22, 28, 28);
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.5px;
                    font-weight: 700;
                } 
            }
            .profileName { display: flex; align-items: center;
                
                p { display: flex;align-items: center;
                    &.proRight { margin-right: 10px; }
                    &.proCate { color: #a5a5a5; border: 1px solid #ddd; padding: 3px 10px; font-size: 14px; }
                    em{ margin: 0 5px;
                        &.follow {
                            background: rgb(30, 202, 211);
                            color: #fff;
                            padding: 3px 5px;
                            text-align: center;
                            border-radius: 15px;
                            width: 70px;
                            box-sizing: border-box;
                        }
                        &.following {
                            background:rgb(30, 202, 211); color:  #fff;
                            padding: 3px 5px;
                            text-align: center;
                            border-radius: 15px;
                            width: 70px;
                            box-sizing: border-box;
                        }
                        cursor: pointer;
                        color: rgb(44, 48, 48);
                        font-size: 17px;
                        line-height: 24px;
                        letter-spacing: -0.25px;
                        font-weight: 500;
                        word-break: break-word;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: pre-wrap;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                    }
                }
            }
        }
        .popup-MainImg { position: relative;
            img {  width: 100%; }
        }
        .popup-desc{
            overflow: hidden;
            word-break: break-all;
            padding: 50px 0;
            display: inline-block;
            color: rgb(0, 0, 0);
            box-sizing: border-box;
        }
        
        .liksenCollectionWrap {
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            background: rgb(22, 28, 28);
            color: rgb(255, 255, 255);
            padding: 48px 0px 64px;
            cursor: default;
            box-sizing: border-box;
            p { margin-bottom: 10px; }
            .likseCollectionBtnWrap {
                display: flex;
                flex-direction: row;
                -webkit-box-pack: center;
                justify-content: center;
                margin-bottom: 24px;
                box-sizing: border-box;
        
                button { display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 200px; height: auto; padding: 12px; border-radius: 80px; cursor: pointer; color: rgb(22, 28, 28); background: rgb(255, 255, 255); font-size: 16px; line-height: 24px; letter-spacing: -0.5px; font-weight: 700; box-sizing: border-box; flex-direction: column-reverse; border: none; cursor: pointer;
                    i{
                        &.on{
                            color: rgb(30 202 211);
                        }
                    }
                }
                button:first-of-type {
                    margin-right: 12px;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    width: 200px;
                    height: auto;
                    padding: 12px;
                    border-radius: 80px;
                    cursor: pointer;
                    color: rgb(255, 255, 255);
                    background: rgb(248, 82, 114);
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: -0.5px;
                    font-weight: 700;
                    flex-direction: column-reverse;
                }
            }
        }
        .viewslikesWrap { display: flex; flex-direction: row;
            p { flex-direction: row; -webkit-box-align: center; align-items: center; padding-right: 8px; width: fit-content;
                i { width: 16px; height: 16px; fill: white; fill-opacity: 0.01; margin-top: 4px; }
                span { display: inline-block; color: rgb(124, 132, 132); font-size: 14px; line-height: 20px; letter-spacing: -0.25px; font-weight: 500;  margin-left: 5px;  }
            }
        }
        .bottomWrap { display: flex; flex-direction: column; -webkit-box-pack: center; justify-content: center; 
            -webkit-box-align: center; align-items: center; padding: 48px 0px; box-sizing: border-box;
            img { width: 64px; height: 64px; border-radius: 50%; }
            span {
                margin-top: 16px;
                color: rgb(22, 28, 28);
                font-size: 20px;
                line-height: 28px;
                letter-spacing: -0.5px;
                font-weight: 700;
                word-break: break-word;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: pre-wrap;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
            .btnWrap { display: flex; margin-top: 22px; box-sizing: border-box;
                button {
                    display: flex;
                    flex-direction: row-reverse;
                    margin-right: 12px;
                    min-width: 143px;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    cursor: pointer;
                    border: 0px;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: rgb(30, 202, 211);
                    color: rgb(255, 255, 255);
                    padding: 12px 24px;
                    border-radius: 28px;
                    font-size: 14px;
                    line-height: 22px;
                    letter-spacing: -0.25px;
                    font-weight: 700;
                    text-decoration: unset;
                    &:first-child{
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
                        padding: 12px 24px;
                        border-radius: 28px;
                        font-size: 14px;
                        line-height: 22px;
                        letter-spacing: -0.25px;
                        font-weight: 700;
                        text-decoration: unset;
                    }
                }
            }
        }
    }
`