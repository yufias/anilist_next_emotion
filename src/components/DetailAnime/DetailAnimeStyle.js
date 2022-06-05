import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

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
    `,
    modalContent: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    `,
    collectionContent: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,
    chooseCollection: css`
        display: flex;
        gap: 1rem;
        align-items: center;
    `,
    buttonContainer: css`
        width: 100%;
    `,
    inputCollection: css`
        border: 1px solid ${globalStyle.colors.gray[50]};
        padding: 0.8rem;
        border-radius: 6px;
        width: 100%;
    `,
    existingAnime: css`
        color: ${globalStyle.colors.red[100]};
        display: block;
        font-size: 8px;
        float: right;
    `,
    existingAnimeFalse: css`
        display: none;
    `
}