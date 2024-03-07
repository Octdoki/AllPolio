import styled from 'styled-components'

export const HeaderWrap = styled.header`
    width:100%; border-bottom: 1px solid #ddd; position: sticky;
    .inner {
        width: 1400px; margin: auto; position: relative;
        .start-container {
            align-items: center;
            display: flex;
            flex-direction: row;
            height: 75px;
            .logo-wrap {width: 150px;
                img { width: 100%; }
            }
            .gnb { align-items: center; display: flex; flex-direction: row; justify-content: center; margin-left: 22px;
                li { margin-right: 20px;
                    a {
                        &.on { color: #007aff; }
                        align-items: center;
                        color: rgb(44, 48, 48);
                        display: flex;
                        font-size: 15px;
                        font-weight: 600;
                        line-height: 18px;
                        margin: 0px 10px;
                        position: relative;
                        text-align: center;
                        text-decoration: none;
                        transition: all 0.1s ease 0s;
                        letter-spacing: -0.4px;
                        min-width: max-content;
                    }
                }
            }
        }
        
        

   }
`
export const NavWrap = styled.nav`
    .nav {
        position: relative;
        .gnb {
            position: absolute;left: 200px;top: 20px;display: flex;
            li {
                margin-left: 80px;
            &:hover {border-bottom: 2px solid #000;}
            a { font-size: 16px;font-weight: 500;}
            }
        }
    }
`

export const TopMenu = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 56px;
    justify-content: flex-end;  flex-shrink: 0;    position: absolute;
    right: 0;
    .search-wrap {
        display: flex;
        margin-right: 5px;
        min-width: 280px;
        max-width: 280px;
        position: relative;
        width: 100%;
        height: 32px;

        input {
            background-color: rgb(247, 249, 249);
            border: 1px solid #007aff;
            border-radius: 19px;
            padding: 8px 12px 8px 40px;
            width: 100%; outline-color: #007aff;
        }
        .search-icon {
            fill: rgb(68, 68, 68);
            height: 18px;
            left: 12px;
            position: absolute;
            top: 8px;
            width: 18px;
        }
    }
    .auth-wrap {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-right: 0.5px;
        min-width: 129px;
        li {
            a {
                &.sign-in {
                    align-items: center;
                    color: rgb(44, 48, 48);padding: 0 7px;
                    cursor: pointer;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 16px;
                    text-align: center;
                    text-decoration: none;
                }
                &.sign-up{
                    align-items: center;
                    background: #007AFF;
                    border-radius: 15px;
                    color: rgb(255, 255, 255);
                    cursor: pointer;
                    display: flex;
                    font-size: 13px;
                    font-weight: 700;
                    height: 35px;
                    justify-content: center;
                    letter-spacing: -0.4px;
                    line-height: 16px;
                    margin-left: 5px;
                    margin-right: 5px;
                    padding: 0px 14px;
                    text-decoration: none;
                }
            }
            .sign-out { font-size: 14px;color: rgb(44,48,48);font-weight: 400;line-height: 16px;text-align: center;text-decoration:none; background-color: #fff;border: none;align-items: center;cursor: pointer;}
        }
    }
`