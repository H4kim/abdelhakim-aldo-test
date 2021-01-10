import classes from './CandidateView.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {addCandidates} from '../../Redux/actions'
const CandidateView = (props) => {
    const addCandidates = () => {
        props.addCandidates([{name:"trump"},{name:'deni'}])
        console.log(props.candidates)
    }
    return (
        <div className={classes.container} onClick={() => addCandidates()}>
            {`YOO IT'S WORKING ${props.candidates}`}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        candidates: state.candidate.candidates,
        selectedCandidateID: state.candidate.selectedCandidateID
    }   
}
  
export default connect(mapStateToProps , {addCandidates} )(CandidateView)
