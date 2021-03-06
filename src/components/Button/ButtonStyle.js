import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

export const ButtonStyle = {
    button: css`
        background-color: ${globalStyle.colors.blue[70]};
        color: #fff;
        padding: 0.6rem;
        border-radius: 6px;
        border: none;
        &:hover {
            background-color: ${globalStyle.colors.blue[100]};
            cursor: pointer;
        }
    `,
    outline: css`
        border: 1px solid ${globalStyle.colors.blue[70]};
        background-color: #fff;
        color: ${globalStyle.colors.blue[70]}
    `,
    danger: css`
        background-color: ${globalStyle.colors.red[70]};
        padding: 0.6rem;
        &:hover {
            background-color: ${globalStyle.colors.red[100]};
            cursor: pointer;
        }
    `
}