import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { colors } from '../constants/colors/colors'
import classes from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card/Card'
import firebase from '../firebase'

const HomePage = ({ pets }) => {
  
  const router = useRouter()

  const changeRouteHandler = pet => {
    router.push({
      pathname: '/pets/[petType]',
      query: { petType: pet.type },
    })
  }

  return (
    <>
      <div style={{ backgroundColor: colors.orange }} className={classes.container} />
      <h1 className={classes.header}>Pet Store</h1>
      <h3 className={classes.description}>We got the best pets for you to choose from!</h3>
      <div className={classes.image}>
        <Image src={require('../public/images/dog.png')} width={500} height={300} alt='dog image' objectFit='cover' />
      </div>
      <div>
        <h2 className={classes.secondHeader}>Featured Pets</h2>
        <div className={classes.cardContainer}>
          <div className={classes.cards}>
            {pets.map(pet => {
              return (
                <Fragment key={pet.id}>
                  <Card
                    onClick={() => changeRouteHandler(pet)}
                    image={pet.image}
                    alt={pet.description}
                    title={pet.type}
                    description={pet.description}
                  />
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const petsResponse = await firebase.firestore().collection('pets').where('featured', '==', true)
  const petsData = await petsResponse.get()
  
  let pets = []
  petsData.forEach(pet => {
    pets.push(pet.data())
  })

  return {
    props: {
      pets
    }
  }
}

export default HomePage
