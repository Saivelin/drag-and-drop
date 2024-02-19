import React from "react";
import styles from "./Button.module.scss"

const Button = ({children, classNames=[], stylesProp, onClick} : {children: React.ReactNode, classNames?: string[], stylesProp?: any, onClick?: any}) => {
    return (
        <button className={`${styles.button} ${classNames.map((el)=>{return el}).join(" ")}`} style={stylesProp} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;