import styles from "@/styles/Menu_Layout.module.css"

export default function MenuLayout({children}){
    return(
        <div className={styles.menu}>
            {children}
        </div>
    )
}