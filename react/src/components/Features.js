import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const featureData = [
  {
    title: 'Timeless Design',
    description: 'Our pieces are crafted to remain elegant and relevant through changing trends, embodying a timeless aesthetic.'
  },
  {
    title: 'Premium Fabrics',
    description: 'We use only the finest materials, ensuring comfort and durability while maintaining a luxurious feel.'
  },
  {
    title: 'Modest Elegance',
    description: 'LIANE celebrates modesty without compromising on style, offering sophisticated looks for every occasion.'
  },
];

const Features = () => {
  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#EDE4D3',
        padding: { xs: '60px 20px', md: '80px 40px' },
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '50px' }}>
        Why Choose LIANE?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {featureData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
