import MainSection from './components/section/MainSection';
import Section from './components/section/Section'
import QuestionList from './components/section/QuestionList'
import Footer from './components/footer/Footer'
import LoginPage from './components/pages/LoginPage'
import ContentsPage from './components/pages/ContentsPage'
import {Route} from 'react-router-dom';
import React from 'react'
import KakaoLoginPage from './components/pages/KakaoLoginPage'
import ShoppingPage from './components/pages/ShoppingPage'
import styled from 'styled-components'
function App() {
  const Page = styled.div`
    width: 100%;
    height: 100%;
  `
  const sectionNum = [
    {
      id:1,
      index:1
    },
    {
      id:2,
      index:2
    },
    {
      id:3,
      index:3
    },
    {
      id:4,
      index:4
    },
  ]

  return (
    <Page>
      <Route path='/' exact={true}>
        <MainSection />
        {sectionNum.map(sectionNum =>
          <Section sections={sectionNum.index} key={sectionNum.id} />
        )}
        <QuestionList />
        <Footer />
      </Route>
      <Route path='/shoppingpage' component={ShoppingPage}/>
      <Route path='/kakaologinPage' component={KakaoLoginPage}/>
      <Route path='/loginpage' component={LoginPage}/>
      <Route path='/contentspage' component={ContentsPage}/>
    </Page>
  );
}

export default App;
