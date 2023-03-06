import './App.css';
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask, deleteTask, updateTask } from './features/tasks'


function App() {
  const dispatch = useDispatch()
  const taskList = useSelector((state) => state.tasks.value)
  const [task, setTask] = useState("")
  const [newTask, setNewTask] = useState("")
  const current = new Date()
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Friday", "Saturday"];
  const month = monthNames[current.getMonth()]
  const date = `${current.getDate()}`
  const year = `${current.getFullYear()}`
  const day = dayNames[current.getDay()]


  return (
    <div className="App">
      <div className='header'>
        <div className='calendar'>
          <p className='date'>{date}</p>
        <div className='month'>
          <p>{month}</p>
          <p>{year}</p>
        </div>
        </div>
        <div className='day'>{day}</div>
      </div>
      <div className='content'>
        <div className='search'>
          <input
            type="text"
            name="task"
            placeholder='Things to do...'
            onChange={(e) => setTask(e.target.value)} />
          <button
            className='addBtn'
            onClick={() => {
              dispatch(addTask({ id: [Math.random() * 10] + 1, task }))
            }}>Add</button>
        </div>

          <div className='title'>
            <h2>Todo list</h2><h3>({taskList.length})</h3>
          </div>

        <div className='taskList'>
          { taskList.length === 0 ? "No Task to show"
          :
            taskList.map((item) => {
              return <div className="taskList_items">
                <p>{item.task}</p>
                <div className='taskList_buttons'>
                  <button
                    className='deleteBtn'
                    onClick={() => {
                      dispatch(deleteTask({ id: item.id }))
                    }}
                  >Done</button>
                    {/* <button
                    onClick={() => {
                      dispatch(updateTask({ id: item.id, task: newTask }))
                    }}
                    className='updateBtn'>
                    Update
                  </button> */}
                </div>

                {/* <input
                    type="text"
                    placeholder="edit..."
                    onChange={(event) => {
                      setNewTask(event.target.value);
                    }}
                  /> */}
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
