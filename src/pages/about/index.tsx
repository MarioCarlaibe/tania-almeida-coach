import { FooterMenu } from "../../components/footer";
import { HeaderMenu } from "../../components/header";
import { MainCover } from "../../components/main";

export function Home() {
    return(
        <>
            <HeaderMenu />
            <MainCover />
            <FooterMenu/>
        </>
    )
}