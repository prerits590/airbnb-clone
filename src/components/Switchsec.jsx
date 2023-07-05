import React from "react";
import { Box, SimpleGrid, Switch } from "@chakra-ui/react";

export default function Switchsec() {
  return (
    <div className="switch-div2 py-3 mt-3">
      {/* <SimpleGrid minChildWidth='120px' spacing='1rem'>
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

</SimpleGrid> */}
      <Box className="d-flex justify-content-between py-1">
        <Box className="d-flex align-items-center">
          <Box className=" px-3" style={{borderRight:"1px solid lightGray"}}>
            <h6>Display total price</h6>
          </Box>
          <Box className=" px-3">
            <p>Includes all fees, before taxes</p>
          </Box>
        </Box>
        {/* <Box className="d-flex align-items-center"></Box> */}
        <Box className="px-3">
          <Switch size="lg" />
        </Box>
      </Box>
    </div>
  );
}
