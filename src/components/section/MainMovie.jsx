import styled from 'styled-components';
import MovieExplanation from './molecules/MovieExplanation'
import MovieLists from '../section/MovieLists'
import Footer from '../footer/Footer'

const BackGround = styled.div`
  width: 100%;
  height: 56.25vw;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 1050px) {
    
  }
`
const BackImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`
const BackImgGradient = styled.div`
  background-image: linear-gradient(to top,rgba(0,0,0,.8) 3vw,rgba(0,0,0,0));
  width: 100%;
  height: 100%;
`
const MainMovie = () => {
  const imgUrls = [
    'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWdlr1W9q01La4vV7bRpPcwDb9wsaGjXQnKsVR3uJ7VwutHimXv09o9UB5MU_rycJhBqINd3DHz0rDANoMWt5RaeSYZTVdRdh8ZlZD5ifQKcT9Ml_t2kxDbHqJDy.jpg?r=5b4',
    'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWd-19JbWhBNdKpWPlfDmx354VaR4k0T0AQeiKDbGrQreSq0uanOe7yeW1enseKeVJekaUciIwUmQnIMFLwzYWFcOe0leLVG7tsYIN4wgURF9jhwzaOxT42GQAdu.jpg?r=5bf',
    'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8RHgip5s7ZxdK-JIBHSb6jLrD14cf4K_vru4LuYFn_A62AHNNU5JW1wNAPbnbtTDR4WDLLFJAd6BAjMdDOVWcp4cUSBzNgVEP874WvFbVqnXaEfvA60pXoI2JE.jpg?r=0e8',
    'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTH5LQfcygUWbmAvACujFKfQkvgB0cAOGrUAhZBlIYCpDX5S9gBfyIQwq6GsZF0u14FoCmbFoYNb7Tr_ZA0yAHrvXEzOhLdJXGyRoSM1JvAMhxeXnrMKCKhSQrdgug.jpg?r=b12',
    'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRu25rFU43a8aPQE7lSoId8rQipleNTnGNHxyUoSvQULhkmTGh0THFlsVLKtW-Qf_1h8lkoNVlGk1XygQ5KthD7s9FmRWNIpnnTViYYlo13o93d1tIzhdHCS15FK.jpg?r=b84'
  ]
  return (
    <BackGround>
      <BackImg src='https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS4GoLUUGs1s6mN7TH6vDucaxDZOxDtMzEIVzeN-IHT0eB0NUJWG5kEpUEl81J20d3WZWcICdqiww-0K5IThRWN0OrSu.webp?r=13b'/>
      <BackImgGradient>
        <MovieExplanation />
      </BackImgGradient>
      <MovieLists title='넷플릭스 인기 콘텐츠' imgs={imgUrls}/>
      <MovieLists title='지금 뜨는 콘텐츠' imgs={imgUrls}/>
      <MovieLists title='넷플릭스 인기 콘텐츠' imgs={imgUrls}/>
      <MovieLists title='비비빅 님이 시청 중인 콘텐츠' imgs={imgUrls}/>
      <MovieLists title='미국 TV 프로그램' imgs={imgUrls}/>
      <MovieLists title='한국이 만든 콘텐츠' imgs={imgUrls}/>
      <MovieLists title='오직 넷플릭스에서' imgs={imgUrls}/>
      <Footer />
    </BackGround>
  );
}

export default MainMovie;


// 1. 상황공유
// 2. 조금만 모르면 질문하기
