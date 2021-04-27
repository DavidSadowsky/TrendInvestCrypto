import React, { useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { LineChart, XAxis, CartesianGrid, Line, Tooltip, YAxis } from 'recharts'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'

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
    },
    xlabel: {
        
    },
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
            <Grid item xs={12}>
                <h2>{data.misc.name}</h2>
            </Grid>
            <Grid item xs={12} style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
            <caption>
                <center>
                    I've predicted that {data.misc.name} is
                        <span 
                            style={{ color: data.prediction === 'Bearish' ? 'red' : 'green'}}>
                                {' ' + data.prediction + ' '}
                        </span> 
                    for the next week with a confidence level of 
                        <span 
                            style={{ color: data.confidence > .80 ? 'green' : data.confidence < .65 ? 'red' : 'orange'}}>
                                    {' ' + (data.confidence*100).toFixed(2)}%
                        </span>
                </center>
            </caption>
            </Grid>
            <Grid item xs={12}>
            <h4 className={classes.graph_section_title}><center>Here's some of the data I used</center></h4>
            </Grid>
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            >
                <Grid item md={6} sm={12} style={{ paddingTop: 20}}>
                <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h6 className={classes.xlabel}>Reddit Mentions (Weekly)</h6>
                        <LineChart
                         width={375}
                         height={400}
                         data={reddit_mentions}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip 
                             labelFormatter={function(value) {
                                return `Percent change: ${((reddit_mentions_percent_change[value] - 1) * 100).toFixed(2)}%`;
                                }}
                            />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="# of reddit mentions" stroke="#8884d8" />
                        </LineChart>
                    <h6 className={classes.xlabel}>Weeks ago</h6>
                    </Container>
                </Grid>
                <Grid item md={6} sm={12} style={{ paddingTop: 20}}>
                <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h6 className={classes.xlabel}>Reddit Sentiment (Weekly)</h6>
                        <LineChart
                         width={375}
                         height={400}
                         data={reddit_sentiment}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip 
                             labelFormatter={function(value) {
                                return `Percent change: ${((reddit_sentiment_percent_change[value] - 1) * 100).toFixed(2)}%`;
                                }}
                            />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="Average sentiment" stroke="#8884d8" />
                        </LineChart>
                    <h6 className={classes.xlabel}>Weeks ago</h6>
                </Container>
                </Grid>
            </Grid>
            <Grid 
             container
             direction="row"
             justify="center"
             alignItems="center"
             xs={12}
            >
                <Grid item md={6} xs={12} style={{ paddingTop: 20}}>
                    <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h6 className={classes.xlabel}>Twitter Mentions (Weekly)</h6>
                        <LineChart
                         width={375}
                         height={400}
                         data={twitter_mentions}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip 
                             labelFormatter={function(value) {
                                return `Percent change: ${((twitter_mentions_percent_change[value] - 1) * 100).toFixed(2)}%`;
                                }}
                            />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="# of twitter mentions" stroke="#8884d8" />
                        </LineChart>
                    <h6 className={classes.xlabel}>Weeks ago</h6>
                    </Container>
                </Grid>
                <Grid item md={6} xs={12} style={{ paddingTop: 40}}>
                <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h6 className={classes.xlabel}>Twitter Sentiment (Weekly)</h6>
                        <LineChart
                         width={375}
                         height={400}
                         data={twitter_sentiment}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip 
                             labelFormatter={function(value) {
                                return `Percent change: ${((twitter_sentiment_percent_change[value] - 1) * 100).toFixed(2)}%`;
                                }}
                            />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="Average sentiment" stroke="#8884d8" />
                        </LineChart>
                    <h6 className={classes.xlabel}>Weeks ago</h6>
                    </Container>
                </Grid>
            </Grid>
            <Grid 
             container
             direction="row"
             justify="center"
             alignItems="center"
             xs={12}>
                <Grid item md={6} xs={12} style={{ paddingTop: 40}}>
                <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h6 className={classes.xlabel}>Price (Weekly)</h6>
                        <LineChart
                         width={375}
                         height={400}
                         data={price}
                         margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis domain={['auto', 'auto']}/>
                            <Tooltip 
                             labelFormatter={function(value) {
                                return `Percent change: ${((price_percent_change[value] - 1) * 100).toFixed(2)}%`;
                                }}
                            />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        </LineChart>
                    <h6 className={classes.xlabel}>Weeks ago</h6>
                </Container>
                </Grid>
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