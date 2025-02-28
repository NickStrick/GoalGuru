import React from 'react';
import { Box, Container, Typography, Button, Grid, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'; 
import './App.css'
import Logo from './Images/GoalGuruLogo.jpg';
import LogoCircle from './Images/GoalGuruLogoCircle.png';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faSignal, faTrophy, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
    <Box sx={{ 
  // Example: 50% opacity
background: 'linear-gradient(to right, #311518, #743d73, #dd5040)'}}>
      <Router>
      {/* <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}> */}
        <Box sx={{ 
  // Example: 50% opacity
background:'linear-gradient(to right,#d7eae5, #fffae8)', // Green to Gold, 50% opacity, // Green to Gold gradient
  minHeight: '100vh', // Ensure full viewport height
  display: 'flex',
  flexDirection: 'column',
  // background: 'linear-gradient(to right, #008000, #FFD700)', // You/r gradient
  backgroundClip: 'text',
  color: 'transparent', // Important: Make the text transparent so the gradient shows through
  fontWeight: 'bold', 
}} >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}> {/* Style the navigation */}
          <Typography variant="h5" component="h1" gutterBottom sx={{ 
            background: 'linear-gradient(to right, #c5948c, #fffae8))', // Your gradient
            backgroundClip: 'text',
            color: 'transparent', // Important: Make the text transparent so the gradient shows through
            fontWeight: 'bold',
            display:'flex',
            alignItems: 'center',
            gap: '10px'
              }}>
            <img style={{width:'80px', height:'80px'}} src={LogoCircle}/><span>TriumphTrainer</span>
          </Typography>
            <Box sx={{ display: 'flex', gap: 2 , color: 'white'}}>
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
      </Box>
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
      <img src={Logo} alt="Hero" style={{ boxShadow:'0px 0px 20px 20px rgba(49, 21, 24, 0.4)', maxWidth: '200px', height: 'auto', borderRadius: '100%', margin: '15px 0px 30px' }} />
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
const helpSectionImageSX = { color:'#311518', fontSize: '48px', margin: '10px auto', width: 80, height: 80, borderRadius: '50%', backgroundColor: '#b87dbb', mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }
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
            <Box component="div" sx={helpSectionImageSX}>
            <FontAwesomeIcon icon={faBullseye} />
            
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
             <Box component="div" sx={helpSectionImageSX}>
             <FontAwesomeIcon icon={faSignal} />
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
             <Box component="div" sx={helpSectionImageSX}>
             <FontAwesomeIcon icon={faTrophy} />
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

const textFieldSX =  {
  
  // Root class for the input field
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    // Class for the border around the input field
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      // borderWidth: "2px",
    },
    '&:hover .MuiOutlinedInput-notchedOutline, &:focus .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fc523f'
  },
  },
  // Class for the label of the input field
  "& .MuiInputLabel-outlined": {
    color: "#fff",
  },
}

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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 4, color:'#fff !important' }}> {/* Center the form */}
        <TextField sx={textFieldSX} label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField  sx={textFieldSX} label="Password" variant="outlined" fullWidth margin="normal" type="password" />
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