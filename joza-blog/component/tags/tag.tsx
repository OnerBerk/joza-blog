import styles from "./tag.module.scss"

type TagProps = {
    itemId: number
    focus: string
    title: string
    onClick: () => void
}

const Tag = ({title, onClick, focus}: TagProps) => {
    return (
        <section
            className={styles.tagMain}>
            <button className={styles[focus]} onClick={onClick}>{title}</button>
        </section>
    )
}
export default Tag