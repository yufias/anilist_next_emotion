/** @jsxImportSource @emotion/react */
import { FileIcon, HomeIcon, FileIconActive, HomeIconActive } from '../../../assets'
import { MobileNavigationStyle } from './MobileNavigationStyle'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'

const MobileNavigation = () => {
    const router = useRouter()
    const currentRoute = router.pathname

    return(
        <div css={MobileNavigationStyle.mobileNavContainer}>
            <nav css={MobileNavigationStyle.mobileNav}>
                <Link href="/collection">
                    <a css={MobileNavigationStyle.linkStyle}>
                        <Image
                            src={FileIcon}
                            alt="collection"
                            height="36"
                            width="36"
                        />
                        <span css={MobileNavigationStyle.linkLabel}>Collection</span>
                    </a>
                </Link>
                <Link href="/">
                    <a css={MobileNavigationStyle.linkStyle}>     
                        <Image
                            src={HomeIcon}
                            alt="home"
                            height="36"
                            width="36"
                        />
                        <span css={MobileNavigationStyle.linkLabel}>Home</span>
                    </a>
                </Link>
            </nav>
        </div>
    )
}

export default MobileNavigation