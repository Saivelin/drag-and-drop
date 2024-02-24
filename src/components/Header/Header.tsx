"use client"

import { User, UserRoles } from "@/types/User";
import styles from "./Header.module.scss"
import { UserIcon } from "../Icons";
import HighlightedText from "../HighlightedText/HighlightedText";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import AddTask from "../AddTask/AddTask";
import { useState } from "react";

const Header = ({user} : {user: User}) => {
    const [activeAddTask, setActiveAddTask] = useState<boolean>(false)

    const toggleAddTaskPopup = () => {
        console.log(activeAddTask)
        setActiveAddTask(!activeAddTask)
    }

    return (
        <>
            <header className={styles.container}>
                <h1 className={styles.logo}>Task tracker</h1>
                <div className={styles.user}>
                    {
                        user.role == UserRoles.Admin ? 
                            <Button onClick={toggleAddTaskPopup}>
                                Добавить задачу
                            </Button>
                        : null
                    }
                    <div className={styles.info}>
                        <p>{user.name}</p>
                        <p>Role: <HighlightedText>{user.role}</HighlightedText></p>
                    </div>
                    <div className={styles.photoWrapper}>
                        <UserIcon color="white"/>
                    </div>
                </div>
            </header>
            { 
                user.role == UserRoles.Admin  ? 
                    <Popup active={activeAddTask} onClose={toggleAddTaskPopup}>
                        <AddTask />
                    </Popup>
                :
                    null
            }
        </>
    );
};

export default Header;