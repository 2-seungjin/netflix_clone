import styled from 'styled-components'

const Footers = styled.div`
  padding: 70px 45px 0;
`;
const FooterBox = styled.div`
  margin: 0 133px;
`;
const FooterBox2 = styled.div`
  margin: 0 auto;
  padding-bottom: 20px;
  color: #757575;
  font-size: 1em;
  width: 90%;
`;
const FooterTitle = styled.p`
  margin: 0 0 30px;
`;
const FooterQuestionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
`;
const QuestionListItem = styled.li`
  width: 220px;
  min-width: 120px;
  margin: 0 0 16px;
  padding: 0 12px 0 0;
  font-size: 13px;
`;
const A = styled.a`
  color: #757575;
`;
const AddressTitle = styled.div`
  font-size: 13px;
  margin: 24px 0 13px;
`
const AddressBox = styled.ul`
  padding: 0;
`;
const AddressItem = styled.li`
  font-size: 12px;
`;
const Footer = () => {
  const questions = [
    { id:1, question:'자주묻는 질문'},
    { id:2, question:'고객 센터'},
    { id:3, question:'계정'},
    { id:4, question:'미디어 센터'},
    { id:5, question:'투자정보(IR)'},
    { id:6, question:'입사 정보'},
    { id:7, question:'넷플릭스지원 디바이스'},
    { id:8, question:'이용약관'},
    { id:9, question:'개인정보'},
    { id:10, question:'쿠키 설정'},
    { id:11, question:'회사 정보'},
    { id:12, question:'문의하기'},
    { id:13, question:'속도 테스트'},
    { id:14, question:'법적 고지'},
    { id:15, question:'오직 넷플릭스에서'},
  ];
  const address =[
    {id:1, address:'넷플릭스서비스코리아 유한회사 통신판매입신고번호 : 제2018-서울종로-0426호 전화번호: 080-001-9587'},
    {id:2, address:'대표: 레지널드 숀 톰프슨'},
    {id:3, address:'이메일 주소: korea@netflix.com'},
    {id:4, address:'주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161'},
    {id:5, address:'사업자등록번호: 165-87-00119'},
    {id:6, address:'클라우드 호스팅: Amazon Web Services Inc.'},
    {id:7, address:'공정거래위원회 웹사이트'},
  ];

  return(
    <Footers>
      <FooterBox>
        <FooterBox2>
          <FooterTitle>질문이 있으신가요? 문의 전화: 080-001-9587</FooterTitle>
          <FooterQuestionList>
            {questions.map(question =>
              <QuestionListItem key={question.id}>
                <A href="#">{question.question}</A>
              </QuestionListItem>
            )}
          </FooterQuestionList>
          <button>btn</button>
          <AddressTitle>넷플릭스 대한민국</AddressTitle>
          <AddressBox>
            {address.map(address =>
              <AddressItem key={address.id}>{address.address}</AddressItem>
            )}
          </AddressBox>
        </FooterBox2>
      </FooterBox>
    </Footers>
  );
}

export default Footer
