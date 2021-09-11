import {useState} from 'react';

const Count = () => {
  const [text, setText] = useState('');
  const onchange = (e) => {
    console.log(e.target.value);
    setText(e.target.value)
  }
  return (
    <>
      <input type="text" onChange={onchange}/>
      <h1>{text}</h1>
    </>
  );
}

export default Count;
