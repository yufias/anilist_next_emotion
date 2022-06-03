import { css } from '@emotion/react'
import { globalStyle } from '../../../../styles/globalStyle'

export const MobileNavigationStyle = {
    mobileNavContainer: css`
        border-top: 1px solid gray;
        background-color: ${globalStyle.colors.white};
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999;
        
        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
            display: none
        }
    `,
    mobileNav: css`
        display: flex;
        justify-content: space-evenly;
    `

}