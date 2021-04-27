import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import InputForm from '../Components/InputForm'
import { makeStyles } from '@material-ui/core/styles'
import TypeWriterEffect from 'react-typewriter-effect';

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
      textAlign: 'center',
      alignSelf: 'center'
    },
    animateWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  }))

const Landing = ({setData, data, setIsLoading, isLoading}) => {
    const classes = useStyles()
    const myRef = document.querySelector('.scrollable-div')
    return (
      <Container className={classes.body}>
        { isLoading ? <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display', color: 'white', textAlign: 'center' }}
                startDelay={100}
                cursorColor="white"
                multiText={["Generating a prediction...",
                "this can take up to a minute since I'm collecting realtime data.",
                "Reddit & Twitter have strict scraping limitations.",
                "I can only parse 250 posts at a time - I wonder if there's a way around that?",
                "Should be done soon...",
                "Hang tight. I'm still working."
                ]}
                typeSpeed={50}
                hideCursorAfterText={false}
                scrollArea={myRef}
                className={classes.title}
                /> :
        <Container className={classes.body}>
            <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display', color: 'white', textAlign: 'center' }}
                startDelay={100}
                cursorColor="white"
                text="Predict. Research. Invest."
                typeSpeed={100}
                hideCursorAfterText={true}
                scrollArea={myRef}
                className={classes.title}
                />
                <Box pt={10} className={classes.card}>
                <InputForm className={classes.form} setData={setData} setIsLoading={setIsLoading} />
                </Box>
            </Container>
        }
        </Container>
    )
}

export default Landing