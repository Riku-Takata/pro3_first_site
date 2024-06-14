import Container from "../components/container";
import Hero from "../components/hero";
import PostBody from "../components/post_body";
import TwoColumn from "../components/two_column";
import TwoColumnMain from "../components/two_column_main";
import TwoColumnSidebar from "../components/two_column_sidebar";

export default function About(){
    return(
        <>
            <Hero title="コーチの経歴" subtitle="バスケを始めたのは5歳のころ" />
            <Container>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <h3>5歳のころ -- 家の近くにあったバスケットゴールがあるバスケを始める</h3>
                            <h3>12歳のころ -- ミニバスのチームでキャプテンを務める</h3>
                            <h3>15歳のころ -- 奥田中バスケットボールクラブでキャプテンを務める</h3>
                            <h3>18歳のころ -- 高校のチームでキャプテンを務める</h3>
                        </PostBody>
                    </TwoColumnMain>

                    <TwoColumnSidebar>
                        <img width="240px"src={"/img/IMG_0137.jpg"} />
                        <p>名前: 高田莉玖</p>
                        <p>経歴:     奥田ミニバス</p>
                        <p>奥田中バスケ部</p>
                        <p>富山東高校バスケ部</p>
                        <p>主将</p>
                    </TwoColumnSidebar>
                </TwoColumn>
            </Container>
        </>   
    )
}