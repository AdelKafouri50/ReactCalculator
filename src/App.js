import React, { useState, useRef, useEffect } from 'react';
import  TodoList from './components/TodoList'

function App() {

const [Todos, setTodos] = useState([]);
const currentType = useRef();

useEffect(() => {
	const storedTodos = JSON.parse(localStorage.getItem('stored'))
	{ storedTodos && setTodos(storedTodos) }
}, [])

useEffect(()=>{
	localStorage.setItem('stored', JSON.stringify(Todos))
},[Todos])


function handleComplete(name){
	const newTodos = [...Todos]
	const todo = newTodos.find(todo => todo.name === name)
	todo.complete = !todo.complete
	setTodos(newTodos)
}

function addTodo(){
	const name = currentType.current.value
	if (name === '') return
	setTodos(prevTodos=>{
			return [...prevTodos, {name:name, complete:false}]
	})
	currentType.current.value = null

	
}

function clearComplete(){
	setTodos(Todos.filter(todo=>!todo.complete))
}


  return (
    <div style={{fontSize:15, color:'#22a7ff', display:'block'}}>
	<div style={{marginBottom:'2em', marginTop:'2em'}}>
		<TodoList style={{ fontSize:15}} handleComplete={handleComplete} todos = {Todos}/>
	</div>
	<div style={{ display: 'flex', justifyContent:'center', marginBottom:'1em', marginTop:'2em'}}>
			<input placeholder='Add Todo Here' style={{padding:10, marginRight:'1em', borderRadius:'1em', outline:'none', border:'1px solid #22a7ff'}} ref={currentType} type="text"/>
			<a style={{cursor:"pointer", margin: 5, padding:10, backgroundColor:'#22a7ff', color:'white', borderRadius:'5em'}} onClick={addTodo}> Add Todo </a>
			<a style={{cursor:"pointer", margin: 5, padding:10, backgroundColor:'#22a7ff', color:'white', borderRadius:'5em'}} onClick={clearComplete}> Clear Complete Todos </a>
	</div>
	<div style={{ display: 'flex', justifyContent:'center'}} >
		<h1 style ={{ color:'#196aa0', display:'inline', borderBottom:'solid 3px #196aa0'}}>{Todos.filter(todo=>!todo.complete).length} Uncomplete Todos</h1>
    </div>
	</div>
  );

}

export default App;
