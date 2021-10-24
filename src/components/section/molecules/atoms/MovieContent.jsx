import styled from 'styled-components';


const SeasonContent = styled.div`
  font-size: 1.6vw;
  color: #fff;
  transition: color 1s cubic-bezier(.165,.84,.44,1);
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin: 1vw 0;
  align-items: center;
  font-weight: 700;
`
const Content = styled.div`
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin-top: .1vw;
`

const MovieContent = () => {
  return (
    <div>
      <SeasonContent>
        시즌 1, 지금 시청하세요
      </SeasonContent>
      <Content>
        지상 최강의 생명체인 아버지를 쓰러뜨려야 하는 숙명을 타고난 남자, 한마 바키, 사상 초유의 부자 대결을 앞두고 미국 최강의 죄수 미스터 언체인과 싸우기 위해 제 발로 교도소로 들어간다.
      </Content>
    </div>
  )
}

export default MovieContent;
