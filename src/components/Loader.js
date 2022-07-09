import { Stack } from '@mui/material';
import React from 'react';
import { InfintySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' width='100%'>
      <InfintySpin color='gray' />
    </Stack>
  )
}

export default Loader;