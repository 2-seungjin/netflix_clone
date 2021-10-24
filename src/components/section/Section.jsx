import styled from 'styled-components';


const Sections = styled.div`
  height: 473px;
  box-sizing: border-box;
  border-bottom: 8px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 45px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
`;
const TextBox = styled.div`
  text-align: left;
  width: 52%;
  padding: 0 3rem 0 0;
`;
const LeftTextBox = styled.div`
  text-align: left;
  width: 52%;
  padding: 0 0 0 3rem;
`
const H2 = styled.p`
  font-size: 1.625rem;
  font-weight: 400;
  margin: .75em 0 .25em;
`;
const ImgBox = styled.div`
  max-height: 100%;
`
const LeftSubImgBox = styled.div`
  position: relative;
  top: -120px;
  left: 50px;
  display: flex;
  flex-direction: row;
  padding: .5em .75em;
  background: #000;
  width: 3em;
  min-width: 15em;
  height: 3.75em;
  text-align: left;
  box-shadow: 0 0 2em 0 #000;
  border-radius: .75em;
  border: 2px solid rgba(255,255,255,.25);
  justify-content: space-between;
  
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`
const LeftImg = styled.img`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  right: 4rem;
`
const LeftSubText = styled.div`
  flex-grow:.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const VideoBox = styled.div`
  position: absolute;
`
const Video = styled.video`
  width: 85%;
  height: 85%;
  position: relative;
  left: 75px;
  top: -335px;
  vertical-align: baseline;
`
const TowNdVideo = styled.video`
  width: 70%;
  height: 80%;
  position: relative;
  left: 110px;
  top: -380px;
  vertical-align: baseline;
`
const Section = (props) => {
  return (
    <Sections>
      {props.sections === 1
        ? <ContentBox>
        <TextBox>
          <h1>TV로 즐기세요.</h1>
          <H2>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</H2>
        </TextBox>
        <ImgBox>
          <Img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
          <VideoBox>
            <Video controls autoPlay loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4"
              />
            </Video>
          </VideoBox>
        </ImgBox>
      </ContentBox> :
        props.sections === 2
        ? <ContentBox>
            <ImgBox>
              <LeftImg src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='Img'/>
              <LeftSubImgBox>
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' alt='Img'/>
                <LeftSubText>
                  <div>기묘한 이야기</div>
                  <div style={{color:'#0071EB'}}>저장 중...</div>
                </LeftSubText>
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' alt='Img'/>
              </LeftSubImgBox>
            </ImgBox>
            <LeftTextBox>
              <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
              <H2>간편하게 저장하고 빈틈없이 즐겨보세요.</H2>
            </LeftTextBox>
          </ContentBox> :
        props.sections === 3
        ? <ContentBox>
              <TextBox>
                <h1>다양한 디바이스에서 시청하세요.</h1>
                <H2>각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</H2>
              </TextBox>
              <ImgBox>
                <Img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt='Img'/>
                <VideoBox>
                  <TowNdVideo controls autoPlay loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                  </TowNdVideo>
                </VideoBox>
              </ImgBox>
            </ContentBox> :
        props.sections === 4
        ? <ContentBox>
              <ImgBox>
                <LeftImg src='https://occ-0-4532-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf' />
              </ImgBox>
            <LeftTextBox>
              <h1>어린이 전용 프로필을 만들어 보세요.</h1>
              <H2>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</H2>
            </LeftTextBox>
            </ContentBox> : null
      }
    </Sections>
  );
}

export default Section;
