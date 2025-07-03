import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import { ThemeProvider, createTheme } from '@mui/material/styles';
 import CssBaseline from '@mui/material/CssBaseline';
 import LandingPage from './components/LandingPage';
 import ErrorBoundary from './ErrorBoundary';

 const theme = createTheme({
   palette: {
     primary: {
       main: '#C19A6B', // Beige tone for primary
     },
     secondary: {
       main: '#6B8E23', // Khaki tone for secondary
     },
     background: {
       default: '#F5F5DC', // Light beige background
     },
     text: {
       primary: '#333333', // Dark text for contrast
     },
   },
   typography: {
     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
     h1: {
       fontSize: '3.5rem',
       fontWeight: 400,
       letterSpacing: '0.05em',
     },
     h2: {
       fontSize: '2.5rem',
       fontWeight: 400,
     },
     body1: {
       fontSize: '1.2rem',
     },
   },
   components: {
     MuiButton: {
       styleOverrides: {
         root: {
           textTransform: 'none',
           padding: '12px 24px',
           fontSize: '1rem',
           borderRadius: 0,
         },
       },
     },
   },
 });

 function App() {
   return (
     <ErrorBoundary>
       <ThemeProvider theme={theme}>
         <CssBaseline />
         <Router>
           <Routes>
             <Route path="/" element={<LandingPage />} />
           </Routes>
         </Router>
       </ThemeProvider>
     </ErrorBoundary>
   );
 }

 export default App;
