import styled from 'styled-components'
import Header from '../header/Header'
import MainSectionBox from './molecules/MainSectionBox'
const Background = styled.div`
  height: 777px;
  background-image:linear-gradient( rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.4) ,rgba(0, 0, 0, 0.8) ), url("https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/a296fd0c-d8d9-426a-901f-64ec0173632c/KR-ko-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  border-bottom: 8px solid #222;
`
const MainSection = () => {

  return (
    <Background>
      <Header />
      <MainSectionBox />
    </Background>
  );
}

export default MainSection;
