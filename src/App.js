import './App.css';
import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import logo from './assets/Trend Invest.svg'
import { makeStyles } from '@material-ui/core/styles'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AnimateOnChange } from 'react-animation'
import Landing from './Screens/landing'
import Results from './Components/Results'

const useStyles = makeStyles((theme) => ({
  logo: {
    alignSelf: 'start'
  },
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  card: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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
    <div className={classes.body}>
      <img src={logo} width='200' height='200' className={classes.logo} alt="Trend Invest Crypto Logo"/>
      <AnimateOnChange>
        {data != null ? 
          <Box className={classes.card}>
            <Results onClear={setData} data={data} />
          </Box> 
          : 
          <Landing setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} />}
      </AnimateOnChange>
    </div>
  );
}

export default App;
