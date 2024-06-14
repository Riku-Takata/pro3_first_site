import styles from '@/styles/Two_column.module.css'

export default function TwoColumnSidebar({children}){
    return(
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}