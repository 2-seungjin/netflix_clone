import styled from 'styled-components';
import SectionEmailBox from './atoms/SectionEmailBox'

const SectionBox = styled.div`
  width: 70%;
  height: 500px;
  margin: 0 auto;
`
const FlexBox = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
`
const H1 = styled.h1`
  display: block;
  font-size:4rem;
  margin: 0;
  max-width: 640px;
  font-weight: bold;
  word-break:keep-all;
`
const H2 = styled.h2`
  font-weight: 400;
`
const MainSectionBox = () => {
  return (
    <SectionBox>
      <FlexBox>
        <H1>영화, TV 프로그램을 무제한으로.</H1>
        <H2>다양한 디바이스에서 시청하세요 언제든 해지하실 수 있습니다.</H2>
        <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
        <SectionEmailBox />
      </FlexBox>
    </SectionBox>
  );
}

export default MainSectionBox;
