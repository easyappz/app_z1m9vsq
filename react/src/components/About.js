import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#EDE4D3',
        textAlign: 'center',
        padding: { xs: '60px 20px', md: '80px 40px' },
        minHeight: '100vh',
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '30px' }}>
          About LIANE
        </Typography>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="body1" sx={{ maxWidth: '700px', margin: '0 auto', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6 }}>
          LIANE was born from a vision to redefine modesty in fashion. We believe that elegance and grace are timeless, 
          and our designs reflect this philosophy. Each piece is thoughtfully crafted to empower women to express their individuality 
          while embracing modesty. Our commitment to quality and sophistication sets us apart as a premium brand for the modern woman.
        </Typography>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginTop: '40px' }}
      >
        <Box
          component="img"
          src="https://via.placeholder.com/600x400?text=LIANE+Story"
          alt="LIANE Story"
          sx={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            margin: '0 auto',
            display: 'block',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default About;
