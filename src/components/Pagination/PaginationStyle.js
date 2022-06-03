import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

export const PaginationStyle = {
    paginationWrapper: css`
        display: flex;
        justify-content: space-evenly;
        width: 500px;
    `,
    page: css`
        cursor: pointer;
        color: ${globalStyle.colors.gray[70]};
        padding: 4px;
        &:hover {
            background-color: ${globalStyle.colors.blue[100]};
            color: #fff;
            border-radius: 20px;
        }
    `,
    active: css`
        color: ${globalStyle.colors.white};
        padding: 4px;
        background-color: ${globalStyle.colors.blue[70]};
        border-radius: 20px;
        &:hover {
            background-color: ${globalStyle.colors.blue[100]};
        }
    `
}