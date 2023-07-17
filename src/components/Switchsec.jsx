import React from "react";
import { Box, SimpleGrid, Switch } from "@chakra-ui/react";

export default function Switchsec() {
  return (
    <div className="switch-div2 py-3 mt-3">
      <Box className="d-flex justify-content-between py-1">
        <Box className="d-flex align-items-center">
          <Box className=" px-3" style={{ borderRight: "1px solid lightGray" }}>
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
