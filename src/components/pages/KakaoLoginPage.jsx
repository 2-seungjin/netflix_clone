import LoginHeader from '../header/LoginHeader'
import LoginForm from '../section/LoginForm'
import styled from 'styled-components'
import KakaoLoginFooter from '../footer/KakaoLoginFooter'

const Page = styled.div`
  height: 80vw;
  width: 100%;
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/22ade83e-5cf7-46b8-aca2-3bd2c9465526/KR-ko-20211011-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  display: flex;
  flex-direction: column;
  
`


const KakaoLoginPage = () => {

  return(
    <Page>
      <LoginHeader />
      <LoginForm />
      <KakaoLoginFooter />
    </Page>
  );
}

export default KakaoLoginPage;
