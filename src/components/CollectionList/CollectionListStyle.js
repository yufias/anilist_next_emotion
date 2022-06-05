import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

export const CollectionListStyle = {
    collectionListWrapper: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,
    collectionListHeader: css `
        display: flex;
        flex-direction: row;
        gap: 20px;
    `,
    buttonAddModal: css`
        width: 8rem;
    `,
    addCollectionContainer: css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;;
    `,
    inputCollection: css`
        border: 1px solid ${globalStyle.colors.gray[50]};
        padding: 0.8rem;
        border-radius: 6px;
        width: 100%;
    `,
    collectionListContent: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 1rem;
    `,
    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}