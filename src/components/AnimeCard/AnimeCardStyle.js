import { css } from '@emotion/react'

export const AnimeCardStyle = {
    card: css`
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
        border-radius: 5px;
        cursor: pointer;

        // xtra small devices (576 and below)
        @media (max-width: 576px) {
            width: 45%;
        }

        // small devices (576 and up)
        @media (min-width: 576px) {
            width: 45%;
        }

        // medium devices (768 and up)
        @media (min-width: 768px) {
            width: 32%;
        }

        // large devices (992 and up)
        @media (min-width: 992px) {
            width: 18%;
        }
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
    `,
    deleteContainer: css`
        display: flex;
        padding: 0.8rem;
    `,
    deleteContainerHide: css`
        display: none;
    `
    
}