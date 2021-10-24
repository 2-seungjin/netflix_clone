import styled from 'styled-components';
import {BsPlusCircle} from 'react-icons/bs';
import {useDispatch} from 'react-redux'
import {addMovie} from '../../reduxs/Redux';

const MovieBox = styled.div`
  width: 25vw;
  max-width: 25vw;
  height: 25vw;
  color: #d2d2d2;
  margin-bottom: 4vw;
  margin-right: 2vw;
`
const MovieImgs = styled.img`
  width: 25vw;
  height: 14vw;
`
const MovieContentBox = styled.div`
  padding: 2vw 1vw 1vw 1vw;
  background: #333;
`
const AgeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5vw;
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
  margin-right: 1vw;
`
const Launched = styled. div`
  font-size: 1.3vw;
`
const Text = styled.div`
  font-size: .9vw;
`
const ImgBox = styled.div`

`
const Time = styled.div`
  font-size: 1.2vw;
  position: absolute;
  left: 22vw;
  color: #fff;
`
const IconBox = styled.div`
  font-size: 2vw;
  position: relative;
  left: 14vw;
  cursor: pointer;
`
const PopUpMovieItem = (props) => {
  const dispatch = useDispatch();


  return (
    <MovieBox>
      <ImgBox>
        <Time>2시간 9분</Time>
        <MovieImgs src={props.movieUrl} />
      </ImgBox>
      <MovieContentBox>
        <AgeBox>
          <ViewAge>12</ViewAge>
          <Launched>{props.year}</Launched>
          <IconBox onClick={() => dispatch(addMovie(props.movieUrl))}><BsPlusCircle/></IconBox>
        </AgeBox>
        <Text>
          지구 구하는 일이 어디 쉽나? 슈퍼히어로에게도 휴식이 필요한 법. 학교 친구들과 유럽 여행을 떠난 스파이더맨, 피터 파커. 하지만 세상에 새로운 빌런이 등장해 여행을 망쳐 놓는다. 어휴, 맘 편히 쉬는 꼴을 못 봐요, 못 봐.
        </Text>
      </MovieContentBox>
    </MovieBox>
  );
}

export default PopUpMovieItem;
