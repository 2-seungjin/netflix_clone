import styled from 'styled-components';
import {BiReset} from 'react-icons/bi';
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  width: 37px;
  height: 37px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  cursor: pointer;
`

const ResetBtn = () => {
  return (
      <BtnBox onClick={ () => window.location.reload()}>
        <BiReset size={28} color={'#fff'}/>
      </BtnBox>
  )
}

export default ResetBtn;
