import styled from 'styled-components';


const Sections = styled.div`
  height: 473px;
  border-bottom: 8px solid #333;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  text-align: left;
  margin: -5% 0;
  width: 52%;
  padding: 0 3rem 0 0;
`;
const H2 = styled.p`
  font-size: 1.625rem;
  font-weight: 400;
  margin: .75em 0 .25em;
`;

const Section = () => {
  return (
    <Sections>
      <ContentBox>
        <TextBox>
          <h1>TV로 즐기세요.</h1>
          <H2>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</H2>
        </TextBox>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="img-1"/>
      </ContentBox>
    </Sections>
  );
}

export default Section;
