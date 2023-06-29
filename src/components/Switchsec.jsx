import React from 'react';
import { Box, SimpleGrid, Switch } from '@chakra-ui/react';

export default function Switchsec() {
  return (
    <div className="switch-div2 py-3">
<SimpleGrid minChildWidth='120px' spacing='1rem'>
  <Box bg='tomato' height='auto' p='1rem' className='heading-box'>
<Box className="heading1">
  <p>Display total price</p>
</Box>
<Box className="heading2">
  <p>Includes all dees, before taxes</p>
</Box>


  </Box>
  <Box bg='tomato' height='auto' alignItems='center' justifyContent='start' className='switch-box' p='5'> 
  <Box className="switch1">
  <Switch size='md'/>
</Box>
  </Box>

</SimpleGrid>



    </div>
  );
}
