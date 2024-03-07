import { BrowserRouter,  Routes,  Route  } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import Career from "./Pages/Career/Career";
import Login from "./Pages/Login/Login";
import MyPage from "./Pages/myPage/MyPage";
import Social from "./Pages/Social/Social";
import GlobalStyle from "./styled/GlobalStyle";
import Join from "./Pages/Login/Join";
import Complete from "./Pages/Career/Complete";
import SocialDetail from './components/social/SocialDetail';
import Portfolio from "./Pages/myPage/portfolio/Portfolio";
import Likes from "./Pages/myPage/like/Likes";
import Follow from "./Pages/myPage/follow/Follow";
import Profile from "./components/profile/Profile";
import Withdrawal from "./components/profile/Withdrawal";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="/career" element={<Career />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/social">
                <Route index element={<Social />} />
                <Route path=":socialID" element={<SocialDetail />} />
            </Route>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<MyPage />}>
              <Route index element={<Portfolio />} />
              <Route path=":profileID" element={<Profile />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="like" element={<Likes />} />
              <Route path="follow" element={<Follow />} />
            </Route>
            <Route path="/login" element={<Login />}>
              <Route path=":withdrawalID" element={<Withdrawal />} />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;

