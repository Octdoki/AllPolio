import styled from 'styled-components'

export const HeaderWrap = styled.header`
    border-bottom:1px solid #000;
    .inner { height:150px; }
    h1 {
        position:absolute; left:0; top:50%; transform: translateY(-50%); 
        a {
            font-size:70px;
        }        
    }
    .login {
      position: absolute; right: 0; top: 10px;
      color:blue;
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
    .searchWrap{
        position: absolute;
        display: flex;
    margin: 0px 16px;
    min-width: 280px;
    max-width: 280px;
    position: relative;
    width: 100%;
    height: 33px;
    left: 860px;
    top: 18px;
    input{
        background-color: rgb(247, 249, 249);
    border: 1px solid rgb(225, 225, 225);
    border-radius: 19px;
    padding: 8px 12px 8px 40px;
    box-sizing: border-box;
    width: 100%;
    }
    button {
        background: none;
        border: none;
        position: absolute;
        top: 23%;
        left: 5px;
        i{
            fill: rgb(68, 68, 68);
    height: 30px;

    position: absolute;

    width: 30px;
    font-size: 18px;
}
        }
    }
    
    .top-menu {
        position: absolute;right: 0;top: 15px;display: flex;
        li {
            margin-left: 30px;width: 92px;height: 37px;border: 1px solid #6E6E6E;line-height: 37px;text-align: center;border-radius: 10px;
            a {
                font-size: 16px;color: #6e6e6e;
              
            }
            &:first-child {border: none;}
            &:last-child  {
                background-color: #0C0C0C; 
                a{ color: #ffffff;}
            }

        }
    }
`


export const FooterWrap = styled.footer`
    background-color: #000;
    .inner { height:250px;}
    h2 { padding-top:80px; font-size:20px; color:#fff }
`

export const SpinnerWrap = styled.div`
.spinner {
  position: fixed; z-index: 10; left: 0; top: 0;
  width:100%; height:100%;
}
.spinner-circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  padding: 0.5rem 1rem;
}

.spinner-circle:before {
  z-index: 5;
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px dashed skyblue;
  width: 50px;
  height: 50px;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  animation: loading 1s linear infinite;
}

.spinner-circle:after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px dashed skyblue;
  width: 50px;
  height: 50px;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  animation: loading 1s ease infinite;
  z-index: 10;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`