/* eslint-disable import/no-anonymous-default-export */
import { processCandidatesData } from '../../Utils/processData'
import {SWITCH_CANDIDATE_BY_ID, ADD_CANDIDATE} from '../actionTypes'

const initialState = {
    candidates : [],
    selectedCandidate: {}
}



export default function(state = initialState , action) {
    switch(action.type) {
        case ADD_CANDIDATE : {
            const newState = processCandidatesData(action.payload)
            return {
                selectedCandidate: newState[0],
                candidates : newState
            }
        }
        case SWITCH_CANDIDATE_BY_ID : {
            const selectedCandidate = state.candidates.filter(cur => {
                return cur.name !== state.selectedCandidate.name
            })
            return {
                ...state,
                selectedCandidate : selectedCandidate[0]
            }
        }
        default: return state;
    }
}
