import React from 'react';
import { Cards, Chart,  CountryPicker, SIRchart, Medialoader, Reply,Login } from './components';
import styles from './App.module.css'
import { fetchData, fetchPosts } from './api'
import coronaImage from './images/image1.png'
class App extends React.Component{
    state = {
        data: {},
        country: '',
        posts: {},
        loggedin: false
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

    handleLoggedIn = async () => {
        this.setState({ loggedin: true });
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
                <div className={styles.textContainer}> 
                <h2>SIR model Introduction</h2>
                <p>SIR model is an epidemiological model that computes the theoretical number of people infected with a contagious 
                    illness in a closed population over time. The name “SIR” derives from the fact that they involve coupled equations 
                    relating the number of susceptible people St, number of people infected It, and number of people who have been 
                    removed (recovered or death) Rt. Here we apply the discrete SIR model on the recent covid-19 data of United States 
                    to provide a rough prediction of the total confirmed, recovered, and death counts in the next 30 days.</p>
                </div>
                
                <SIRchart />
                
                {this.state.loggedin? null : <Login handleLoggedIn={this.handleLoggedIn.bind(this)}/> }
                <Reply handlePostChange={this.handlePostChange.bind(this)}/> 
                
                <Medialoader posts={this.state.posts}/>
                
            </div>
            
        )
    }
}

export default App;