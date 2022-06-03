/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const HeaderStyle = {
    header: css`
        height: 65px;
        background-color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid gray;

        // Small devices (landscape phones, 576px and up)
        @media (max-width: 576px) {
            display:none;
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) {
            
        }
    `,
    headerContainer: css`
        gap: 1.2rem;
    `,
    navContainer: css`
        // Small devices (landscape phones, 576px and up)
        @media (max-width: 576px) {
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        
        display: flex;
        align-items: center;
        gap: 1.2rem;
    `,
    icon: css`
        font-size: 2px !important;

        // Small devices (landscape phones, 576px and up)
        @media (max-width: 576px) {
            display: block
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
            display: none
        }
    `

}