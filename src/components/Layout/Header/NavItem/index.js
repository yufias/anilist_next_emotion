import Link from "next/link"
/** @jsxImportSource @emotion/react */
import { NavItemStyle } from "./NavItemStyle"

const NavItem = ({ label, href }) => {
    return(
        <Link href={href}>
            <a css={NavItemStyle.link}>
                {label}
            </a>
        </Link>
    )
}

export default NavItem