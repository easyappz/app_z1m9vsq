import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const collectionItems = [
  {
    title: 'Autumn Grace',
    description: 'A collection inspired by the warmth of autumn, featuring earthy tones and elegant silhouettes.'
  },
  {
    title: 'Winter Serenity',
    description: 'Embrace the calm of winter with soft fabrics and layered designs for a cozy yet refined look.'
  },
  {
    title: 'Spring Bloom',
    description: 'Celebrate renewal with delicate patterns and light fabrics that reflect the beauty of spring.'
  },
];

const Collection = () => {
  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#F5F5DC',
        padding: { xs: '60px 20px', md: '80px 40px' },
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '50px' }}>
        Our Collections
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {collectionItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '30px',
                backgroundColor: '#EDE4D3',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: '20px' }}>
                {item.description}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderColor: '#C19A6B', color: '#C19A6B', '&:hover': { backgroundColor: '#C19A6B', color: '#333333' } }}
              >
                View Collection
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Collection;
