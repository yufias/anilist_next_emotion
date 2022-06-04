/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { NavItemStyle } from "./NavItemStyle"
import { useRouter } from 'next/router';

const NavItem = ({ label, href }) => {
    const router = useRouter()
    const currentRoute = router.pathname

    return(
        <Link href={href}>
            <a css={currentRoute == href ? [NavItemStyle.link, NavItemStyle.active] : [NavItemStyle.link]}>
                {label}
            </a>
        </Link>
    )
}

export default NavItem