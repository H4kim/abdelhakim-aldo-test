import classes from './CandidateView.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {addCandidates} from '../../Redux/actions'
import ViewsTitle from '../ViewsTitle/ViewsTitle'
import Tweet from '../Tweet/Tweet'
const CandidateView = (props) => {
    const renderTweets = () => {
        if(!props.selectedCandidate.tweets) return
        return props.selectedCandidate.tweets.map((cur,i) => {
            return <Tweet key={cur.id} tweet={cur.text}/>
        })
    }
    return (
        <div className={classes.container}>
            <ViewsTitle text={props.selectedCandidate.name} />
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
