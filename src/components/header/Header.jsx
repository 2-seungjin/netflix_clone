import styled from 'styled-components'
import Logo from '../footer/molecules/Logo'
import LoginBtn from './molecules/LoginBtn'
import LanguageBox from '../reuse/molecules/LanguageBox'

const HeaderMolecules = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  background: blue;
  margin: 20px 0 0 0;
`
const HeaderBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Header = () => {
  return (
    <HeaderMolecules>
      <HeaderBox>
        <Logo />
        <LoginBtn />
        <LanguageBox />
      </HeaderBox>
    </HeaderMolecules>
  );
}

export default Header;
