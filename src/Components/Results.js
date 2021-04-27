import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Report from './Report'
import TypeWriterEffect from 'react-typewriter-effect';
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    body: {
      backgroundColor: 'white',
      padding: theme.spacing(5),
      borderRadius: 5,
      boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, .3)',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
  }))

const Results = ({onClear, data}) => {
    const classes = useStyles()
    const myRef = document.querySelector('.scrollable-div')

    return (
      <Grid container>
        <Hidden smUp>
        <Grid container style={{ 
          paddingBottom: 50,
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          padding: 10,
          zoom: '75%'
          }}>
        <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display', color: 'white', textAlign: 'center' }}
                startDelay={0}
                cursorColor="white"
                multiText={["Thanks for waiting!",
                "Here's your report."]}
                typeSpeed={50}
                hideCursorAfterText={true}
                scrollArea={myRef}
                className={classes.title}
                />
        <Grid container xs={12}
         className={classes.body}
         >
            <Report onClear={onClear} data={data}/>
        </Grid>
        </Grid>
        </Hidden>
        <Hidden xsDown>
        <Grid container style={{ 
          paddingBottom: 50,
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          padding: 10,
          }}>
        <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display', color: 'white', textAlign: 'center' }}
                startDelay={0}
                cursorColor="white"
                multiText={["Thanks for waiting!",
                "Here's your report."]}
                typeSpeed={50}
                hideCursorAfterText={true}
                scrollArea={myRef}
                className={classes.title}
                />
        <Grid container xs={12}
         className={classes.body}
         >
            <Report onClear={onClear} data={data}/>
        </Grid>
        </Grid>
        </Hidden>
        </Grid>
    );
}

export default Results