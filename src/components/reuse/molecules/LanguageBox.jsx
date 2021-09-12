import styled from 'styled-components';


const SelectBox = styled.div`
`
const Select =styled.select`
  padding: 8px 22px;
  background: rgba(0,0,0,.4);
  border: 1px solid #aaa;
  color: #fff;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

`
const LanguageBox = () => {

  return (
    <SelectBox>
      <Select>
        <option value="KR">한국어</option>
        <option value="US">영어</option>
      </Select>

    </SelectBox>
  );
}

export default LanguageBox;
