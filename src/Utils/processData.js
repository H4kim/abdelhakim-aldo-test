
export const processCandidatesData = (data) => {
    const candidates = data.map(cur => {
        return {
            name : cur.data.includes.users[0].name,
            tweets: cur.data.data
        }
    })
    return candidates
}
