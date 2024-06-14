import styles from '@/styles/Post_body.module.css'

export default function PostBody({children}){
    return(
        <div className={styles.stack}>
            {children}
        </div>
    )
}