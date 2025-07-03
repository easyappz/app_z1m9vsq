import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
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
        textAlign: 'center',
        padding: { xs: '60px 20px', md: '80px 40px' },
        minHeight: '100vh',
      }}
    >
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '30px' }}>
            Contact Us
          </Typography>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Have questions or inquiries? Reach out to us, and we'll get back to you as soon as possible.
          </Typography>
        </motion.div>
        <motion.div variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: '#EDE4D3', marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: '#EDE4D3', marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            sx={{ backgroundColor: '#EDE4D3', marginBottom: '20px' }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: '20px', backgroundColor: '#C19A6B', color: '#333333', '&:hover': { backgroundColor: '#A77B50' } }}
          >
            Send Message
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Contact;
