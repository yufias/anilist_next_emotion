import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

export const AnimeListStyle = {
    textColor: css`
        color: ${globalStyle.colors.blue[70]}
    `,
    pageTitle: css`
        margin-left: 0.6rem;
    `,
    listContainer: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `,
    paginationContainer: css`
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
    `,
    cardAnchor: css`
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    `
}