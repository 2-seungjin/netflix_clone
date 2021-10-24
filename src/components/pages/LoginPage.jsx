import styled from 'styled-components';
import Logo from  '../footer/molecules/Logo'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import KakaoLoginBtn from '../reuse/molecules/atoms/KakaoLoginBtn'

const Page = styled.div`
  height: 1000px;
  background: #141414;
  z-index: 100;
`
const HeaderBox = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  padding: 0 49px;
`
const FromBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  top: -200px;
`
const H1 = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  font-weight: unset;
`
const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2em 0;
`
const Users = styled.div`
  margin: 0 2vw 0 0;
  display: flex;
  flex-direction: column;
  color: grey;
  &:hover{
    color: #fff;
  }
  &:hover img{
    border: .3em solid white;
  }
`
const UserImg = styled.img`
  width: 12vw;
  height: 12vw;
  max-width: 200px;
  max-height: 200px;
  box-sizing: border-box;
  border-radius: 8px;
`
const UserText = styled.span`
  margin: .6em 0;
  min-height: 1.8em;
  font-size: 1.3vw;
`
const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 12vw;
  height: 12vw;
  max-width: 200px;
  max-height: 200px;
  box-sizing: border-box;
  border-radius: 8px;
`
const LoginPage = () => {
  return (
    <Page>
      <HeaderBox>
        <Logo />
      </HeaderBox>
      <FromBox>
        <H1>넷플릭스를 시청할 프로필을 선택하세요.</H1>
        <UserBox>
          <Link to='/contentspage'>
            <Users>
              <UserImg src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_960_720.png" alt="user"/>
              <UserText>bibibig</UserText>
            </Users>
          </Link>
          <Users>
            <UserImg src="https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdu5KdtiflRWJUzteVfpEsqXOKWYu7C2CTLaH5IhLhjvXp7kOtL-HVS3eeu0k43h-l7MbxUpPJZedbC9sE6q1Jo.png?r=acf" alt="user"/>
            <UserText>키즈</UserText>
          </Users>
          <Users>
            <UserImg src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_960_720.png" alt="user"/>
            <UserText>user3</UserText>
          </Users>
          <Users>
            <ProfileBox><BsFillPlusCircleFill style={{fontSize:'56px'}}/></ProfileBox>
            <UserText>user3</UserText>
          </Users>
        </UserBox>
      </FromBox>
    </Page>
  );
}

export default LoginPage;
