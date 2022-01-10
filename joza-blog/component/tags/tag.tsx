import styles from "./tag.module.scss"

type TagProps = {
    title: string
    onClick: () => void
}

const Tag = ({title, onClick}: TagProps) => {
    return (
        <div className={styles.tagMain}>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}
export default Tag