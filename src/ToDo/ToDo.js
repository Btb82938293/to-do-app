import React, {useState, useEffect} from "react"
import Item from "../Item/Item";
import { nanoid } from "nanoid"
import './ToDo.css';


export default function ToDo() {
    const [toDoList, setToDoList] = useState([])
    const [toDoText, setToDoText] = useState("")
    console.log(toDoList)
    const handleChange = (e) => {
        setToDoText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setToDoList(prevToDoList => [...prevToDoList, 
            {
                text: toDoText, 
                isDone: false, 
                isImportant: false, 
                id: nanoid()
            }])
        e.target.reset()
    }
    const deleteItem = (id) => {
        console.log("deleted", id)
        setToDoList(prevToDoList => {
            return prevToDoList.filter(el => el.id !== id)
        })
    }
    const toDoItems = toDoList.map(el => <Item deleteItem={deleteItem} key={el.id} id={el.id} text={el.text} />)
    return (
        <div className="to-do">
            <h1 className="to-do__main-text">TODO list</h1>
            <p className="to-do__text">What do you have to do?</p>
            <form onSubmit={handleSubmit} className="to-do__form">
                <input onChange={handleChange} className="to-do__input-text" type="text" placeholder="to do..." />
                <button className="to-do__add-btn">ADD</button>
            </form>
            <div className="to-do__items-container">
                {toDoItems.length ? toDoItems : "There is nothing here..yet"}
            </div>
        </div>
    )
}