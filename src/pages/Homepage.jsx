import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Switchsec from "../components/Switchsec";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBnbs } from "../redux/fetchBnbs/bnbsAction";

export default function Homepage() {
  const dispatch = useDispatch();

  const bnbs = useSelector((state) => state.bnbs.bnbs);

  useEffect(() => {
    dispatch(fetchBnbs());
  }, [dispatch]);
  console.log(bnbs);

  return (
    <div>
      <Navbar />
      <Switchsec />
      <div className="product-grid ">
        <Box width="100%" p="0.5rem">
          <SimpleGrid
            className=" d-flex justify-content-evenly"
            minChildWidth="290px"
            spacing="0.1rem"
          >
            {bnbs?.map((item, index) => {
              return (
                <Box className="" w={"fit-content"}>
                  <Box height="auto" p="1rem" width="100%" key={index}>
                    <Card {...item} />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </div>
    </div>
  );
}
