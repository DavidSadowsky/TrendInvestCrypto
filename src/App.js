import './App.css';
import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import logo from './assets/Trend Invest.svg'
import { makeStyles } from '@material-ui/core/styles'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AnimateOnChange } from 'react-animation'
import Landing from './Screens/landing'
import Results from './Screens/Results'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
  logo: {
    alignSelf: 'flex-start',
  },
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  animateWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}))


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#1652F0'
  }, [])

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const classes = useStyles()

  return (
    <Grid
     container
     direction="column"
     justify="center"
     alignItems="center"
     >
       <Hidden xsDown>
       <img src={logo} width='200' height='200' className={classes.logo} alt="Trend Invest Crypto Logo"/>
       </Hidden>
       <Hidden smUp>
      <Grid item>
      <img src={logo} width='200' height='200' className={classes.logo} alt="Trend Invest Crypto Logo"/>
      </Grid>
      </Hidden>
      <Grid item>
      <AnimateOnChange>
        {data != null ? 
            <Results onClear={setData} data={data} />
          :
          <Box>
          <Landing setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} />
          </Box>
          }
      </AnimateOnChange>
      </Grid>
    </Grid>
  );
}

export default App;
