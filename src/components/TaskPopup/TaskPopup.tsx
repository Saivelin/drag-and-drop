import { TaskType } from "@/types/Tasks"

const TaskPopup = ({item} : {item: TaskType}) => {
  return (
    <div>
        <h2>{item.title}</h2>
        <h4>{item.status}</h4>
    </div>
  )
}

export default TaskPopup