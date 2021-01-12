import {Axios} from '../helpers/axios';
import {TWITTER_GET_TWEETS_BASE_URL} from '../Utils/Constants'


export const get_candidates = (userID) => {
    return Axios.get((`${TWITTER_GET_TWEETS_BASE_URL}/users/${userID}/tweets`)).then((result) => {
        return result.data.data
    }).catch((err) => { 
        console.log('yoo error from api',err)
    });
}