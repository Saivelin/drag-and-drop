"use client"

import { DeadlineStatus } from "@/types/Tasks"
import { useEffect, useState } from "react"
import styles from "./Deadline.module.scss"

export const Deadline = ({deadline} : {deadline: string}) => {
    const [dateDeadlineStatus, setDateDeadlineStatus] = useState<DeadlineStatus>(DeadlineStatus.Earlier)

    useEffect(()=>{
        let today = new Date()
        let year = today.getFullYear()
        if(Number(deadline.split("-")[0]) < Number(year)){
            setDateDeadlineStatus(DeadlineStatus.Overdue)
        }
        let month = today.getMonth()
        if(Number(deadline.split("-")[1]) < Number(month)){
            setDateDeadlineStatus(DeadlineStatus.Overdue)
        }
        let day = today.getDate()
        console.log(Number(deadline.split("-")[2]))
        console.log(Number(day))
        if(Number(deadline.split("-")[2]) < Number(day)){
            setDateDeadlineStatus(DeadlineStatus.Overdue)
        }
        else if(Number(deadline.split("-")[2]) == Number(day)){
            setDateDeadlineStatus(DeadlineStatus.Today)
        }
    }, [])

    return (
        <p className={`${styles.deadline} ${styles[`deadline_${dateDeadlineStatus}`]}`}>{deadline.split("-").reverse().join(".")}</p>
    )
}
