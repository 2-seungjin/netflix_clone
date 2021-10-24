import styled from 'styled-components';
import {MdPlayArrow} from 'react-icons/md';

const StartBtnBox = styled.button`
  width: 116px;
  height: 45px;
  padding-left: 1.2rem;
  padding-right: 1.4rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: white;
  color: black;
  display: flex;
  flex-direction: row;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1050px) {
    width: 13vw;
    height: 5vw;
  }
  &:hover{
    background: rgba(255,255,255,0.7);
  }
`

const BtnText = styled.div`
  font-size: 1vw;
  font-weight: bold;
  line-height: 2.4rem;
  margin-left: 8px;
`

const StartBtn = () => {
  return (
    <StartBtnBox>
      <MdPlayArrow size={28}/>
      <BtnText>재생</BtnText>
    </StartBtnBox>
  )
}

export default StartBtn;
