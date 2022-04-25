import Task from "./Task"

function Tasks({ tasks , onDeleteA , onToggleA}) {

    return (
        <>
            {tasks.map(function (task,index) {
                return (
                    <Task key={index} task={task} onDeleteT={onDeleteA} onToggleT={onToggleA}/>
                )
            })}
        </>
    )
}

export default Tasks