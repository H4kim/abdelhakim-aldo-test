/* eslint-disable import/no-anonymous-default-export */
import {SWITCH_CANDIDATE, ADD_CANDIDATE} from '../actionTypes'

const initialState = {
    candidatesIDs : [1,2,3],
    selectedCandidate : {test:'haha'}
}

export default function(state = initialState , action) {
    switch(action.type) {
        case ADD_CANDIDATE : {
            return {
                ...state,
                candidatesIDs : [...state.candidatesIDs, ...action.payload  ]
            }
        }
        case SWITCH_CANDIDATE : {
            return {
                ...state,
                selectedCandidate : action.payload
            }
        }
        default: return state;
    }
}