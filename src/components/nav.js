import styles from "@/styles/Nav.module.css"
import Link from "next/link"

export default function Nav(){

    const goodsList = [
        {id: 0, name: "初級コース", description: "楽しくバスケットボールに触れることを重視！", stock: 0},
        {id: 1, name: "上級コース", description: "試合を中心とした本格的チームバスケを展開！", stock: 0},
    ]

    return(
        <nav className={styles.mainnav}>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={styles.child}>
                    <Link href="/menu">
                        Menu
                    </Link>
                    <ul>
                        <li>
                            <Link href={{pathname: "/details/"+0,
                                query: {id: goodsList[0].id,
                                        name: goodsList[0].name,
                                        description: goodsList[0].description,
                                        stock: goodsList[0].stock
                                        }
                            }}>初級コース</Link>
                        </li>
                        <li>
                            <Link href={{pathname: "/details/"+1,
                                query: {id: goodsList[1].id,
                                        name: goodsList[1].name,
                                        description: goodsList[1].description,
                                        stock: goodsList[1].stock
                                        }
                            }}>上級コース</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/about">
                        About Coach
                    </Link>
                </li>
            </ul>
        </nav>
    )
}