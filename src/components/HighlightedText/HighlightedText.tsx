import React from "react";
import styles from "./HighlightedText.module.scss"

const HighlightedText = ({children} : {children: React.ReactNode}) => {
    return (
        <span className={styles.HighlightedText}>
            {children}
        </span>
    );
};

export default HighlightedText;