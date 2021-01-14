import classes from './Home.module.css'
import React from 'react'
import PrimaryTitle from '../../Components/PrimaryTitle/PrimaryTitle'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'
import CandidateView from '../../Components/CandidateView/CandidateView'
import {connect} from 'react-redux'
import {switchCandidate} from '../../Redux/actions'

const Home = (props) => {
    const switchViewHandler = () => {
        props.switchCandidate()
    }
    return (
        <div className={classes.container}>
            <PrimaryTitle text={'Latest tweets'} />
            <PrimaryButton text={'Switch Candidate'} clicked={switchViewHandler} />
            <div className={classes.candidateContainer}>
                <CandidateView />
            </div>
        </div>
    )
}

export default connect(null, {switchCandidate})(Home)
