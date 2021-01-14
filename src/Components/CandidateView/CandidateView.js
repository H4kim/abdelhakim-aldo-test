import classes from './CandidateView.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {addCandidates} from '../../Redux/actions'
const CandidateView = (props) => {
    const renderTweets = () => {
        if(!props.selectedCandidate.tweets) return
        return props.selectedCandidate.tweets.map((cur,i) => {
            return <p key={i}>{cur.text}</p>
        })
    }
    return (
        <div className={classes.container}>
            <p>{props.selectedCandidate.name}</p>
            {props.selectedCandidate.tweets ? renderTweets() : 'loading ..'}   
        </div>
    )
}


const mapStateToProps = (state) => {    
    return {
        candidates: state.candidate.candidates,
        selectedCandidate: state.candidate.selectedCandidate
    }   
}
  
export default connect(mapStateToProps , {addCandidates} )(CandidateView)
