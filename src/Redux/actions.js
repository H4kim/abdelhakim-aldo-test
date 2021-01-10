import { ADD_CANDIDATE, SWITCH_CANDIDATE_BY_ID } from "./actionTypes";


export const addCandidates = (IDs) => {
    return {
        type: ADD_CANDIDATE,
        payload: IDs
    }
}
export const switchCandidate = (candidateID) => {
    return {
        type: SWITCH_CANDIDATE_BY_ID,
        payload : candidateID
    }
}