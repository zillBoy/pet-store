import React from 'react'
import firebase from '../../firebase'
import Selector from '../../components/Selector/Selector'

const PetsPage = ({ petType }) => {
    return (
        <>
            <Selector type={petType} />
            {/* Cards */}
        </>
    )
}

export const getStaticProps = async (context) => {
    
    const { params } = context
    const petType = params.petType
    
    return {
        props: {
            petType
        }
    }
}

export const getStaticPaths = async () => {
    const response = await firebase.firestore().collection('petType')
    const petData = await response.get()
    const petTypes = []
    petData.forEach(e => petTypes.push({params: { petType: e.data().title }}))
    
    return {
        paths: petTypes,
        fallback: false
    }
}

export default PetsPage