import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Report from './Report'
import TypeWriterEffect from 'react-typewriter-effect';

const useStyles = makeStyles((theme) => ({
    logo: {
      marginLeft: theme.spacing(15)
    },
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
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      top: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
      },
      circle: {
        strokeLinecap: 'round',
      }
  }))

const Results = ({onClear, data}) => {
    const classes = useStyles()
    const myRef = document.querySelector('.scrollable-div')

    return (
        <div style={{ paddingBottom: 50}}>
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
        <Box className={classes.body} pt={20}>
            <Report onClear={onClear} data={data}/>
        </Box>
        </div>
    );
}

export default Results