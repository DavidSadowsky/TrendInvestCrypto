import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Graph from './Graph'
import ReportTitle from './ReportTitle'

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'white',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        paddingLeft: theme.spacing(20),
        paddingRight: theme.spacing(20),
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#1652F0',
        borderColor: '#0063cc',
        fontFamily: 'Red Hat Display',
        '&:hover': {
          backgroundColor: '#0069d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
        '&:disabled': {
          backgroundColor: '#bababa',
          borderColor: '#bababa'
        }
      },
      buttonSmall: {
        color: 'white',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#1652F0',
        borderColor: '#0063cc',
        fontFamily: 'Red Hat Display',
        '&:hover': {
          backgroundColor: '#0069d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
        '&:disabled': {
          backgroundColor: '#bababa',
          borderColor: '#bababa'
        }
      }
}))

const Report = ({data, onClear}) => {
    const classes = useStyles()
    const reddit_mentions = [
        { 
            "name": "4",
            "# of reddit mentions": data.misc.Reddit_mentions_four_weeks_ago,
        },
        { 
            "name": "3",
            "# of reddit mentions": data.misc.Reddit_mentions_three_weeks_ago,
        },
        { 
            "name": "2",
            "# of reddit mentions": data.misc.Reddit_mentions_two_weeks_ago,
        },
        { 
            "name": "1",
            "# of reddit mentions": data.misc.Reddit_mentions_last_week,
            
        },
        { 
            "name": "0",
            "# of reddit mentions": data.misc.Reddit_mentions_this_week, 
            
        },
    ]

    const reddit_mentions_percent_change = [
        data.misc.Reddit_mentions_last_week === 0 ? 1 + data.misc.Reddit_mentions_this_week : data.misc.Reddit_mentions_this_week / data.misc.Reddit_mentions_last_week,
        data.misc.Reddit_mentions_two_weeks_ago === 0 ? 1 + data.misc.Reddit_mentions_last_week : data.misc.Reddit_mentions_last_week / data.misc.Reddit_mentions_two_weeks_ago,
        data.misc.Reddit_mentions_three_weeks_ago === 0 ? 1 + data.misc.Reddit_mentions_two_weeks_ago : data.misc.Reddit_mentions_two_weeks_ago / data.misc.Reddit_mentions_three_weeks_ago,
        data.misc.Reddit_mentions_four_weeks_ago === 0 ? 1 + data.misc.Reddit_mentions_three_weeks_ago : data.misc.Reddit_mentions_three_weeks_ago / data.misc.Reddit_mentions_four_weeks_ago,
        1,
    ]

    const reddit_sentiment = [
        { 
            "name": "4",
            "Average sentiment": data.misc.Reddit_sentiment_four_weeks_ago, 
        },
        { 
            "name": "3",
            "Average sentiment": data.misc.Reddit_sentiment_three_weeks_ago, 
        },
        { 
            "name": "2",
            "Average sentiment": data.misc.Reddit_sentiment_two_weeks_ago, 
        },
        { 
            "name": "1",
            "Average sentiment": data.misc.Reddit_sentiment_last_week, 
        },
        { 
            "name": "0",
            "Average sentiment": data.misc.Reddit_sentiment_this_week, 
        },
    ]

    const reddit_sentiment_percent_change = [
        data.misc.Reddit_sentiment_last_week === 0 ? 1 + data.misc.Reddit_sentiment_this_week : data.misc.Reddit_sentiment_this_week / data.misc.Reddit_sentiment_last_week,
        data.misc.Reddit_sentiment_two_weeks_ago === 0 ? 1 + data.misc.Reddit_sentiment_last_week : data.misc.Reddit_sentiment_last_week / data.misc.Reddit_sentiment_two_weeks_ago,
        data.misc.Reddit_sentiment_three_weeks_ago === 0 ? 1 + data.misc.Reddit_sentiment_two_weeks_ago : data.misc.Reddit_sentiment_two_weeks_ago / data.misc.Reddit_sentiment_three_weeks_ago,
        data.misc.Reddit_sentiment_four_weeks_ago === 0 ? 1 + data.misc.Reddit_sentiment_three_weeks_ago : data.misc.Reddit_sentiment_three_weeks_ago / data.misc.Reddit_sentiment_four_weeks_ago,
        1,
    ]

    const twitter_mentions = [
        { 
            "name": "4",
            "# of twitter mentions": data.misc.Twitter_mentions_four_weeks_ago, 
        },
        { 
            "name": "3",
            "# of twitter mentions": data.misc.Twitter_mentions_three_weeks_ago, 
        },
        { 
            "name": "2",
            "# of twitter mentions": data.misc.Twitter_mentions_two_weeks_ago, 
        },
        { 
            "name": "1",
            "# of twitter mentions": data.misc.Twitter_mentions_last_week, 
        },
        { 
            "name": "0",
            "# of twitter mentions": data.misc.Twitter_mentions_this_week, 
        },
    ]

    const twitter_mentions_percent_change = [
        data.misc.Twitter_mentions_last_week === 0 ? 1 + data.misc.Twitter_mentions_this_week : data.misc.Twitter_mentions_this_week / data.misc.Twitter_mentions_last_week,
        data.misc.Twitter_mentions_two_weeks_ago === 0 ? 1 + data.misc.Twitter_mentions_last_week : data.misc.Twitter_mentions_last_week / data.misc.Twitter_mentions_two_weeks_ago,
        data.misc.Twitter_mentions_three_weeks_ago === 0 ? 1 + data.misc.Twitter_mentions_two_weeks_ago : data.misc.Twitter_mentions_two_weeks_ago / data.misc.Twitter_mentions_three_weeks_ago,
        data.misc.Twitter_mentions_four_weeks_ago === 0 ? 1 + data.misc.Twitter_mentions_three_weeks_ago : data.misc.Twitter_mentions_three_weeks_ago / data.misc.Twitter_mentions_four_weeks_ago,
        1,
    ]

    const twitter_sentiment = [
        { 
            "name": "4",
            "Average sentiment": data.misc.Twitter_sentiment_four_weeks_ago, 
        },
        { 
            "name": "3",
            "Average sentiment": data.misc.Twitter_sentiment_three_weeks_ago, 
        },
        { 
            "name": "2",
            "Average sentiment": data.misc.Twitter_sentiment_two_weeks_ago, 
        },
        { 
            "name": "1",
            "Average sentiment": data.misc.Twitter_sentiment_last_week, 
        },
        { 
            "name": "0",
            "Average sentiment": data.misc.Twitter_sentiment_this_week, 
        },
    ]

    const twitter_sentiment_percent_change = [
        data.misc.Twitter_sentiment_last_week === 0 ? 1 + data.misc.Twitter_sentiment_this_week : data.misc.Twitter_sentiment_this_week / data.misc.Twitter_sentiment_last_week,
        data.misc.Twitter_sentiment_two_weeks_ago === 0 ? 1 + data.misc.Twitter_sentiment_last_week : data.misc.Twitter_sentiment_last_week / data.misc.Twitter_sentiment_two_weeks_ago,
        data.misc.Twitter_sentiment_three_weeks_ago === 0 ? 1 + data.misc.Twitter_sentiment_two_weeks_ago : data.misc.Twitter_sentiment_two_weeks_ago / data.misc.Twitter_sentiment_three_weeks_ago,
        data.misc.Twitter_sentiment_four_weeks_ago === 0 ? 1 + data.misc.Twitter_sentiment_three_weeks_ago : data.misc.Twitter_sentiment_three_weeks_ago / data.misc.Twitter_sentiment_four_weeks_ago,
        1,
    ]

    const price = [
        { 
            "name": "4",
            "price": data.misc.Price_four_weeks_ago, 
        },
        { 
            "name": "3",
            "price": data.misc.Price_three_weeks_ago, 
        },
        { 
            "name": "2",
            "price": data.misc.Price_two_weeks_ago, 
        },
        { 
            "name": "1",
            "price": data.misc.Price_last_week, 
        },
        { 
            "name": "0",
            "price": data.misc.Price_this_week, 
        },
    ]

    const price_percent_change = [
        data.misc.Price_last_week === 0 ? 1 + data.misc.Price_this_week : data.misc.Price_this_week / data.misc.Price_last_week,
        data.misc.Price_two_weeks_ago === 0 ? 1 + data.misc.Price_last_week : data.misc.Price_last_week / data.misc.Price_two_weeks_ago,
        data.misc.Price_three_weeks_ago === 0 ? 1 + data.misc.Price_two_weeks_ago : data.misc.Price_two_weeks_ago / data.misc.Price_three_weeks_ago,
        data.misc.Price_four_weeks_ago === 0 ? 1 + data.misc.Price_three_weeks_ago : data.misc.Price_three_weeks_ago / data.misc.Price_four_weeks_ago,
        1,
    ]
    return (
        <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
         >
            <ReportTitle data={data} />
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            >
                <Graph title="Reddit Mentions (Weekly)" data={reddit_mentions}  dataKey="# of reddit mentions" labels={reddit_mentions_percent_change}/>
                <Graph title="Reddit Sentiment (Weekly)" data={reddit_sentiment} dataKey="Average sentiment" labels={reddit_sentiment_percent_change} />
            </Grid>
            <Grid 
             container
             direction="row"
             justify="center"
             alignItems="center"
             xs={12}
            >
                <Graph title="Twitter Mentions (Weekly)" data={twitter_mentions} dataKey="# of twitter mentions" labels={twitter_mentions_percent_change} />
                <Graph title="Twitter Sentiment (Weekly)" data={twitter_sentiment} dataKey="Average sentiment" labels={twitter_sentiment_percent_change} />
            </Grid>
            <Grid 
             container
             direction="row"
             justify="center"
             alignItems="center"
             xs={12}
            >
                 <Graph title="Price (Weekly)" data={price} dataKey="price" labels={price_percent_change} />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 20}}>
            <Hidden xsDown>
              <Button 
               onClick={() => onClear()}
               className={classes.button}
                >
                    Make another prediction
              </Button>
            </Hidden>
            <Hidden smUp>
            <Button  
               onClick={() => onClear()}
               className={classes.buttonSmall}
                >
                    Make another prediction
              </Button>
            </Hidden>
          </Grid>
        </Grid>
    )
}

export default Report