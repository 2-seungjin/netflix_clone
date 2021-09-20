import MainSection from './components/section/MainSection';
import Section from './components/section/Section'
import QuestionList from './components/section/QuestionList'
import Footer from './components/footer/Footer'

function App() {
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
    <>
      <MainSection />
      {sectionNum.map(sectionNum =>
        <Section sections={sectionNum.index} key={sectionNum.id} />
      )}
      <QuestionList />
      <Footer />
    </>
  );
}

export default App;
