import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Paper, Avatar } from '@material-ui/core';
import styles from './Medialoader.module.css';
import  { fetchPosts } from '../../api';

const Medialoader = (props) => {
    const [fetchedPosts, setFetchedPosts] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedPosts(await fetchPosts());
        }
        fetchAPI();
    }, []);

    const fetchedposts = props.posts;

    const res = (
        fetchedposts.length? (
            // select the last 5 comments
            fetchedposts
                .slice(-5)
                .map((post, index) => (
                <div className={styles.postList}>
                    <Paper className={styles.paper} key={index}>
                        <Grid container wrap="nowrap" spacing={3}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">{post.description} </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            ))
        ) : null
    );
    return res;
}
export default Medialoader;