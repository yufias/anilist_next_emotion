import { css } from '@emotion/react'

export const ModalStyle = {
    modalWindow: css`
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    `,
    modalContent: css`
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 18rem;
    `,
    close: css`
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        &:hover {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
    `,
    modalShow: css`
        display: block;
    `,
    modalClose: css`
        display:none;
    `
}