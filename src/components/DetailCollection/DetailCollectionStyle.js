import { css } from '@emotion/react'

export const DetailCollectionStyle = {
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
    `,
    collectionList: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `
}