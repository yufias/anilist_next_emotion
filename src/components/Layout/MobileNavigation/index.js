/** @jsxImportSource @emotion/react */
import { FileIcon, HomeIcon, FileIconActive, HomeIconActive } from '../../../assets'
import { MobileNavigationStyle } from './MobileNavigationStyle'
import Image from 'next/image'
import Link from 'next/link'

const MobileNavigation = () => {

    return(
        <div css={MobileNavigationStyle.mobileNavContainer}>
            <nav css={MobileNavigationStyle.mobileNav}>
                <Image
                    src={FileIcon}
                    alt="collection"
                    height="36"
                    width="36"
                />
                <Image
                    src={HomeIcon}
                    alt="home"
                    height="36"
                    width="36"
                />
            </nav>
        </div>
    )
}

export default MobileNavigation