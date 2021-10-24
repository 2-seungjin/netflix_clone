import styled from 'styled-components';
import Logo from '../footer/molecules/Logo';
import { IoSearchSharp } from 'react-icons/io5';
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom'
import ShoppingPage from '../pages/ShoppingPage'


const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
  height: 68px;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 14px;
`

const HeaderLeftBox = styled.div`
  padding-left: 2vw;
  display: flex;
  align-items: center;
`
const HeaderLeftLink = styled.div`
  margin-left: 20px;
  .Link{
    color: #e5e5e5;
    transition: .4s;
    &:hover{
      color: rgba(181, 181, 181);
    }
  }
`
const InputForm = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: none;
  transition: .5s;
  .icons {
    cursor: pointer;
  }
`
const SearchInput = styled.input`
  width: 0;
  color: #fff;
  border: none;
  background: transparent;
  &:focus {
    outline:none;
  }
`
const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  .icons{
    display: block;
    font-size:26px;
    margin-right:15px;
  }
`
const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .usericon{
    font-size: 26px;
    margin-right:15px;
    transition: .5s;
    &:hover{
      
      transform: rotate(180deg);
    }
  }
`
const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`

const ContentsHeader = () => {
  const inputClick = () => {
    const inputBox = document.getElementById('inputForm');
    const searchInput = document.getElementById('searchInput');
    const aiOutlineClose = document.getElementById('aiOutlineClose');
    inputBox.style.width='200px';
    inputBox.style.border='1px solid #fff';
    inputBox.style.backgroundColor='rgba(0, 0, 0, 0.75)';
    searchInput.style.width='60%';
    aiOutlineClose.style.display='block'
  }
  const onSearch = (e) => {
  }
  const closeInput = () => {
    const inputBox = document.getElementById('inputForm');
    const searchInput = document.getElementById('searchInput');
    const aiOutlineClose = document.getElementById('aiOutlineClose');
    inputBox.style.width='50px';
    inputBox.style.border='none';
    inputBox.style.background='none';
    searchInput.style.width='0';
    aiOutlineClose.style.display='none'
  }

  const resetInput = () => {
    const searchInput = document.getElementById('searchInput');
    let inputValue = searchInput.value;

    inputValue === '' ? closeInput() : searchInput.value='';
  }

  return (
    <Header>
      <HeaderLeftBox>
        <Logo />
        <HeaderLeftLink ><Link className='Link' to='/contentspage'>홈</Link></HeaderLeftLink>
        <HeaderLeftLink ><Link className='Link' to='/contentspage'>TV 프로그램</Link></HeaderLeftLink>
        <HeaderLeftLink ><Link className='Link' to='/contentspage'>영화</Link></HeaderLeftLink>
        <HeaderLeftLink ><Link className='Link' to='/contentspage'>NEW! 요즘 대세 콘텐츠</Link></HeaderLeftLink>
        <HeaderLeftLink ><Link className='Link' to='/shoppingpage'>내가 찜한 콘텐츠</Link></HeaderLeftLink>
      </HeaderLeftBox>
      <HeaderRightBox>
        <InputForm id='inputForm'>
          <IoSearchSharp className='icons' onClick={inputClick} style={{}} size={26}/>
          <SearchInput id='searchInput'placeholder='제목, 사람, 장르' onChange={onSearch}/>
          <AiOutlineClose className='icons' id='aiOutlineClose' style={{display:'none', marginRight:'0'}} onClick={resetInput}/>
        </InputForm>
        <IoMdNotifications className='icons'/>
        <UserBox>
          <UserImg src='https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2mdn_92ruEqx0QzXDv947nXRyeamVpcKT4xbR6N-51JGWihqgKLLIX9gO_E319FW3Qoqff4ujjappyQ8uskyFS6Q.png?r=a41' />
          <IoMdArrowDropdown className='usericon' />
        </UserBox>
      </HeaderRightBox>
    </Header>
  );
}

export default  ContentsHeader;
