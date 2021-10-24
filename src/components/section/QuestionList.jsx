import styled from 'styled-components';

import {AiOutlinePlus} from 'react-icons/ai'
import {useState} from 'react'
import SectionEmailBox from './molecules/atoms/SectionEmailBox'

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.625rem;
  font-weight: 400;
  padding: 70px 45px;
  border-bottom: 8px solid #333;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  max-width: 815px;
`
const ListItem = styled.li`
  margin: 0 0 8px 0;
  width: 100%;
`
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: .8em 2.2em .8em 1.2em;
  font-weight: 400;
  background: #303030;
  cursor: pointer;
`
const Answer = styled.div`
  text-align: left;
  background: #303030;
  padding: .8em 2.2em .8em 1.2em;
  transition: 2s;
`
const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 55rem;
  align-items: center;
`
const EmailText = styled.div`
  font-size: 1.2rem;
  max-width: none;
  padding-bottom: 20px;
`
const QuestionList = () => {
  const [onList1, setOnList1] = useState(false);
  const [onList2, setOnList2] = useState(false);
  const [onList3, setOnList3] = useState(false);
  const [onList4, setOnList4] = useState(false);
  const [onList5, setOnList5] = useState(false);
  const [onList6, setOnList6] = useState(false);
  const onClick = (e) => {
    let num = e.target.id;
    console.log(num);
    switch (num){
      case '1':
        setOnList1(!onList1);
        setOnList2(false);
        setOnList3(false);
        setOnList4(false);
        setOnList5(false);
        setOnList6(false);
        break;
      case '2':
        setOnList2(!onList2);
        setOnList1(false);
        setOnList3(false);
        setOnList4(false);
        setOnList5(false);
        setOnList6(false);
        break;
      case '3':
        setOnList3(!onList3);
        setOnList1(false);
        setOnList2(false);
        setOnList4(false);
        setOnList5(false);
        setOnList6(false);
        break;
      case '4':
        setOnList4(!onList4);
        setOnList1(false);
        setOnList2(false);
        setOnList3(false);
        setOnList5(false);
        setOnList6(false);
        break;
      case '5':
        setOnList5(!onList5);
        setOnList1(false);
        setOnList2(false);
        setOnList3(false);
        setOnList4(false);
        setOnList6(false);
        break;
      case '6':
        setOnList6(!onList6);
        setOnList1(false);
        setOnList2(false);
        setOnList3(false);
        setOnList4(false);
        setOnList5(false);
        break;
      default:
    }
  }
  return (
    <ListBox>
      <h1 style={{marginBottom:'50px'}}>자주 묻는 질문</h1>
      <List>
        <ListItem>
          <Question onClick={ onClick } id={1}>
            넷플릭스란 무엇인가요?
            <AiOutlinePlus />
          </Question>
          {onList1 ?
            <Answer>넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.</Answer>
            : null
          }
        </ListItem>
        <ListItem>
          <Question onClick={ onClick } id={2}>
            넷플릭스 요금은 얼마인가요?
            <AiOutlinePlus />
          </Question>
          {onList2 ?
            <Answer>스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 14,500원까지 다양합니다. 추가 비용이나 약정이 없습니다.</Answer>
            : null
          }
        </ListItem>
        <ListItem>
          <Question onClick={ onClick } id={3}>
            어디에서 시청할 수 있나요?
            <AiOutlinePlus />
          </Question>
          {onList3 ?
            <Answer>다양한 디바이스에서 언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.
              <br/><br/>
              iOS, Android, Windows 10용 앱에서는 좋아하는 프로그램을 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.</Answer>
            : null
          }
        </ListItem>
        <ListItem>
          <Question onClick={ onClick } id={4}>
            멤버십을 해지하려면 어떻게 하나요?
            <AiOutlinePlus />
          </Question>
          {onList4 ?
            <Answer>넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.</Answer>
            : null
          }
        </ListItem>
        <ListItem>
          <Question onClick={ onClick } id={5}>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
            <AiOutlinePlus />
          </Question>
          {onList5 ?
            <Answer>넷플릭스는 장편 영화, 다큐멘터리, TV 프로그램, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.</Answer>
            : null
          }
        </ListItem>
        <ListItem>
          <Question onClick={ onClick } id={6}>
            아이들이 넷플릭스를 봐도 좋을까요?
            <AiOutlinePlus />
          </Question>
          {onList6 ?
            <Answer>멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 TV 프로그램과 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
            <br/><br/>
              키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.</Answer>
            : null
          }
        </ListItem>
      </List>
      <EmailBox>
        <EmailText>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</EmailText>
        <SectionEmailBox />
      </EmailBox>
    </ListBox>
  );
}

export default QuestionList;
