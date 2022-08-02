import React from 'react'
import {FormControl, OutlinedInput, Stack, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {

  return (
    <Stack direction='row' sx={{ borderBottom: '1px solid #34b7a7', width: '100%', height: '70px', background: '#34b7a7' }}>
    <Stack direction='row' sx={{ color: '#fff' }} >
    <Stack direction='row' mt={3} >
        <Typography> <MenuIcon /> </Typography>
    </Stack>
    <Stack direction='row' mt={3}>
        <Typography > <HomeIcon /> </Typography>
    </Stack>
    <Stack sx={{ width:'220px',  height: '50ch' }} mt={1} >
    <FormControl >
      <OutlinedInput placeholder='Search....' />
    </FormControl>
    </Stack>
    </Stack>
    <Stack direction='row' >
      <Stack>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
      </Stack>
    </Stack>
    </Stack>
  )
}

export default NavBar;