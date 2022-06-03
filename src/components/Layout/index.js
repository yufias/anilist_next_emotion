import { useState, useEffect } from 'react'
import Header from './Header'
import MobileNavigation from './MobileNavigation'
import Footer from './Footer'

const Layout = ({children}) => {
    const [mobile, setMobile] = useState(false)

    const checkDeviceWidth = () => {
        setMobile(window.innerWidth < 576 ? true : false)
    }

    useEffect(() => {
        checkDeviceWidth()
    }, [])

    
    return(
        <>
            {mobile ? <MobileNavigation /> : <Header /> }
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Layout