import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Research = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Research-Based Approach
      </Typography>
      {/* Add your research information here */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">
          We use scientific studies about motivation and statistics about successful people to make informed decisions on goal setting.
        </Typography>
         {/* ... more research details ... */}
      </Box>
    </Container>
  );
};

export default Research;