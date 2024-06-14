import Container from "../components/container";
import Hero from "../components/hero"
import Link from "next/link";
import PostBody from "../components/post_body";
import MenuLayout from "../components/menu_layout";

export default function Menu(){

    const goodsList = [
        {id: 0, name: "初級コース", description: "楽しくバスケットボールに触れることを重視！", stock: 0},
        {id: 1, name: "上級コース", description: "試合を中心とした本格的チームバスケを展開！", stock: 0},
    ] 
    
    const result = goodsList.map(
        (e) => {
            return(
            <>
                <h1>{e.name}</h1>
                <img width="720" src={"/img/menu"+ e.id +".jpg"} />
                <p>{e.description}</p>
                <p>
                    <Link href={{pathname: "/details/"+e.id,
                        query: {id: goodsList[e.id].id,
                                name: goodsList[e.id].name,
                                description: goodsList[e.id].description,
                                stock: goodsList[e.id].stock
                                }
                    }}>
                        <h3>詳細はこちらをクリック</h3>
                        
                    </Link>
                </p>
            </>
            )
        }
    )
    return(
        <>
            <Container>
                <Hero 
                    title="練習メニュー"
                    subtitle="主にコースは二つ"
                />
                <MenuLayout>
                    <PostBody>
                        {result}
                    </PostBody>
                </MenuLayout>
            </Container>
        </>
    )
}