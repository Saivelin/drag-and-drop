"use client"

import { TaskType } from "@/types/Tasks";
import styles from "./Task.module.scss"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { DragConstraintsType } from "@/types/Framer";
import { useDispatch } from "react-redux";
import { setPopupContent, togglePopup } from "@/redux/reducers/popup";
import TaskPopup from "../TaskPopup/TaskPopup";

const Task = ({item, onDragEnd} : {item : TaskType, onDragEnd: (item : any, itemData: TaskType)=>void}) => {
    const dispatch = useDispatch()
    const ref = useRef<HTMLDivElement>(null)
    const [dragConstraints, setDragConstraints] = useState<DragConstraintsType>({left: 0, right: 0, top: 0, bottom: 0})

    useEffect(()=>{
        if(ref.current){
            const rect = ref.current.getBoundingClientRect();
            setDragConstraints({left: 0, top: 0, right: 0, bottom: 0})
        }
    }, [])

    return (
        <motion.div 
            ref={ref}
            className={styles.container}
            whileHover={{boxShadow: "8px 8px 8px white"}}
            drag
            onDragEnd={()=>{onDragEnd(ref, item)}}
            dragConstraints={dragConstraints}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            onClick={()=>{
                dispatch(setPopupContent(
                    <TaskPopup item={item}/>
                ));
                dispatch(togglePopup());
            }}
        >
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description} dangerouslySetInnerHTML={item.description ? {__html: item.description} : {__html: ""}}></p>
        </motion.div>
    );
};

export default Task;