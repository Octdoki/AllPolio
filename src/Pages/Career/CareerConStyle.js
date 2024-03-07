import styled from 'styled-components'

export const CareerConWrap = styled.div`
position: relative;
.title{
    width: 100%;
    background-color: #E5E5E5;
    margin: 10px auto;
    height: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
}
.con1{
    display: flex;
    p{
      img{
        width: 400px;
        height: 290px;
      }
    }
    .con1Content{
        margin-left : 20px ;
        .popCate{
            font-size: 14px;
            font-weight: 300;
            color: #438AFF;
        }
        strong{
            font-size: 20px;
            font-weight: 500;    word-break: keep-all;
        }
        .date{
            color: #8A8A8A;
  
        }
        .content{
            margin-top: 10px;
            margin-bottom: 30px;
        }
        .part{
            margin-bottom: 10px;
            border: 1px solid #438aff;
            padding: 13px 20px;
            cursor: pointer;
            color: #438aff;
            font-size: 20px;
            text-align: center;
            margin-right: 10px;
        }
        .on {    background-color: #438aff;
            border-color: #438aff;
            color: #fff;
        }
    }
}
.con2 {
 margin: 30px auto;
    p{
        img{ width: 100%; }
    }
    
}
.btnwrap { 
    position: fixed;
    bottom: 15%;
    left: 72%;
    width: 48px;
    height: 113px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 9999px;
    border: 1px solid hsla(225,5%,46%,.22);
    background: #fff;
    box-shadow: 0 4px 4px rgba(0,0,0,.05);
    .share{font-size: 20px;}
    .line{margin: 7px 0;
        width: 16px;
        border: 1px solid hsla(225,5%,46%,.22);
    }
}
`