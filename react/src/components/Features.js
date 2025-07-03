import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { fetchProducts } from '../services/api';

const staticFeatureData = [
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (data.success) {
          setProducts(data.data.slice(0, 3)); // Limit to 3 products for display
        } else {
          throw new Error('Failed to load products');
        }
      } catch (err) {
        setError('Unable to load featured products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Box
      className="section"
      sx={{
        backgroundColor: '#EDE4D3',
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
          Why Choose LIANE?
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {staticFeatureData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUp}
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  backgroundColor: index % 2 === 0 ? '#F5F5DC' : '#E0D9C8',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  {feature.description}
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginTop: '60px' }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, marginBottom: '30px', textAlign: 'center' }}>
          Featured Products
        </Typography>
      </motion.div>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <CircularProgress color="primary" />
        </Box>
      )}

      {error && !loading && (
        <Typography variant="body1" color="error" sx={{ textAlign: 'center', marginTop: '40px' }}>
          {error}
        </Typography>
      )}

      {!loading && !error && products.length > 0 && (
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '20px' }}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={fadeInUp}
                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: index % 2 === 0 ? '#F5F5DC' : '#E0D9C8',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: '100%',
                        maxWidth: '200px',
                        height: 'auto',
                        marginBottom: '15px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '10px' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: '10px' }}>
                    {product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}

      {!loading && !error && products.length === 0 && (
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '40px' }}>
          No products available at the moment.
        </Typography>
      )}
    </Box>
  );
};

export default Features;
