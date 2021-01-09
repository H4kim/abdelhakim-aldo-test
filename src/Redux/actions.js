import { ADD_CANDIDATE, SWITCH_CANDIDATE } from "./actionTypes";


export const addCandidates = (IDs) => {
    return {
        type: ADD_CANDIDATE,
        payload: IDs
    }
}
export const switchCandidate = (candidateID) => {
    return {
        type: SWITCH_CANDIDATE,
        payload : candidateID
    }
}