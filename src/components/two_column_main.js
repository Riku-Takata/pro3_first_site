import styles from '@/styles/Two_column.module.css'

export default function TwoColumnMain({children}){
    return(
        <div className={styles.main}>
            {children}
        </div>
    )
}