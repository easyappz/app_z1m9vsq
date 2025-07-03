import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#F5F5DC',
        backgroundImage: `url('https://via.placeholder.com/1200x600?text=LIANE+Hero+Image')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        padding: { xs: '60px 20px', md: '80px 40px' },
        marginTop: '64px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333333',
      }}
    >
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        style={{ backgroundColor: 'rgba(245, 245, 220, 0.7)', padding: '20px' }}
      >
        <motion.div variants={fadeInUp}>
          <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Elegance in Modesty
          </Typography>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Typography variant="body1" sx={{ maxWidth: '600px', margin: '20px auto', fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Discover LIANE, a premium collection designed for the modern, modest woman. Embrace sophistication and grace with every piece.
          </Typography>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: '30px', backgroundColor: '#C19A6B', color: '#333333', '&:hover': { backgroundColor: '#A77B50' } }}
          >
            Explore Collection
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
