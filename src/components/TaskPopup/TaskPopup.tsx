import { DeadlineStatus, TaskType } from "@/types/Tasks"
import { User } from "@/types/User"
import styles from "./TaskPopup.module.scss"
import { useEffect, useState } from "react";
import { Deadline } from "./Deadline/Deadline";

const TaskPopup = ({item} : {item: TaskType}) => {


  return (
    <div className={styles.wrapper}>
        <section className={styles.data}>
            <h2>{item.title}</h2>
            {item?.description && item.description.length > 0 ? 
                <p dangerouslySetInnerHTML={{__html: item.description}}></p>
            : null}
        </section>
        <section className={styles.additionalData}>
            {item?.creator && typeof(item?.creator) != "number" ? 
                <section>
                    <h3>Автор:</h3>
                    <p>{item.creator.name}</p>
                </section>
            : null}
            {item?.executors && item.executors.length > 0 && typeof(item?.executors[0]) != "number" ? 
                <section>
                    <h3>Исполнители:</h3>
                    {item.executors.map((executor : User | number)=>{
                        if(typeof(executor) != "number"){
                            return <p>{executor.name}</p>
                        }
                    })}
                </section>
            : null}
            {item?.deadline && item.deadline.length > 0 ? 
                <Deadline deadline={item.deadline}/>
            : null}
        </section>
    </div>
  )
}

export default TaskPopup