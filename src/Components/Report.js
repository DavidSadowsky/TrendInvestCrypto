import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { LineChart, XAxis, CartesianGrid, Line, Tooltip, YAxis, Legend } from 'recharts'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    body: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    graph_section_title: {
        paddingTop: 30
    },
    graph_row: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    graph: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    reddit_mentions_graph: {
        paddingTop: 20
    },
    reddit_sentiment_graph: {
        paddingTop: 50
    }
}))

const BootstrapButton = withStyles({
    root: {
      color: 'white',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 14,
      padding: '6px 200px',
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
    },
  })(Button);

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
    return (
        <Box className={classes.body}>
            <h2>{data.misc.name}</h2>
            <caption>
                <center>
                    I've predicted that {data.misc.name} is
                        <span 
                            style={{ color: data.prediction == 'Bearish' ? 'red' : 'green'}}>
                                {' ' + data.prediction + ' '}
                        </span> 
                    for the next week with a confidence level of 
                        <span 
                            style={{ color: data.confidence > .80 ? 'green' : data.confidence < .65 ? 'red' : 'orange'}}>
                                    {' ' + (data.confidence*100).toFixed(2)}%
                        </span>
                </center>
            </caption>
            <h4 className={classes.graph_section_title}>Here's some of the data I used</h4>
            <div className={classes.graph_row}>
                <div className={classes.graph}>
                    <h6 className={classes.reddit_mentions_graph}>Reddit Mentions (Weekly)</h6>
                        <LineChart
                         width={400}
                         height={400}
                         data={reddit_mentions}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="# of reddit mentions" stroke="#8884d8" />
                        </LineChart>
                    <h6>Weeks ago</h6>
                </div>
                <div className={classes.graph}>
                    <h6 className={classes.reddit_mentions_graph}>Reddit Sentiment (Weekly)</h6>
                        <LineChart
                         width={400}
                         height={400}
                         data={reddit_sentiment}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="Average sentiment" stroke="#8884d8" />
                        </LineChart>
                    <h6>Weeks ago</h6>
                </div>
            </div>
            <div className={classes.graph_row}>
                <div className={classes.graph}>
                    <h6 className={classes.reddit_mentions_graph}>Twitter Mentions (Weekly)</h6>
                        <LineChart
                         width={400}
                         height={400}
                         data={twitter_mentions}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="# of twitter mentions" stroke="#8884d8" />
                        </LineChart>
                    <h6>Weeks ago</h6>
                </div>
                <div className={classes.graph}>
                    <h6 className={classes.reddit_mentions_graph}>Twitter Sentiment (Weekly)</h6>
                        <LineChart
                         width={400}
                         height={400}
                         data={twitter_sentiment}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="Average sentiment" stroke="#8884d8" />
                        </LineChart>
                    <h6>Weeks ago</h6>
                </div>
            </div>
            <div className={classes.graph_row}>
                <div className={classes.graph}>
                    <h6 className={classes.reddit_mentions_graph}>Price (Weekly)</h6>
                        <LineChart
                         width={400}
                         height={400}
                         data={price}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        </LineChart>
                    <h6>Weeks ago</h6>
                </div>
            </div>
            <Box className={classes.submit} pt={10}>
                <BootstrapButton onClick={() => onClear()}>
                    Make another prediction
                </BootstrapButton>
            </Box>
        </Box>
    )
}

export default Report