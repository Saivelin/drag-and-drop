import Task from "@/components/Task/Task";
import { TaskType } from "@/types/Tasks";
import styles from "./Row.module.scss"

const Row = ({title, items, onDragEnd} : {title: string, items: TaskType[], onDragEnd: (item: any, itemData: TaskType)=>void}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {
                items.map((item)=>{
                    return <Task key={item.id} item={item} onDragEnd={onDragEnd}/>
                })
            }
        </div>
    );
};

export default Row;