import styled from 'styled-components'
import Logo from '../footer/molecules/Logo'
import LoginBtn from './molecules/LoginBtn'
import LanguageBox from '../reuse/molecules/LanguageBox'

const HeaderMolecules = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  margin: 20px 0 0 0;
`
const HeaderBox = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const FormBox = styled.div`
  display: flex;
`
const Header = () => {
  return (
    <HeaderMolecules>
      <HeaderBox>
        <Logo />
        <FormBox>
          <LanguageBox/>
          <LoginBtn />
        </FormBox>
      </HeaderBox>
    </HeaderMolecules>
  );
}

export default Header;
