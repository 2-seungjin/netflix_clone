import styled from 'styled-components';
import {IoMdArrowDropdown} from 'react-icons/io';
import {VscBroadcast} from 'react-icons/vsc';

const SelectBox = styled.div`
  display: flex;
  background: rgba(0,0,0,.4);
  border: 1px solid #aaa;
  margin-right: 20px;
  min-width: 95px;
  justify-content: center;
  align-items: center;
`
const Select =styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  color: #fff;
  border: none;
  text-align: center;
`
const SelectLabel = styled.label`
  display: flex;
  align-items: center;
`
const LanguageBox = () => {

  return (
    <SelectBox>
      <SelectLabel htmlFor="language">
      <VscBroadcast />
      <Select id='language'>
        <option value="KR">한국어</option>
        <option value="US">영어</option>
      </Select>
      <IoMdArrowDropdown style={{fontSize:'2rem'}}/>
      </SelectLabel>
    </SelectBox>
  );
}

export default LanguageBox;
