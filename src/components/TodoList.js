import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, handleComplete }) {
    return (
        todos.map((todo,index)=>{ return <Todo handleComplete = {handleComplete} key = {index} todo={todo}></Todo>})
    )
}
