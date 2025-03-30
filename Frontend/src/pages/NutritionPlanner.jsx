import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../Counsilor.css' 

const NutritionPlanner = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box className='history'>
            <button className="new-chat-button">+ New Chat</button>
            <button className="chats">What is API?</button>
            <button className="chats">What is Java?</button>
            <button className="chats">C++ basic features</button>
          </Box>
        </Container>
      </React.Fragment>
      <Box component="section" className='queries' sx={{ p: 2 }}>
        What is API?
      </Box>
      <Box sx={{display:'flex', justifyContent: 'end', alignItems: 'center', position: 'relative', height: '100%'}}>
        <input type="text" placeholder='Ask your query'className='textarea'/>
        <button type="button">Send</button>
      </Box>
    </>
  )
}

export default NutritionPlanner
