import AvatarWithMenu from "components/AvatarWithMenu"
import Link from "next/link"
import { HeaderContainer } from "./styles"

const Header = () => {
    return (
        <HeaderContainer>
            <Link href="/">upskill.code</Link>
            <AvatarWithMenu />
        </HeaderContainer>
    )
}

export default Header