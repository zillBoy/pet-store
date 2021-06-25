import React from 'react'
import Image from 'next/image'
import classes from '../../styles/Card.module.css'

const Card = ({ image, alt, title, description }) => {
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <Image src={image} width={307} height={247} alt={alt} objectFit='cover' />
            </div>
            <div className={classes.content}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    )
}

export default Card
