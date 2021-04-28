import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { LineChart, XAxis, CartesianGrid, Line, Tooltip, YAxis } from 'recharts'

const Graph = ({data, labels, dataKey, title}) => {
    return (
    <Grid item md={6} sm={12} style={{ paddingTop: 20}}>
        <Container style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h6>{title}</h6>
                <LineChart
                    width={375}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                >
                    <XAxis dataKey="name"/>
                    <YAxis domain={['auto', 'auto']}/>
                    <Tooltip 
                        labelFormatter={function(value) {
                        return `Percent change: ${((labels[value] - 1) * 100).toFixed(2)}%`;
                        }}
                    />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                </LineChart>
            <h6>Weeks ago</h6>
        </Container>
    </Grid>
    )
}

export default Graph