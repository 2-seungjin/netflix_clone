import styled from 'styled-components'
import ContentsHeader from '../header/ContentsHeader'
import Footer from '../footer/Footer'
import {initialState, delMovies} from '../../reducers/Movies'
import {useDispatch} from 'react-redux'

const Page = styled.div`
  width: 100%;
  height: 100%;
`
const PageTitle = styled.div`
  margin-bottom: 5vw;
`
const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 5vw;
  padding: 2vw;
  font-size: 2vw;
  min-height: 80%;
`
const MovieListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;
`
const MovieImg = styled.img`
  width: 20vw;
  height: 12vw;
  margin: .2vw;
  border-radius: 4px;
  cursor: pointer;
`
const ShoppingPage = () => {
  const arr = [initialState];
  const dispatch = useDispatch();
  return (
    <Page>
      <ContentsHeader />
      <ContentBox>
        <PageTitle>내가 찜한 콘텐츠</PageTitle>
        <MovieListBox>
          {arr[0].map((v, i) =>
            <MovieImg src={v.imgUrl} key={i} onClick={() => dispatch(delMovies(i))}/>
          )}
        </MovieListBox>
      </ContentBox>
      <Footer />
    </Page>
  )
}

export default ShoppingPage;
//
