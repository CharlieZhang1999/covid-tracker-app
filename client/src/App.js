import React from 'react';
import { Cards, Chart,  CountryPicker, Medialoader, Reply } from './components';
import styles from './App.module.css'
import { fetchDailyData, fetchData, fetchPosts } from './api'
import coronaImage from './images/image.png'
class App extends React.Component{
    state = {
        data: {},
        country: '',
        posts: {},
    }

    /* fetch data (delegate using api and function in api/index.js) */
    async componentDidMount() {
        //fetch covid data from api
        const fetchedData = await fetchData();
        const fetechedPosts = await fetchPosts();
        this.setState({data: fetchedData, posts: fetechedPosts});
    }


    handlePostChange = async () => {
        const fetechedPosts = await fetchPosts();
        this.setState({ posts: fetechedPosts });
    }

    handleCountryChange = async (country) => {
        
        //fetch the data 
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({ data: fetchedData, country: country });
    }


    render(){
        const { data, country, posts } = this.state;//equivalent to const date = this.state.data
        return (
            
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" /> 
                <Cards data={data} />
                <br></br>
                <br></br>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
                <Reply handlePostChange={this.handlePostChange.bind(this)}/> 
                <Medialoader posts={this.state.posts}/>
            </div>
            
        )
    }
}

export default App;