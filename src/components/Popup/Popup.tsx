"use client"

import React from "react";
import styles from "./Popup.module.scss"
import { CloseIcon } from "../Icons";
import { motion } from "framer-motion"

const Popup = ({children, active=false, onClose} : {children: React.ReactNode, active: boolean, onClose: ()=>void}) => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className={`${styles.PopupWrapper} ${active == true ? styles.active : ""}`}>
            <div className={styles.InteractionMenu}>
                <CloseIcon color="white" onClick={onClose}/>
            </div>
            <div className={styles.Popup}>
                {children}
            </div>
        </motion.div>
    );
};

export default Popup;