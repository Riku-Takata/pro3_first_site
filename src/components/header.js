import styles from "@/styles/Header.module.css"
import Container from "./container"
import Logo from "./logo"
import Nav from "./nav"

export default function Header(){
    return(
        <>
            <h1 className={styles.attention}>これは大学の課題で作成したサイトです</h1>
            <Container large>
                <header className={styles.flexContainer}>
                    <Logo />
                    <Nav />
                </header>
            </Container>
        </>
    )
}