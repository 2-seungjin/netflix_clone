import styled from 'styled-components';
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.625rem;
  font-weight: 400;
  padding: 70px 45px;
  border-bottom: 8px solid #333;
`
const List = styled.ul`
  display: block;
  width: 75%;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  max-width: 815px;
`
const ListItem = styled.li`
  margin: 0 0 8px 0;
  list-style: none;
`

const QuestionList = () => {

  return (
    <ListBox>
      <h1 style={{marginBottom:'50px'}}>자주 묻는 질문</h1>
      <List>
        <ListItem>넷플릭스란 무엇인가요?</ListItem>
        <ListItem>넷플릭스 요금은 얼마인가요?</ListItem>
        <ListItem>어디에서 시청할 수 있나요?</ListItem>
        <ListItem>멤버십을 해지하려면 어떻게 하나요?</ListItem>
        <ListItem>넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?</ListItem>
        <ListItem>아이들이 넷플릭스를 봐도 좋을까요?</ListItem>
      </List>
    </ListBox>
  );
}

export default QuestionList;
