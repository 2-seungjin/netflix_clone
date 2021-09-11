import styled from 'styled-components'
import Header from '../header/Header'

const Background = styled.div`
  height: 777px;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/a296fd0c-d8d9-426a-901f-64ec0173632c/KR-ko-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  border-bottom: 8px solid #222;
`
const MainSection = () => {

  return (
    <Background>
      <Header />
    </Background>
  );
}

export default MainSection;
