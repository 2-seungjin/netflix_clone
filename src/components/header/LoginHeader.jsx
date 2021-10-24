import styled from 'styled-components'
import Logo from '../footer/molecules/Logo'

const HeaderBox = styled.div`
  display: flex;
  padding: 0 2vw;
  height: 5vw;
  align-items: center;
  margin-bottom: 5vw;
`

const LoginHeader = () => {
  return (
    <HeaderBox>
      <Logo />
    </HeaderBox>
  );
}

export default LoginHeader;
