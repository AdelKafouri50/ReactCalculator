import { useState } from 'react';
import  ButtonList from './components/ButtonList/ButtonList'
import './App.css'
function App() {

const [ Input, setInput] = useState([])
const [ content, setContent] = useState()



  return (

		<div className='Container'>
			<div className='Display'>{Input}</div>
			<ButtonList  content={content} setContent={setContent} Input={Input} setInput={setInput}></ButtonList>
		</div>

  );

}

export default App;
