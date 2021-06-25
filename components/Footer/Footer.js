import React from 'react'
import classes from '../../styles/Footer.module.css'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
    
    return (
        <div className={classes.container}>
            <p className={classes.para}>All Rights Reserved &copy; 2021</p>
            <p onClick={() => router.push('/')} className={classes.para}>Pet Store</p>
        </div>
    )
}

export default Footer
