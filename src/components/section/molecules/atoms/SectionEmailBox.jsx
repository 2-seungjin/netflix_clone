import styled from 'styled-components';
import {IoIosArrowForward} from 'react-icons/io';

const EmailBox = styled.div`
  width: 100%;
`
const EmailInput = styled.input`
  width: 60%;
  height: 50px;
  padding: 10px 10px 0;
  font-size: 16px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #ffa00a;
  min-width: 450px;
  &:focus{
    outline: none;
  }
`
const FormLabel = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`
const EmailBtn = styled.div`
  display: flex;
  width: 20%;
  height: 60px;
  background: red;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  cursor: pointer;
`

const SectionEmailBox = () => {
  return (
    <EmailBox>
      <FormLabel htmlFor="">
        <EmailInput id='emailInput' placeholder='이메일 주소' type='email' />
        <EmailBtn>시작하기<IoIosArrowForward /></EmailBtn>
      </FormLabel>
    </EmailBox>
  );
}

export default SectionEmailBox;
