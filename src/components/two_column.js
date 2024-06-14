import styles from '@/styles/Two_column.module.css'

export default function TwoColumn({children}){
    return(
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}