import { Box, Grid } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Section from './components/Section'

function App() {
 

  return (
    <>
      <Header />
      <Box sx={{ minHeight:'450px',marginBottom:'10px' }} className="a_tbdr a_common" component="main">
        <Grid container spacing={2}  >
          <Aside />
          <Section />
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default App
