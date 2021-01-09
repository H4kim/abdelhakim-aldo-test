import classes from './Home.module.css'
import React from 'react'
import PrimaryTitle from '../../Components/PrimaryTitle/PrimaryTitle'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'

const Home = () => {
    const switchViewHandler = () => {
        //TODO set the state 
    }
    return (
        <div className={classes.container}>
            <PrimaryTitle text={'Latest tweets'} />
            <PrimaryButton text={'Switch Candidate'} clicked={switchViewHandler} />
        </div>
    )
}

export default Home
