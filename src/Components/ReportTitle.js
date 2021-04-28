import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    graph_section_title: {
        paddingTop: 30
    },
}))

const ReportTitle = ({data}) => {
    const classes = useStyles()
    return (
        <Grid container
         direction="column"
         justify="center"
         alignItems="center">
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
        </Grid>
    )
}

export default ReportTitle