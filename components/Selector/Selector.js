import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import classes from '../../styles/Selector.module.css'
import Select from 'react-select'

const Selector = ({ type }) => {
    const [petTypes, setPetTypes] = useState([])
    const [price, setPrice] = useState([])

    const capatilize = value => {
        return value.slice(0, 1).toUpperCase() + value.slice(1)
    }

    useEffect(async () => {
        const response = await firebase.firestore().collection('petType')
        const petData = await response.get()
        const petTypes = []
        petData.forEach(e => petTypes.push({ value: e.data().title, label: capatilize(e.data().title) }))
        setPetTypes(petTypes)
    }, [])
    
    return (
        <div className={classes.container}>
            <div className={classes.petTypeContainer}>
                {petTypes.length !== 0 && <Select options={petTypes} />}
            </div>
            <div className={classes.petTypeContainer}>
                {petTypes.length !== 0 && <Select options={petTypes} />}
            </div>
            <div className={classes.petTypeContainer}>
                {petTypes.length !== 0 && <Select options={petTypes} />}
            </div>
        </div>
    )
}

export default Selector
