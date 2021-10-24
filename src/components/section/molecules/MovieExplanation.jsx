import styled from 'styled-components'
import StartBtn from '../../reuse/molecules/atoms/StartBtn'
import InformBtn from '../../reuse/molecules/atoms/InformBtn'
import MainTitleImg from './atoms/MainTitleImg'
import MovieContent from './atoms/MovieContent'
import ResetBtn from './atoms/ResetBtn'


const ExplanationBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`
const FlexLeft = styled.div`
  width: 45%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  margin-left: 4vw;
`
const FlexRight = styled.div`
  display: flex;
  position: relative;
  top: 15vw;
  right: -40vw;
`
const AgeBox= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const BtnBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`
const ImgBox = styled.div`

`
const TitleTextBox = styled.div`
  width: 80%;
  margin-bottom: 30px;
`
const Line = styled.div`
  height: 32px;
  width:0;
  border: 2px solid white;
  margin-left: 15px;
  margin-right: 15px;
`
const Age = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 1.4;
  border-radius: 4px;
  background: orange;
  font-weight:900;
`
const MovieExplanation = () => {
  return (
    <ExplanationBox>
      <FlexLeft>
        <ImgBox>
          <MainTitleImg />
        </ImgBox>
        <TitleTextBox>
          <MovieContent />
        </TitleTextBox>
        <BtnBox>
          <StartBtn />
          <InformBtn />
        </BtnBox>
      </FlexLeft>
      <FlexRight>
        <AgeBox>
          <ResetBtn />
          <Line />
          <Age>15</Age>
        </AgeBox>
      </FlexRight>
    </ExplanationBox>
  )
}

export default MovieExplanation;
