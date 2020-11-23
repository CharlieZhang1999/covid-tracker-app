import React, { useState, useEffect } from 'react';
import { fetchDailyDataAsc } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyDataAsc();
            setDailyData(initialDailyData);
        };
        fetchMyAPI();
    }, []);

    const lineChart = (
        dailyData[0] ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [{
                    data: dailyData.map((data) => data.confirmed),
                    label: 'Infected',
                    backgroundColor: 'rgba(54, 162, 235, 0.4)',// CHANGED
                    borderColor: 'rgba(54, 162, 235, 0.6)',// CHANGED
                    fill: true,
                    }, {
                    data: dailyData.map((data) => data.deaths),
                    label: 'Deaths',
                    borderColor: 'rgba(255, 99, 132, 0.6)',// CHANGED
                    backgroundColor: 'rgba(255, 99, 132, 1)',// CHANGED
                    fill: true,
                    },  {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'rgba(255, 206, 86, 0.6)',// CHANGED
                        backgroundColor: 'rgba(255, 206, 86, 0.8)',// CHANGED
                        fill: true,
                    },
                ],
            }}
            options={{
                legend: { display: true, position:"right" },// CHANGED
                title: { display: true, text:`Current state in United States`, fontSize:50},// CHANGED
            }}
        />
        ) : null
    );

    const barChart = (
        data.confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        labels: 'People',
                        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],       // CHANGED
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                        hoverBorderColor:'rgba(250, 89, 30, 1)',// CHANGED
                        hoverBorderWidth:5,// CHANGED
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text:`Current state in ${country}`, fontSize:50},// CHANGED
                }}
            />
        ) : null

    );
        
        return(
            <div className={styles.container}>
                {country? barChart: lineChart}
            </div>
        )

};
export default Chart;
