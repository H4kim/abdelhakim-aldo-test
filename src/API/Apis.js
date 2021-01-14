import {Axios} from '../helpers/axios';
import {TWITTER_GET_TWEETS_BASE_URL} from '../Utils/Constants'


export const get_candidates =  (userIDs) => {
    return userIDs.map(async cur => {
        return await Axios.get((`${TWITTER_GET_TWEETS_BASE_URL}/users/${cur}/tweets?expansions=author_id`))
    })
}   