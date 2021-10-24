import styled from 'styled-components';
import MovieListItem from './molecules/atoms/MovieListItem';
import ContentBtn from './molecules/atoms/ContentBtn'
import {BsChevronRight} from 'react-icons/bs'
const MovieListBox = styled.div`
  position: relative;
  top:-10vw;
  margin-top: 2vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1050px) {
    top:1vw;
  }
`
const MovieItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .btn{
    display: none;
  }
`
const TextBox = styled.div`
`
const MovieRecommendation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding-left: 4%;
  vertical-align: bottom;
  line-height: 1.25vw;
  font-size: 1.4vw;
  
  &:hover .subText{
    display: inline;
    left: .5vw;
    opacity: 1;
  }
`
const SubText = styled.span`
  opacity: 0;
  margin-left: 1vw;
  font-size: .9vw;
  position: relative;
  right: 4vw;
  transition: .5s;
`
const MovieLists = (props) => {
  return (
    <MovieListBox>
      <TextBox>
        <MovieRecommendation className='btn'>
          {props.title}
          <SubText className='subText'>
            모두보기
            <BsChevronRight/>
          </SubText>
        </MovieRecommendation>
      </TextBox>
      <MovieItemBox>
        <ContentBtn direction='left' className='btn'/>
        {props.imgs.map(value =>
          <MovieListItem key={value} imgs={value}/>
        )}
        <ContentBtn direction='right' className='btn'/>
      </MovieItemBox>
    </MovieListBox>
  );
}

export default MovieLists;
