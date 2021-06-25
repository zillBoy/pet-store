import React from 'react'
import Router from 'next/router'
import nProgress from 'nprogress'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

Router.onRouteChangeStart = () => nProgress.start()
Router.onRouteChangeComplete = () => nProgress.done()
Router.onRouteChangeError = () => nProgress.done()

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout
