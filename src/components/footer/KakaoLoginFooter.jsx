import styled from 'styled-components'
import LanguageBox from '../reuse/molecules/LanguageBox'

const PageFooterBox = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  color: #b3b3b3;
  align-items: start;
  justify-content: center;
  padding: 3vw 6vw;
  box-sizing: border-box;
  font-size: 1.1vw;
`
const FooterTitle = styled.div`
  width: 100%;
  margin-bottom: 16px;
`
const TextListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2vw;
`
const Lists = styled.div`
  width: 25%;
  margin: 8px 0;
`

const CompanyBox = styled.div`
  margin-top: 2vw;
`
const CompanyText = styled.div`
  margin: 2px 0;
`
const KakaoLoginFooter = () => {

  return (
    <PageFooterBox>
      <FooterTitle>
        질문이 있으신가요? 문의 전화:  080-001-9587
      </FooterTitle>
      <TextListBox>
        <Lists>자주 묻는 질문</Lists>
        <Lists>고객 센터</Lists>
        <Lists>이용 약관</Lists>
        <Lists>개인정보</Lists>
        <Lists>쿠키 설정</Lists>
        <Lists>회사 정보</Lists>
      </TextListBox>
      <LanguageBox />
      <CompanyBox>
        <CompanyText>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</CompanyText>
        <CompanyText>대표: 레지널드 숀 톰프슨</CompanyText>
        <CompanyText>이메일 주소: korea@netflix.com</CompanyText>
        <CompanyText>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</CompanyText>
        <CompanyText>사업자등록번호: 165-87-00119</CompanyText>
        <CompanyText>클라우드 호스팅: Amazon Web Services Inc.</CompanyText>
        <CompanyText>공정거래위원회 웹사이트</CompanyText>
      </CompanyBox>
    </PageFooterBox>
  );
}

export default KakaoLoginFooter;
