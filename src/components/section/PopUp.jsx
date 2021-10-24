import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiThumbsDown, FiThumbsUp} from 'react-icons/fi'
import StartBtn from '../reuse/molecules/atoms/StartBtn'
import PopUpMovieItem from './molecules/PopUpMovieItem'
import {AiOutlineClose} from 'react-icons/ai';
import PopUpFooter from './molecules/PopUpFooter'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {addMovie} from '../reduxs/Redux'
const PopUpBox = styled.div`
  position: absolute;
  width: 100%;
  
  background: rgba(0,0,0,.7);
`
const MoviesBox = styled.div`
  position: relative;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ImgBox = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: linear-gradient(none, #333);
`
const MovieImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`
const BtnBox = styled.div`
  
`
const TitleImg = styled.img`
  width: 20vw;
  height: 10vw;
  margin-left: 2vw;
  margin-bottom: 2vw;
  position: relative;
  top: 25vw;
`
const IconBorder = styled.div`
  border-radius: 25px;
  width: 3vw;
  height: 3vw;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: .5vw;
  cursor: pointer;
`
const IconBox = styled.div`
  display: flex;
  margin-left: 2vw;
  position: relative;
  top: 25vw;
  & .icons{
    font-size: 1.5vw;
  }
`
const MovieLiseBox = styled.div`
  background: #141414;
  position: relative;
  top: -6vw;
  width: 90%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow:0 0 10vw 2em #141414;
  padding: 1vw 3vw;
  box-sizing: border-box;
`
const MovieExplanationBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.3vw;
`
const ExplanationLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const ExplanationRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  font-size: 1vw;
`
const LeftTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2vw;
  & .margins {
    margin-right: .5vw;  
  }
`
const Percentage = styled.div`
  color: #46d369;
`
const Launched = styled. div`
  
`
const ViewAge = styled.div`
  font-size: 2vw;
  width: 3vw;
  background: orange;
  color: black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-weight: 800;
`
const ViewLength = styled.div`
`
const MovieQuality = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 1.1vw;
  width: 2vw;
  text-align: center;
`
const ExplanationText = styled.div`

`
const CharacteristicsBox = styled.div`
`
const Titles = styled.div`
  display: inline;
  color: #777;
`
const Appear = styled.div`
  margin-bottom: 1vw;
`
const Genre = styled.div`
  margin-bottom: 1vw;
`
const Foreman = styled.div`
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4vw;
`
const ContentsTitle = styled.div`
  font-size: 2.2vw;
  font-weight: 700;
  margin-bottom: 2vw;
`
const MovieListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CloseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .6;
  width: 2.5vw;
  height: 2.5vw;
  background: gray;
  border-radius: 45px;
  font-size: 2vw;
  position: absolute;
  margin-top: 2vw;
  left: 85vw;
  cursor: pointer;
`
const PopUp = () => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    axios.get('https://yts.mx/api/v2/list_movies.json').then(response => setDatas(response.data.data.movies));
  }
  useEffect(() => {
    getData();
    setTimeout(function(){
        setLoading(true);
    },3000)
  },[]);
  const popCloses = () => {
    const popUps = document.getElementById('popUp');
    // popUps.style.display='none';
  }

  const addMovie = () => {

  }
  return (
    <PopUpBox onClick={popCloses} id='popUp'>
      <MoviesBox>
        <ImgBox>
          <CloseIcon><AiOutlineClose /></CloseIcon>
          <MovieImg src="https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy7Ls52a6S7O0UVGuMH_sTvI2jCa7v3IW18Si2dcYW1MYzg2ZzgcozlDQYUh-3wnuCzwBBYg1zl5DnWb7twCoPEHGmA.webp?r=663" />
          <BtnBox>
            <TitleImg src="https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABb5I3rONxNoCMCNxxVnbUDzK21EMKd8UtVYC3Oy96iltQANNS7y1FYDXwstDfeE-8BhR_2JNzwINq1WccqzuHDtmxBEMflW8WWA.webp?r=beb" />
            <IconBox>
              <StartBtn />
              <IconBorder>
                <AiOutlinePlus className='icons' onClick={addMovie}/>
              </IconBorder>
              <IconBorder>
                <FiThumbsUp className='icons'/>
              </IconBorder>
              <IconBorder>
                <FiThumbsDown className='icons'/>
              </IconBorder>
            </IconBox>
          </BtnBox>
        </ImgBox>
      </MoviesBox>
      <MovieLiseBox>
        <MovieExplanationBox>
          <ExplanationLeft>
            <LeftTextBox>
              <Percentage className='margins'>99% 일치</Percentage>
              <Launched className='margins'>2014</Launched>
              <ViewAge className='margins'>12</ViewAge>
              <ViewLength className='margins'>2시간 21분</ViewLength>
              <MovieQuality className='margins'>HD</MovieQuality>
            </LeftTextBox>
            <ExplanationText>
              스파이더맨도 벅찬 강적, 라이노와 일렉트로가 다가온다! 위험천만한 그의 삶, 연인 그웬은 절대 끌어들이지 않아야 하는데. 영웅이 치러야 할 대가는 도대체 어디까지인가.
            </ExplanationText>
          </ExplanationLeft>
          <ExplanationRight>
            <CharacteristicsBox>
              <Appear><Titles>출연 : </Titles>엔드루 가필드, 엠마스톤, 제이미 폭스, 더보기</Appear>
              <Genre><Titles>장르 : </Titles>영화.SF, 미국 영화, 액션 & 어드벤처</Genre>
              <Foreman><Titles>영화 특징 : </Titles>긴장감 넘치는 흥미진진</Foreman>
            </CharacteristicsBox>
          </ExplanationRight>
        </MovieExplanationBox>
        <Contents>
          <ContentsTitle>비슷한 콘텐츠</ContentsTitle>
          <MovieListBox>
            {loading ? datas.map((v,i) =>
              <PopUpMovieItem key={i} movieUrl={v.background_image} year={v.year} title={v.title} />
            ) : false}
          </MovieListBox>
        </Contents>
        <PopUpFooter />
      </MovieLiseBox>
    </PopUpBox>
  )
}
//{movieLise.map((v, i) =>
//                <PopUpMovieItem key={i} movieUrl={v.background_image} year={v.year} title={v.title}/>)}


//             )}
export default PopUp;
