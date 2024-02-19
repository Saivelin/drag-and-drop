"use client"

import TaskGrid from "@/components/TaskGrid/TaskGrid";
import styles from "./MainModule.module.scss"
import Row from "@/components/TaskGrid/components/Row";
import { StatusEnum, TaskType } from "@/types/Tasks";
import { TASKS } from "./MainModule.constants";
import { useEffect, useRef, useState } from "react";
import { areElementsOverlapping } from "@/helpers/elementsOverlapping";

const MainModule = () => {
    const [tasks, setTasks] = useState<TaskType[]>(TASKS)
    const container = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        console.log(tasks)
    },[tasks])

    const onDragEnd = (item: any, itemData: TaskType) => {
        console.log("drag end")
        if(container && container.current){
            const elements = Array.from(container.current.children);
            for(let i = 0; i <= elements.length - 1; i+=1){
                if(areElementsOverlapping(item.current, elements[i]) == true){
                    let newTasks = [...tasks]
                    newTasks.forEach((task)=>{
                        if(task.id == itemData.id){
                            console.log(Array.from(elements[i].children)[0].innerHTML)
                            Array.from(elements[i].children)[0].innerHTML == StatusEnum.Created ? task.status = StatusEnum.Created : null
                            Array.from(elements[i].children)[0].innerHTML == StatusEnum.Process ? task.status = StatusEnum.Process : null
                            Array.from(elements[i].children)[0].innerHTML == StatusEnum.Completed ? task.status = StatusEnum.Completed : null
                        }
                    })
                    setTasks(newTasks)
                }
            }
        }
    }

    return (
        <main>
            <div className={styles.container}>
                <div ref={container} className={styles.rowContainer}>
                    <Row title={StatusEnum.Created} items={tasks.filter((task) => task.status == StatusEnum.Created)} onDragEnd={onDragEnd}/>
                    <Row title={StatusEnum.Process} items={tasks.filter((task) => task.status == StatusEnum.Process)} onDragEnd={onDragEnd}/>
                    <Row title={StatusEnum.Completed} items={tasks.filter((task) => task.status == StatusEnum.Completed)} onDragEnd={onDragEnd}/>
                </div>
            </div>
        </main>
    );
};

export default MainModule;