import styled from 'styled-components'

export const CateWrap = styled.div`
.btnWrap{
    margin: 50px auto;
    strong{
        display: block;
        font-size: 20px;
        margin: 20px auto;
        position: relative;
   
    }
    .orderBy{
            display: flex;
            .btn{
                margin-bottom: 10px;
                border: 1px solid #438aff;
                border-radius: 15px;
                padding: 3px 10px;
                cursor: pointer;
                color: #438aff;
                font-size: 16px;
                text-align: center;
                margin-right: 10px;
     
            }
            .first{
                    font-size: 20px;
            }
            .on {    background-color: #438aff;
                    border-color: #438aff;
                    color: #fff;
                }
    
       
        }
        .okBtn {
            position: absolute;
            top: 90%;
            left: 50%;
            margin: -25px 0 0 -25px;
        }
}
  

`