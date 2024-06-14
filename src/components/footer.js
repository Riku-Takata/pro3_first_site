import Contact from "./contact";
import styles from '@/styles/Footer.module.css'
import MenuLayout from "./menu_layout";

export default function Footer(){
    return(
        <footer className={styles.wrapper}>
            <MenuLayout>
                <Contact />
            </MenuLayout>
        </footer>
    )
}