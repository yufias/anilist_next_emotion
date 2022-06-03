import { css } from '@emotion/react'

export const AnimeCardStyle = {
    card: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    figure: css`
        width: 120px;
        height: auto;
        margin: 0.5rem auto;
    `,
    contentContainer: css`
        display: flex;
        justify-content: center;
        max-width: 300px;
        margin: 0.5rem auto;

        // xtra small devices (576 and below)
        @media (max-width: 576px) {
            max-width: 150px;
        }

        // small devices (576 and up)
        @media (min-width: 576px) {
            max-width: 150px;
        }
    `,
    title: css`
        word-break: break-word;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 200px;

        // xtra small devices (576 and below)
        @media (max-width: 576px) {
            font-size: 12px;
        }

        // small devices (576 and up)
        @media (min-width: 576px) {
            font-size: 12px;
        }
    `
}