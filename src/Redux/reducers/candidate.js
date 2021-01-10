/* eslint-disable import/no-anonymous-default-export */
import {SWITCH_CANDIDATE_BY_ID, ADD_CANDIDATE} from '../actionTypes'

const initialState = {
    candidates : [],
    selectedCandidateID: 1215
}

export default function(state = initialState , action) {
    switch(action.type) {
        case ADD_CANDIDATE : {
            return {
                ...state,
                candidates : [...state.candidates, ...action.payload  ]
            }
        }
        case SWITCH_CANDIDATE_BY_ID : {
            return {
                ...state,
                selectedCandidateID : action.payload
            }
        }
        default: return state;
    }
}


/*
    1- for the app.js make a call to twitter api and get the data of all candidates
    2- update the store's state (candidates) AND set the first candidate as selected by default (selectedCandidateID)
    
*/