import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import { Info as InfoIcon } from '@material-ui/icons'
import { isEmpty } from 'lodash'
import LazyLoad from 'react-lazyload'

import useStyles from './styles'

const App = () => {
  const classes = useStyles()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get('https://aia-test-be.herokuapp.com/feed')
        setPosts(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [])

  const goToSource = (post) => {
    window.open(post.content.source, '_blank')
  }

  return (
    <div className={classes.root}>
      {isEmpty(posts) ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant='h4' component='h4' className={classes.pageTitle}>
            Flickr Public Feed
          </Typography>
          <GridList cellHeight={750} className={classes.gridList} cols={2}>
            {posts.map((post, index) => (
              <GridListTile key={index} style={{ height: 750 }}>
                <LazyLoad height={300} once placeholder={<CircularProgress />} overflow>
                  <img src={post.content.image} alt={post.title} />
                </LazyLoad>
                <GridListTileBar
                  title={post.title}
                  subtitle={<span>by: {post.author.name}</span>}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => goToSource(post)}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </>
      )}
    </div>
  )
}

export default App
