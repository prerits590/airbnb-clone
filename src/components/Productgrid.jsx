import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      <Box width="100%" p="0.5rem">
        <SimpleGrid minChildWidth="250px" spacing="0.1rem">
          <Box height="auto" p="1rem">
            <Card />
          </Box>
          <Box height="auto" p="1rem">
            <Card />
          </Box>
          <Box height="auto" p="1rem">
            <Card />
          </Box>
          <Box height="auto" p="1rem">
            <Card />
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}
