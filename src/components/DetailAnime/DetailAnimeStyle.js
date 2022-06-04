import { css } from '@emotion/react'

export const DetailAnimeStyle = {
    detailAnimeContainer: css`
        display: flex;
        flex-direction: column;
        justify-content: center;

        // xtra small devices (576 and below)
        @media (min-width: 576px) {
            flex-direction: row;
        }
    `,
    coverImageFigure: css`
        width: 260px;
        height: auto;
        

        // xtra small devices (576 and below)
        @media (min-width: 768px) {
            width: 700px;
        }
    `,
    textInfoContainer: css`
        display: flex;
        align-items: center;
        flex-direction: column;
    `,
    episodesDurationContainer: css`
        display: flex;
        flex-direction: row;
        width: 300px;
        border-radius: 10px;
        border: 1px solid grey;
        justify-content: space-evenly;
        padding: 0.4rem;
        margin-bottom: 0.8rem;
    `,
    episodesDurationContent: css`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `,
    genreText: css`
        margin-bottom: 1rem;
    `
}