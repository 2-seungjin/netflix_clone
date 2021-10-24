import styled from 'styled-components';
import {AiFillCaretRight, AiOutlinePlus, AiOutlineDown} from 'react-icons/ai';
import {FiThumbsDown, FiThumbsUp} from 'react-icons/fi'

const MainBox = styled.div`
  width: 20%;
  transition: .5s;
  margin-right: 2px;
  margin-left: 2px;
  &:hover{
    z-index: 3;
    transform: scale(1.5);
  }
  &:hover .ExplanationBox {
    display: flex;
    opacity: 1;
    z-index: 3;
  }
`

const ItemBox = styled.div`
  width: 100%;
  height: 10vw;
  box-sizing: border-box;
  z-index: 1;
  cursor: pointer;
`
const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
const ExplanationBox = styled.div`
  opacity: 0;
  border-radius: 4px;
  display: none;
  background: #181818;
  position: absolute;
  width: 100%;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
  transition: .5s;
  & .texts{
    margin-left: 10px;
  }
  & .tages{
    margin-left: 2px;
  }
`
const IconBox = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  & .icons {
    padding: 5px;
    margin-left: 5px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 45px;
  }
  & .last {
    position: relative;
    left: 30%;
  }
`
const TagBox = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`
const MovieTag = styled.div`
  font-size: 1vw;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 1vw;
  justify-content: left;
  align-items: center;
`
const Percentage = styled.div`
  color:green;
`
const Age = styled.div`
  border: 1px solid #fff;
  padding: 0 4px;
`
const Season = styled.div`
`
const Quality = styled.div`
  font-size: .3vw;
  border: 1px solid #fff;
  padding: 0 2px;
`
const MovieListItem = (props) => {
  const openPopup = () => {
    const popUps = document.getElementById('popUp');
    popUps.style.display='block';
  }
  return(
    <MainBox>
      <ItemBox>
        <MovieImg
             src={props.imgs}
             alt="movieImg" />
      </ItemBox>
      <ExplanationBox className='ExplanationBox'>
        <IconBox className='icons'>
          <AiFillCaretRight className='icons'/>
          <AiOutlinePlus className='icons'/>
          <FiThumbsUp className='icons'/>
          <FiThumbsDown className='icons'/>
          <AiOutlineDown className='icons last' onClick={openPopup}/>
        </IconBox>
        <TextBox>
          <Percentage className='texts'>98%</Percentage>
          <Age className='texts'>15+</Age>
          <Season className='texts'>시즌 2</Season>
          <Quality className='texts'>HD</Quality>
        </TextBox>
        <TagBox>
          <MovieTag className='tages'>판타지</MovieTag>
          <span className='tages'>&#183;</span>
          <MovieTag className='tages'>액션</MovieTag>
          <span className='tages'>&#183;</span>
          <MovieTag className='tages'>흥미진진</MovieTag>
        </TagBox>
      </ExplanationBox>
    </MainBox>
  )
}

export default MovieListItem;
