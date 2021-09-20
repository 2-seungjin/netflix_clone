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
  word-break:keep-all;
`;
const ImgBox = styled.div`
  max-height: 100%;
`
const LeftSubImgBox = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  flex-direction: row;
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
const LeftSubImg = styled.img`

`
const LeftDownloadImg = styled.img`
`
const LeftSubText = styled.div`
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
const Section = (props) => {
  console.log(props);
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
              <LeftImg src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
              <LeftSubImgBox>
                <LeftSubImg src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' />
                <LeftSubText></LeftSubText>
                <LeftDownloadImg src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' />
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
                <h1>TV로 즐기세요.</h1>
                <H2>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</H2>
              </TextBox>
              <ImgBox>
                <Img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' />
                <VideoBox>
                  <Video controls autoPlay loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                  </Video>
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
