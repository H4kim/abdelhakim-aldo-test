import { ADD_CANDIDATE, SWITCH_CANDIDATE_BY_ID } from "./actionTypes";


export const addCandidates = (data) => {
    return {
        type: ADD_CANDIDATE,
        payload: data
    }
}
export const switchCandidate = () => {
    return {
        type: SWITCH_CANDIDATE_BY_ID,
        payload : null
    }
}   