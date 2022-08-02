import React from 'react'
import { Stack, Typography, List} from '@mui/material'

const Home = () => {
  return (
    <Stack direction='row' >
      <Stack direction='column' spacing={2} width='25%' height='100vh' sx={{ background: '#FAFAFA' }} >
        <Stack direction='column'>
          <Typography variant='h4' >SideBar</Typography>
          <List>Inbox</List>
        </Stack>
      </Stack>
      <Stack direction='column' width='75%' >
        <Stack direction='column' spacing={2} >
          <Typography>Dashboard</Typography>
          <Typography>Dashboard</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home