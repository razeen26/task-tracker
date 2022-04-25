import { FaTimes } from "react-icons/fa";

function Task({ task , onDeleteT ,onToggleT }) {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={function(){
      return onToggleT(task.id)
    }}>
        <h3>
          {task.text} 
          <FaTimes  style={{color:"red" , cursor:"pointer"}} onClick={function(){
            return onDeleteT(task.id)
          }} /> 
        </h3>
        <p>{task.day}</p>
    </div>
  )
}    

export default Task