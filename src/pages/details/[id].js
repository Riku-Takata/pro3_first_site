import { useRouter } from "next/router"
import Container from "../../components/container";
import { useState } from "react";
import MenuLayout from "../../components/menu_layout";
import PostBody from "../../components/post_body";

export default function Dedails(){
    const router = useRouter();

    const [cList, setCList] = useState(
        [{id: Number(router.query.id), name: router.query.name, description:  router.query.description, stock:  Number(router.query.stock)}]
    );

    function handleButton() {
        let copy = [...cList];
        copy[0].stock++;
        setCList(copy);
    }

    return(
        <Container>
            <PostBody>
                <MenuLayout>
                    <img width="720" src={"/img/menu"+ cList[0].id +".jpg"}/>
                    <h1>コース名: {cList[0].name}</h1>
                    <h2>説明: {cList[0].description}</h2>
                    <h2>現在の申し込み数: {cList[0].stock}</h2>
                    <button onClick={handleButton}>申し込みはこちら</button>
                    <p>※ 他のコースをご覧になりたい際には<br />一度 MENU 画面のほうに移動してください</p>
                </MenuLayout>
            </PostBody>
        </Container>
    )
}