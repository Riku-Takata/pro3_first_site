import Link from "next/link"
import styles from '@/styles/Logo.module.css'

export default function Logo({boxOn = false}){
    return(
        <div className={styles.basic}>
            <Link href="/">
                <img width="100" src={"/img/Logo.png"}></img>
            </Link>
        </div>
    )
}