import { css } from '@emotion/react'
import { globalStyle } from '../../../../../styles/globalStyle'

export const NavItemStyle = {
    link: css`
        color: ${globalStyle.colors.blue[70]};
        &:hover {
            color: ${globalStyle.colors.blue[100]};
            cursor: pointer
        }
    `,
    active: css`
        border-bottom: 1px solid ${globalStyle.colors.blue[70]}
    `
}