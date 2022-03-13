import React from "react";
import styles from "./paper.module.scss"

type PaperProps = {
    children: React.ReactNode
}
const Paper = ({children}: PaperProps) => {
    return (
        <div className={styles.paperMain}>
            {children}
        </div>
    )
}
export default Paper