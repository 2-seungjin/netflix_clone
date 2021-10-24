import styled from 'styled-components';
import KakaoLoginBtn from '../reuse/molecules/atoms/KakaoLoginBtn'
import {AiFillFacebook} from 'react-icons/all'

const PageBox = styled.div`
  background: rgba(0, 0, 0, 0.75);
  width: 35vw;
  height: 45vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5vw 5vw;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 10vw;
`
const LoginTitleBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3vw;
  margin-bottom: 2.5vw;
`
const LoginTitle = styled.div`
  font-size: 3vw;
  font-weight: 700;
`
const TextInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const TextInput = styled.input`
  height: 4vw;
  border-radius: 7px;
  background: #333;
  border: none;
  margin-bottom: 16px;
  color: #fff;
  padding-left: 1.5vw;
  &:focus{
    outline: none;
  }
`
const CheckBox = styled.div`
  color: #b3b3b3;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-size: 1.1vw;
  align-items: center;
  
`
const CheckLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`
const Check = styled.input`
  
`
const CheckLabel = styled.label`
`
const CheckText = styled.div`
`
const HelpText = styled.div`
`
const FaceBookLogin = styled.div`
  margin-top: 3vw;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  font-size: 1.1vw;
  color: #b3b3b3;
  & svg{
    font-size: 2vw;
  }
`
const FaceBookLoginText = styled.div`
`

const NetflixJoinBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 1vw;
  font-size: 1.2vw;
  color: #b3b3b3;
`
const NetflixJoinText = styled.div`
  
`
const NetflixJoinLink = styled.div`
  color: #fff;
  margin-left: .6vw;
`
const RobotTestBox = styled.div`
  width: 100%;
  
  margin-top: 1vw;
  font-size: 1.1vw;
  color: #b3b3b3;
`
const RobotText = styled.div`
  display: inline;
`
const RobotLink = styled.div`
  display: inline;
  color: #0071EB;
`
const LoginForm = () => {
  return (
    <PageBox>
      <LoginTitleBox>
        <LoginTitle>로그인</LoginTitle>
      </LoginTitleBox>
      <TextInputBox>
        <TextInput type={'email'} placeholder={'이메일 주소 또는 전화번호'}/>
        <TextInput type={'password'} placeholder={'비밀번호'}/>
      </TextInputBox>
      <KakaoLoginBtn />
      <CheckBox>
        <CheckLeftBox>
          <Check type={'checkbox'} id={'checked'}/>
          <CheckLabel form={'checked'}/>
          <CheckText>로그인 정보 저장</CheckText>
        </CheckLeftBox>
        <HelpText>도움이 필요하신가요?</HelpText>
      </CheckBox>
      <FaceBookLogin>
        <AiFillFacebook />
        <FaceBookLoginText>Facebook으로 로그인</FaceBookLoginText>
      </FaceBookLogin>
      <NetflixJoinBox>
        <NetflixJoinText>Netflix 회원이 아닌가요?</NetflixJoinText>
        <NetflixJoinLink>지금 가입하세요.</NetflixJoinLink>
      </NetflixJoinBox>
      <RobotTestBox>
        <RobotText>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.<RobotLink>자세히 알아보기</RobotLink></RobotText>
      </RobotTestBox>
    </PageBox>
  )
}

export default LoginForm;
