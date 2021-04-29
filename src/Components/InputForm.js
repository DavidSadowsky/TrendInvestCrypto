import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import data from '../assets/crypto_data'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
    form: {
      backgroundColor: 'white',
      padding: theme.spacing(5),
      borderRadius: 5,
      boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, .3)',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
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

const InputForm = ({setData, setIsLoading}) => {
    const classes = useStyles()
    const [selection, setSelection] = useState('')

    const selectCoin = (params) => {
        setSelection(params.inputProps.value)
        return <TextField {...params} fontFamily="Red Hat Display" label="Coin" variant="outlined" />
    }

    const getPrediction = () => {
      setIsLoading(true)
      var interval = setInterval(async function() {
        fetch('https://trend-invest-web.herokuapp.com/predict?coinName=' + selection, {
          method: "GET",
          mode: "cors",
          credentials: 'include'
          }).then(res => res.json().then(data => {
            if (data.data !== 'Job running' && data.data !== 'Job started') {
              setData(data.data)
              setIsLoading(false)
              clearInterval(interval)
            }
            else {
              console.log(data)
            }
          }).catch((error) => {
            console.error('Error:', error)
            setIsLoading(false)
        })
      )}, 2000)
    }

    return (
        <Grid container
         direction="row"
         justify="center"
         alignItems="center"
         className={classes.form}
        >
          <Grid item xs={12}>
            <Hidden xsDown>
            <Autocomplete
                id="combo-box-demo"
                options={data}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => selectCoin(params)}
            />
            </Hidden>
            <Hidden smUp>
            <Autocomplete
                id="combo-box-demo"
                options={data}
                getOptionLabel={(option) => option.title}
                style={{ width: 200 }}
                renderInput={(params) => selectCoin(params)}
            />
            </Hidden>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20}}>
            <Hidden xsDown>
              <Button 
               disabled={selection === ''} 
               onClick={() => getPrediction()}
               className={classes.button}
                >
                    Submit
              </Button>
            </Hidden>
            <Hidden smUp>
            <Button 
               disabled={selection === ''} 
               onClick={() => getPrediction()}
               className={classes.buttonSmall}
                >
                    Submit
              </Button>
            </Hidden>
          </Grid>
        </Grid>
    );
}

export default InputForm