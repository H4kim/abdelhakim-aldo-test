import classes from './CandidateView.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {addCandidates} from '../../Redux/actions'
const CandidateView = (props) => {
    const addCandidates = () => {
        props.addCandidates([4,5])
    }
    return (
        <div className={classes.container} onClick={() => addCandidates()}>
            {`YOO IT'S WORKING ${props.candidatesIDs}`}
        </div>
    )
}


const mapStateToProps = (state) => {
    // ... computed data from state and optionally ownProps
    return {
        candidatesIDs: state.Candidate.candidatesIDs,
        selectedCandidate: state.Candidate.selectedCandidate
    }   
}
  
//   const mapDispatchToProps = {
//     // ... normally is an object full of action creators
//   }

export default connect(mapStateToProps , {addCandidates} )(CandidateView)
