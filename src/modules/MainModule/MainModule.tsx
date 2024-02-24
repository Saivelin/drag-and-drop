"use client"

import TaskGrid from "@/components/TaskGrid/TaskGrid";
import styles from "./MainModule.module.scss"
import Row from "@/components/TaskGrid/components/Row";
import { StatusEnum, TaskType } from "@/types/Tasks";
import { TASKS } from "./MainModule.constants";
import { useEffect, useRef, useState } from "react";
import { areElementsOverlapping } from "@/helpers/elementsOverlapping";
import { useGetAllTasksQuery, useUpdateTaskMutation } from "@/redux/services/taskApi";
import Header from "@/components/Header/Header";
import { USER_DATA } from "@/app/layout.constants";

const MainModule = ({tasksData, tasksRefetch} : {tasksData: TaskType[], tasksRefetch: any}) => {
    const [updateTask] = useUpdateTaskMutation()

    const [tasks, setTasks] = useState<TaskType[]>([])
    const container = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(tasksData){
            setTasks(tasksData)
        }
    }, [tasksData])

    const onDragEnd = (item: any, itemData: TaskType) => {
        console.log("drag end")
        if(container && container.current){
            const elements = Array.from(container.current.children);
            for(let i = 0; i <= elements.length - 1; i+=1){
                if(areElementsOverlapping(item.current, elements[i]) == true){
                    let newTasks = [...tasks]
                    newTasks.forEach((task)=>{
                        if(task.id == itemData.id){
                            Array.from(elements[i].children)[0].innerHTML == StatusEnum.Created ? task = {...task, status: StatusEnum.Created}  : null
                            Array.from(elements[i].children)[0].innerHTML == StatusEnum.Process ? task = {...task, status: StatusEnum.Process}  : null
                            Array.from(elements[i].children)[0].innerHTML == StatusEnum.Completed ? task = {...task, status: StatusEnum.Completed}  : null
                            let updateData = {...task}
                            if(updateData?.creator && updateData?.creatorId){
                                updateData.creator = updateData.creatorId
                                delete(updateData.creatorId)
                                updateData.executors = updateData.executors?.map((el)=>{return typeof(el) !== "number" ? el?.id : el})
                            }
                            updateTask(updateData).then((res)=>{
                                tasksRefetch()
                            })
                        }
                    })
                }
            }
        }
    }

    return (
        <>
            <Header user={USER_DATA} />
            <main>
                <div className={styles.container}>
                    <div ref={container} className={styles.rowContainer}>
                        <Row title={StatusEnum.Created} items={tasks.filter((task) => task.status == StatusEnum.Created)} onDragEnd={onDragEnd}/>
                        <Row title={StatusEnum.Process} items={tasks.filter((task) => task.status == StatusEnum.Process)} onDragEnd={onDragEnd}/>
                        <Row title={StatusEnum.Completed} items={tasks.filter((task) => task.status == StatusEnum.Completed)} onDragEnd={onDragEnd}/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainModule;