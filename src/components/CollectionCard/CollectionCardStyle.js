import { css } from "@emotion/react";
import { globalStyle } from "../../../styles/globalStyle";

export const CollectionCardStyle = {
    collectionCard: css`
        display: flex;
        width: 12rem;
        padding: 0.5rem;
        flex-direction: row;
        border: 1px solid ${globalStyle.colors.gray[30]};
        border-radius: 6px;
        justify-content: space-between;
        align-items: center;
        &:hover {
            background-color: ${globalStyle.colors.gray[10]};
            cursor: pointer;
        }

        // xtra small devices (576 and below)
        @media (max-width: 576px) {
            width: 10rem;
        }

        // xtra small devices (576 and below)
        @media (max-width: 768) {
            width: 12rem;
        }
    `,
    collectionLabel: css`
        word-break: break-word;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 80px;

        // xtra small devices (576 and below)
        @media (max-width: 576px) {
        }

        // small devices (576 and up)
        @media (min-width: 576px) {
        }
    `,
    cardAnchor: css`
        display: flex;
        gap: 0.4rem;
    `,
    actionContainer: css`
        display: flex;
    `,
    deleteContainer: css`
        position: relative;
        right: 0;
        width: 2rem;
    `,
    containerHide: css`
        display: none;
    `,
    editContainer: css`
        position: relative;
        right: 0;
        width: 2rem;
    `,
}