import React from 'react'

export default function Todo( {todo, handleComplete} ) {

    function handleClick(){
        handleComplete(todo.name)
    }
    return (
        <div style={{display:'flex', justifyContent:'center', marginBottom:'1em'}}>
            <div style={{display:'inline'}}>
                <span style={{textTransform:'uppercase', fontSize:'2em', marginRight:'1em'}}>{todo.name} :</span>
                <input onChange={handleClick} type="checkbox" checked={todo.complete}></input>
            </div>
        </div>
    )
}
