import styled from 'styled-components';

const ImgBox = styled.div`
  min-height: 13.2vw;
  margin-bottom: 1.2vw;
`
const TitleImg = styled.img`
`
const MainTitleImg = () => {
  return (
    <ImgBox>
      <TitleImg
           src="https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdc-tGPJp7bMGQUpxWSt-AJTtoEL671EcfwgluRXQsXkLWsLOtM8k-JFaPjjGVrpbF698D6zOI5XckYogiX4IOerYzBF9tHNGKWAvDWJu6vP3G_KzlixfkZJ0sqoSfN2-L9LlMmJAKmlvr6Dd7dMV1_YAjRSBaUf698lWpj6LS5GhQ.webp?r=65d"
           />
    </ImgBox>
  )
}

export default MainTitleImg;
