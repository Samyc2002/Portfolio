import React from 'react';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';

import { colors } from '../../styles/colors';
import Loading from '../Loading';
import ErrorSVG from '../ErrorSVG';

const ErrorComponent = () => {
  const [loading, setLoading] = React.useState(true);
  
  const router = useRouter();
  const [hover, setHover] = React.useState(false);
  const [state, setState] = React.useState<any>({});
  const [pages, setPages] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setState(JSON.parse(localStorage.getItem('state') as string));
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const keys = Object.keys(state) as string[];
      const values = Object.values(state) as number[];
      const min = Math.min(...values as number[]);
      const indices = values.map((value, index) => {
        if(value === min) {
          return index;
        }
      });
      indices.forEach(index => setPages(prevPages => [...prevPages, keys[index as number]]));
    }
    setLoading(false);
  }, [state]);

  const styles = hover ? { 
    color: colors.orange, 
    fontWeight: 600, 
    cursor: 'pointer',
    textDecoration: 'underline'
  } : {
    color: colors.orange, 
    fontWeight: 600,
    cursor: 'pointer'
  };

  return (
    <>
      {loading ? (
        <Loading/>
      ):(
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                pl: { xs: 0, sm: 10, md: 40 },
                pr: { xs: 0, sm: 10, md: 40 }
              }}
            >
              <ErrorSVG/>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              You seem... <span style={{ color: colors.red, fontWeight: 600 }}>lost</span>?
            </Typography>
            <Typography variant="h6" align="center">
              Is something broken? feel free to open up an issue at &nbsp;
              <span 
                style={styles} 
                onClick={() => router.push('https://github.com/Samyc2002/Portfolio')}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Samyc2002/Portfolio
              </span>
            </Typography>
            <Typography variant="h6" align="center">
              ...and while you&apos;re here, why don&apos;t you check out the following page(s)?
              <br/>
              {pages.map((page) => (
                <>
                  <span
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => {
                      if (page === 'Home') {
                        router.push('/');
                      } else {
                        router.push(`/${page}`);
                      }
                    }}
                  >
                    {page}
                  </span>
                  &nbsp;&nbsp;
                </>
              ))}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ErrorComponent;