// import React from 'react'
import { useState } from 'react'

function AddTask({ onAddA }){
  const [text,setText] = useState("")
  const [day,setDay] = useState("")
  const [reminder,setReminder] = useState(false)

  function onSubmitFn(e){
    e.preventDefault()

    if (!text) {
        alert("Please Provide a Task")
        return
    }else{
        onAddA({ text,day,reminder})
        setText("")
        setDay("")
        setReminder(false)
    }


  }

  return (
    <form className='add-form' onSubmit={onSubmitFn}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder="Add Task Name" value={text} onChange={function(e){
                setText(e.target.value)
            }}></input>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" value={day} onChange={function(e){
                setDay(e.target.value)
            }}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={function(e){
                setReminder(e.currentTarget.checked)
            }}></input>
        </div>
        <input type="submit" value={"Save Task"} className="btn btn-block"></input>
    </form>
  )
}

export default AddTask