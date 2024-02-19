import { ReactElement, useEffect, useRef } from "react";
import styles from "./TaskGrid.module.scss"

const TaskGrid = ({children, ref} : {children: ReactElement, ref: (any: any)=>void}) => {
    const container = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        ref(container)
    }, [])

    return (
        <div className={styles.container} ref={container}>
            {children}
        </div>
    );
};

export default TaskGrid;