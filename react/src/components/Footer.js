import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#C19A6B',
        color: '#333333',
        padding: { xs: '40px 20px', md: '60px 40px' },
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '20px' }}>
            LIANE
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            Premium fashion for the modern, modest woman.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '20px' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>Home</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>Collection</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>About</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>Contact</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '20px' }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.9rem', marginBottom: '10px' }}>
            Email: contact@liane.com
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            Phone: +1 (555) 123-4567
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.8 }}>
        © {new Date().getFullYear()} LIANE. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
