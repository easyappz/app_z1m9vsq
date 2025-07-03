import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

const collectionItems = [
  {
    title: 'Autumn Grace',
    description: 'A collection inspired by the warmth of autumn, featuring earthy tones and elegant silhouettes.',
    image: 'https://via.placeholder.com/300x400?text=Autumn+Grace'
  },
  {
    title: 'Winter Serenity',
    description: 'Embrace the calm of winter with soft fabrics and layered designs for a cozy yet refined look.',
    image: 'https://via.placeholder.com/300x400?text=Winter+Serenity'
  },
  {
    title: 'Spring Bloom',
    description: 'Celebrate renewal with delicate patterns and light fabrics that reflect the beauty of spring.',
    image: 'https://via.placeholder.com/300x400?text=Spring+Bloom'
  },
];

const Collection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#F5F5DC',
        padding: { xs: '60px 20px', md: '80px 40px' },
        minHeight: '100vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '50px', textAlign: 'center' }}>
          Our Collections
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {collectionItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    marginBottom: '20px',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                  }}
                />
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Collection;
