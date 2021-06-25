import React from 'react'
import classes from '../../styles/Navbar.module.css'
import { colors } from '../../constants/colors/colors'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div style={{backgroundColor: colors.blue}} className={classes.container}>
            <h3>Pet Store</h3>
            <div className={classes.linkContainer}>
                <Link href='/pets'>
                    <a>Pets</a>
                </Link>
                <div className={classes.image}>
                    <p className={classes.counter}>1</p>
                    <Image src={require('../../public/images/whitePet.png')} width={25} height={25} alt='white pet' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
