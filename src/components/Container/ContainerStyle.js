import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

export const ContainerStyle = (props) => (css`
    padding: 1.25rem;
    max-width: ${props};
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    // small devices (576 and below)
    @media (max-width: 576px) {
        margin-bottom: 6rem;
    }

    ` 
)