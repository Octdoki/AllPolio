import { FooterWrap } from "./footerStyle";

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <div className="as-wrap">
                    <div className='logo'>
                        <img src="./images/logo.svg" alt="logo" />
                    </div>
                    <div className="site">
                        <p>기업소개</p>
                        <p>광고문의</p>
                        <p>고객센터</p>
                        <p>이용약관</p>
                        <p>블로그</p>
                        <p>개인정보 처리방침</p>
                    </div>
                </div>
                <div className='footerDesc'>
                    <p>(주)원티드랩대표이사 | 이복기 </p>
                    <p> 서울특별시 송파구 올림픽로 300, 롯데월드타워 35층| 전화번호: 02-539-7118 <br/></p>
                    <p>사업자등록번호: 299-86-00021 | 통신판매번호: 2020-서울송파-3147 |유료직업소개사업등록번호: (국내) 제2020-3230259-14-5-00018호</p>
                </div>
                <div className="terms">
                        <p>채용서비스 문의</p>
                        <p>원티드스페이스 문의</p>
                        <p>원티드긱스 정책</p>
                        <p>프리온보딩  정책</p>
                        <p>취업지원시스템 정책</p>
                        <p>IR 정책</p>
                    </div>

                <div className="copy-wrap">
                    <em>© 2023 Wanted Lab, Inc.</em>
                    <p className="sns">
                        <a href=""><i className="xi-facebook-official"></i></a>
                        <a href=""><i className="xi-naver-square"></i></a>
                        <a href=""><i className="xi-instagram"></i></a>
                        <a href=""><i className="xi-youtube-play"></i></a>
                        <a href=""><i className="xi-apple"></i></a>
                        <a href=""><i className="xi-google-play"></i></a>
                    </p>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;