import classes from './Tweets.module.css'
import React from 'react'

const Tweet = ({tweet}) => {
    return (
        <div className={classes.container}>
            <p className={classes.text}>{tweet}</p>
        </div>
    )
}

export default Tweet
