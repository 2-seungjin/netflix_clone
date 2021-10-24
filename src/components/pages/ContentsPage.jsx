import styled, {createGlobalStyle} from 'styled-components';
import ContentsHeader from '../header/ContentsHeader'
import MainMovie from '../section/MainMovie'
import {useEffect, useState} from 'react';
import PopUp from '../section/PopUp'


const GlobalStyle = createGlobalStyle`
  body{
    background: #141414;
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    word-break:keep-all;
    font-size: .75vw;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    h1 {
      font-size: 3.125rem;
    }
    h2 {
      font-size: 1.625rem;
    }
    ul, li {
      list-style: none;
    }
    a{
      text-decoration: none;
    }
  }
  
`
const LoadingBox = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Loading = styled.img`
  width: 400px;
  height: 400px;
`
const Page = styled.div`
  width: 100%;
  background: #141414;
  display: flex;
  flex-direction: column;
`

const ContentsPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) return <LoadingBox><Loading src='https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif?cid=ecf05e47vq6p31r158f4dnjhf61j9v3rep09aza9fqg53j71&rid=giphy.gif&ct=g' /></LoadingBox>;
  return (
    <Page>
      <GlobalStyle />
      <ContentsHeader />
      <MainMovie />
      <PopUp />
    </Page>
  );
}

export default ContentsPage;
//<H1>콘텐츠 페이지 미완성</H1>
//       <Link to='/'>
//         <LinkH1>메인 페이지로 이동</LinkH1>
//       </Link>
