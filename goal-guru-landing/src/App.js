import React from 'react';
import { Box, Container, Typography, Button, Grid, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'; 

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import necessary components

// import Footer from './Footer'; // Import your Footer component
import Testimonials from './components/Testimonials'; // Import the new Testimonials component (create this file)
import Research from './components/Research'; // Import the new Research component (create this file)
// import HeroSection from './components/HeroSection'
// import MissionSection from './components/MissionSection'
// import HelpSection from './components/HelpSection'
// import SignupSection from './components/SignupSection'


const App = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your app with ThemeProvider */}
      <Router>
      {/* <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}> */}
        <Box sx={{ 
  // Example: 50% opacity
background: 'linear-gradient(to right, rgba(0, 128, 0, 0.5), rgba(255, 215, 0, 0.5))', // Green to Gold, 50% opacity, // Green to Gold gradient
  minHeight: '100vh', // Ensure full viewport height
  display: 'flex',
  flexDirection: 'column',
}} >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}> {/* Style the navigation */}
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            GoalGuru
          </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button component={Link} to="/" color="inherit">Home</Button>
              <Button component={Link} to="/testimonials" color="inherit">Testimonials</Button>
              <Button component={Link} to="/research" color="inherit">Research</Button>
            </Box>
          </Box>

          <Routes> {/* Use Routes to define your routes */}
            <Route path="/" element={<><HeroSection /><MissionSection /><HelpSection /><SignupSection /></>} /> {/* Home route */}
            <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials route */}
            <Route path="/research" element={<Research />} /> {/* Research route */}
          </Routes>
        </Container>
        <Footer />
      </Box>
      </Router>
      </ThemeProvider>
  );
};


// ... (Component functions will go here)
const HeroSection = () => (
  <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Track, Visualize, and Take Action!
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Achieve your dreams and have success in every area of your life.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
    {/* Placeholder Image/Video */}
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <img src="placeholder-hero.jpg" alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
    </Box>
  </motion.section>
);


const MissionSection = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1">
        We're dedicated to helping you achieve your goals through personalized AI-powered guidance and a supportive community.
      </Typography>
    </Box>
  </motion.section>
);

// import { Box, Container, Typography, Button, Grid, TextField } from '@mui/material';
// import { motion } from 'framer-motion';

const HelpSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }} // Added delay for staggered animation
    sx={{ py: 8 }} // Added padding for spacing
  >
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        How We Can Help
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            {/* Placeholder Icon/Image */}
            <Box component="div" sx={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'lightgray', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Add your icon/image here */}
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Personalized Goal Setting
            </Typography>
            <Typography variant="body2">
              Our AI analyzes your aspirations and sets achievable, tailored goals.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            {/* Placeholder Icon/Image */}
             <Box component="div" sx={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'lightgray', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Add your icon/image here */}
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Custom Practice Plans
            </Typography>
            <Typography variant="body2">
              We create dynamic practice plans that adapt to your progress.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            {/* Placeholder Icon/Image */}
             <Box component="div" sx={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'lightgray', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Add your icon/image here */}
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Motivation & Gamification
            </Typography>
            <Typography variant="body2">
              Stay motivated with our gamified approach and personalized encouragement.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </motion.section>
);


const SignupSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }} // Added delay for staggered animation
    sx={{ py: 8, backgroundColor: '#f5f5f5' }} // Added background color and padding
  >
    <Container maxWidth="md" variant="contained" color="info">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Sign Up & Start Your Journey
      </Typography>
      <Button variant="contained" color="info">Accent Button</Button>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 4 }}> {/* Center the form */}
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
          Sign Up
        </Button>
      </Box>

      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Or download our mobile app:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {/* Placeholder App Store/Google Play Buttons */}
        <Button variant="contained" sx={{ mr: 2 }}>App Store</Button>
        <Button variant="contained" color="info">Google Play</Button>
      </Box>
    </Container>
  </motion.section>
);

// ... (Other sections - HelpSection, SignupSection, Footer - follow a similar structure)

export default App;