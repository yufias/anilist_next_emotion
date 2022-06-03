/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { ContainerStyle } from './ContainerStyle'

const Container = ({ children }) => {
    const [maxWidth, setMaxWidth] = useState('')
    const breakPoints = ['100%', '540px', '720px', '960px', '1140px']

    const checkDeviceWidth = () => {
        if(window.innerWidth < 576) setMaxWidth(breakPoints[0])
        if(window.innerWidth >= 576) setMaxWidth(breakPoints[1])
        if(window.innerWidth >= 768) setMaxWidth(breakPoints[2])
        if(window.innerWidth >= 992) setMaxWidth(breakPoints[3])
        if(window.innerWidth > 1200) setMaxWidth(breakPoints[4])
    }

    useEffect(() => {
        checkDeviceWidth()
    }, [])

    return(
        <div css={ContainerStyle(maxWidth)}>
            {children}
        </div>
    )
}

export default Container