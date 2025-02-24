import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: '#333', // Darker background color for footer
      color: 'white',
      py: 4, // Padding top and bottom
      mt: 'auto' // Push footer to the bottom
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="white" gutterBottom>
            Company
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            About Us
          </Link><br />
          <Link href="#" color="inherit" underline="hover">
            Contact
          </Link><br />
          <Link href="#" color="inherit" underline="hover">
            Careers
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="white" gutterBottom>
            Features
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Personalized Goals
          </Link><br />
          <Link href="#" color="inherit" underline="hover">
            Practice Plans
          </Link><br />
          <Link href="#" color="inherit" underline="hover">
            Gamification
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="white" gutterBottom>
            Legal
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link><br />
          <Link href="#" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;