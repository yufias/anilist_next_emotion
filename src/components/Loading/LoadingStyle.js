import { css } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyle'

export const LoadingStyle = {
    loading: css`
        border: 16px solid ${globalStyle.colors.gray[10]}; 
        border-top: 16px solid ${globalStyle.colors.blue[70]}; 
        border-radius: 50%;
        margin: auto;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;  
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `
}