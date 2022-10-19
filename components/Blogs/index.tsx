import React from 'react';
import { Box } from '@mui/system';
import { Masonry } from '@mui/lab';
import { Grid, Typography } from '@mui/material';

import { colors } from '../../styles/colors';
import BlogCard from '../ProjectCards/BlogCards';

interface Iprops {
  blogs: any[];
}

const BlogsComponent = (props: Iprops) => {
  const { blogs } = props;
  return (
    <>
      <Typography gutterBottom variant="h4" align="center">
        My Recent{' '}
        <span style={{ color: colors.red, fontWeight: 600 }}>Blogs</span>
      </Typography>
      <Typography align="center">
        Some of the recent blogs I&apos;ve written on dev.to
      </Typography>
      <br />
      <br />
      <br />
      <Masonry
        columns={2}
        spacing={4}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'transparent'
          }}
        />
        {blogs.map((blog) => (<BlogCard key={blog.id} blog={blog} />))}
      </Masonry>
      <Grid container spacing={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default BlogsComponent;
