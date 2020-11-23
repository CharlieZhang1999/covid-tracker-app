import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider, makeStyles, Divider } from '@material-ui/core';
//import Slider from "react-slick";
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


//first we destructre data.data, then destructure data.data.confirmed, etc
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate } })  => {
    if(!confirmed){
        return "Loading...";
    }
      

    return(
        //the Typography is the place for us to fill in the text or content
        <div className={styles.container} style={{width:"80%", height:"300px", columnCount:3, borderTop:20,borderBottom:1500,}}>
            {/* <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid> */}


                        <div>
                        <Typography style={{color:"rgba(54, 162, 235, 1)", fontSize:"45px"}}>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </div>

                        <div>
                        <Typography  style={{color:"rgba(255, 206, 86, 1)", fontSize:"45px"}}>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries of COVID-19</Typography>
                        </div>

                        <div>
                        <Typography style={{color:"rgba(255, 99, 132, 1)", fontSize:"45px"}}>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths of COVID-19</Typography>

    
                        </div>
            </div>
    )
}

export default Cards;