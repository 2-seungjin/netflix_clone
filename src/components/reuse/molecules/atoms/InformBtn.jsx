import styled from 'styled-components';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const InformBtnBox = styled.button`
  width: 150px;
  height: 45px;
  padding-left: 1.2rem;
  padding-right: 1.4rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: white;
  display: flex;
  flex-direction: row;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  background: rgba(109,109,110,0.7);
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  &:hover{
    border: 1px solid white;
    background: rgba(109,109,110,0.5);
  }
  @media screen and (max-width: 1050px) {
    width: 18vw;
    height: 5vw;
  }
`
const BtnText = styled.div`
  box-sizing: border-box;
  font-size: 1vw;
  font-weight: bold;
  line-height: 2.4rem;
  margin-left: 8px;
`

const InformBtn = () => {
  return (
    <InformBtnBox>
      <AiOutlineInfoCircle size={28}/>
      <BtnText>상세 정보</BtnText>
    </InformBtnBox>
  )
}

export default InformBtn;
