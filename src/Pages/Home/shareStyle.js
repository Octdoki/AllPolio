import styled from "styled-components";

export const ShareWrap = styled.div`

h2 { color : #000000; }
.content{
    display: flex;
    align-items: center;
    border-top: 1px dotted #A7A7A7;
    border-bottom: 1px dotted #A7A7A7;
    /* margin-top: 24px; */
    /* border-bottom: ; */
    p{    margin-top: 24px;}
    span{
        display: block;
        font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color : #000;
    margin-left: 20px;
   
    }
}
.iconWrap { 
    display: flex;
    flex-flow: wrap;
    padding: 32px 0px;
    /* justify-content: space-between; */

    /* width: 50px; */
    .iHuSbw {
        width: calc(20% + 0px);
        /* width: 120px; */
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;

}   
}
.share-url-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    padding: 12px 14px;
    border: 1px solid rgb(225, 225, 225);
    border-radius: 2px;
    background-color: rgb(248, 248, 248);
    color: rgb(68, 68, 68);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    .copy-button {
    position: absolute;
    top: 0px;
    right: 0px;
    display: block;
    flex-shrink: 0;
    padding: 12px 14px;
    border-radius: 2px;
    border-left: 1px solid rgb(225, 225, 225);
    background-color: white;
    border-bottom: 1px solid rgb(225, 225, 225);
    cursor: pointer;
    color: #000;
}
}

`