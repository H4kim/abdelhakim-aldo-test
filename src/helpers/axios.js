import axios from 'axios'
import {TWITTER_GET_TWEETS_BASE_URL} from '../Utils/Constants'
require('dotenv').config()

export const Axios =  axios.create({
    baseURL: TWITTER_GET_TWEETS_BASE_URL,
    headers: {
        'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAAHdLLgEAAAAAZ6Lj%2BxnGaI48BuZAJ1QMnVPk1l4%3DY8p0sDaYcWUZjracBNbc9CWRrh6QsvU5q20eepiS9buzrf4CWM`,
        'Access-Control-Allow-Origin': '*',
        'withCredentials': true
    }
})

