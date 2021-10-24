import styled from 'styled-components';



const Btn = styled.div`
  background: #e50914;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
`

const LoginBtn = () => {

  return <Btn>로그인</Btn>;
}

export default LoginBtn;
