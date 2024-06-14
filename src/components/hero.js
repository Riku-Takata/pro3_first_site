import styles from "@/styles/Hero.module.css"

export default function Hero({title, subtitle}){
    return(
        <div>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}