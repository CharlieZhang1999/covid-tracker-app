import React from 'react';
import axios from 'axios';
import styles from './Reply.module.css';
export default class Reply extends React.Component{

    constructor(props){
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            description: ""
        };
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    async onSubmit(e){
        alert('here');
        e.preventDefault();
        const reply = {
            description: this.state.description
        }
        console.log(this.state.description);
        try{
            const response = await axios({
                url: '/posts',
                method: 'POST',
                data: reply
            });
            console.log("Data has been sent to the server");
            this.resetInput();
            //this.props.handlePostChange();
        }catch(err){
            console.log("Error sending to the server");
        }
    }
    resetInput(){
        this.setState({
            description: ""
        })
    }

    render(){
        return(
            <>
                <div className={styles.form}>
                    <textarea className={styles.textarea} placeholder="Comments" name="body" cols="30" rows="5" value={this.state.description} onChange={this.onChangeDescription}></textarea>
                </div>
                <div className={styles.form}>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
                
            </>
        )
    }
}