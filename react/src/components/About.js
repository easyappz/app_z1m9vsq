import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#EDE4D3',
        textAlign: 'center',
        padding: { xs: '60px 20px', md: '80px 40px' },
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '30px' }}>
        About LIANE
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '700px', margin: '0 auto', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
        LIANE was born from a vision to redefine modesty in fashion. We believe that elegance and grace are timeless, 
        and our designs reflect this philosophy. Each piece is thoughtfully crafted to empower women to express their individuality 
        while embracing modesty. Our commitment to quality and sophistication sets us apart as a premium brand for the modern woman.
      </Typography>
    </Box>
  );
};

export default About;
