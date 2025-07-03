import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#F5F5DC',
        textAlign: 'center',
        padding: { xs: '60px 20px', md: '80px 40px' },
        marginTop: '64px', // Account for fixed header height
      }}
    >
      <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
        Elegance in Modesty
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '600px', margin: '20px auto', fontSize: { xs: '1rem', md: '1.2rem' } }}>
        Discover LIANE, a premium collection designed for the modern, modest woman. Embrace sophistication and grace with every piece.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: '30px', backgroundColor: '#C19A6B', color: '#333333', '&:hover': { backgroundColor: '#A77B50' } }}
      >
        Explore Collection
      </Button>
    </Box>
  );
};

export default Hero;
