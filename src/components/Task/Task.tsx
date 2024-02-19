"use client"

import { TaskType } from "@/types/Tasks";
import styles from "./Task.module.scss"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { DragConstraintsType } from "@/types/Framer";

const Task = ({item, onDragEnd} : {item : TaskType, onDragEnd: (item : any, itemData: TaskType)=>void}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [dragConstraints, setDragConstraints] = useState<DragConstraintsType>({left: 0, right: 0, top: 0, bottom: 0})

    useEffect(()=>{
        if(ref.current){
            const rect = ref.current.getBoundingClientRect();
            console.log(rect.top, rect.left, rect.width, rect.height);
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
        >
            <h4 className={styles.title}>{item.title} {item.id}</h4>
            <p className={styles.description}>{item.description}</p>
        </motion.div>
    );
};

export default Task;