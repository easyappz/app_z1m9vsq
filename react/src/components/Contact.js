import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { submitContactForm } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: value.trim() === '' }));
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };
    setFormErrors(errors);
    return !errors.name && !errors.email && !errors.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setSuccessMessage('Your message has been sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setErrorMessage('There was an error sending your message. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
          {successMessage && (
            <Alert severity="success" sx={{ marginBottom: '20px' }}>
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error" sx={{ marginBottom: '20px' }}>
              {errorMessage}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              error={formErrors.name}
              helperText={formErrors.name ? 'Name is required' : ''}
              sx={{ backgroundColor: '#EDE4D3', marginBottom: '20px' }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              error={formErrors.email}
              helperText={formErrors.email ? 'Email is required' : ''}
              sx={{ backgroundColor: '#EDE4D3', marginBottom: '20px' }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              error={formErrors.message}
              helperText={formErrors.message ? 'Message is required' : ''}
              sx={{ backgroundColor: '#EDE4D3', marginBottom: '20px' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{ marginTop: '20px', backgroundColor: '#C19A6B', color: '#333333', '&:hover': { backgroundColor: '#A77B50' } }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Contact;
