import styled from 'styled-components'

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
`
const FooterTitle = styled.div`
  font-size: 2vw;
  margin-bottom: 2vw;
`
const TextBox = styled.div`
  font-size: 1.1vw;
  display: flex;
  flex-direction: row;
  margin-bottom: .5vw;
`
const Productions = styled.div`
  display: inline;
  color: gray;
  
`
const Texts = styled.div`
`
const PopUpFooter = () => {
  return (
    <FooterBox>
      <FooterTitle><b>어메이징 스파이더맨 2</b> 상세 정보</FooterTitle>
      <TextBox>
        <Productions>감독 : </Productions>
        <Texts>마크 웨브</Texts>
      </TextBox>
      <TextBox>
        <Productions>출연 : </Productions>
        <Texts>앤드루 가필드, 엠마 스톤, 제이미 폭스, 데인 드한, 콜므 포어, 펄리시티 존스, 폴 지어마티, 샐리 필드, 엠베스 데이비츠, 캠벨 스코트, 마튼 초카스, 루이스 캔셀미, 맥스 찰스, B.J. 노박</Texts>
      </TextBox>
      <TextBox>
        <Productions>각본 : </Productions>
        <Texts>엘릭스 커츠먼, 로베르토 오르시, 제프 핑크너, 제임스 밴더빌트</Texts>
      </TextBox>
      <TextBox>
        <Productions>장르 : </Productions>
        <Texts>영화.SF 미국 영화, 액션 & 어드벤처</Texts>
      </TextBox>
      <TextBox>
        <Productions>영화 특징 : </Productions>
        <Texts>긴장감 넘치는, 흥미진진</Texts>
      </TextBox>
      <TextBox>
        <Productions>관람등급 : </Productions>
        <Texts>12세이상관람가</Texts>
      </TextBox>
    </FooterBox>
  );
}

export default PopUpFooter;
