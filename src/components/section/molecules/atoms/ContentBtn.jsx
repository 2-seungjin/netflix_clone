import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import styled from 'styled-components'



const DirectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 100%;
  cursor: pointer;
`
const ContentBtn = (props) => {
  return(
    <DirectionBox>
      {props.direction === 'left'? <BsChevronLeft size={28}/> : <BsChevronRight size={28}/>}
    </DirectionBox>
  )
}

export default ContentBtn;
