import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
export default function SpFooter() {
  return (
    <div className="conatiner mt-5">
      <Box>
        <Grid templateColumns={"1fr 1fr 1fr 1fr"} height="fit-content" gap="4">
          <GridItem colSpan="1">
            <Box>
              <h5 className="mb-4">Support</h5>
              <ul>
                <li>
                  <h6>Help Center</h6>
                </li>
                <li>
                  <h6>AirCover</h6>
                </li>
                <li>
                  <h6>Supporting people with diabilities</h6>
                </li>
                <li>
                  <h6>Cancellation options</h6>
                </li>
                <li>
                  <h6>Out COVID-19 Response</h6>
                </li>
                <li>
                  <h6>Report a neighbourhoob problem</h6>
                </li>
              </ul>
            </Box>
          </GridItem>
          <GridItem colSpan="1">
            <Box>
              <h5 className="mb-4">Support</h5>
              <ul>
                <li>
                  <h6>Help Center</h6>
                </li>
                <li>
                  <h6>AirCover</h6>
                </li>
                <li>
                  <h6>Supporting people with diabilities</h6>
                </li>
                <li>
                  <h6>Cancellation options</h6>
                </li>
                <li>
                  <h6>Out COVID-19 Response</h6>
                </li>
                <li>
                  <h6>Report a neighbourhoob problem</h6>
                </li>
              </ul>
            </Box>
          </GridItem>
          <GridItem colSpan="1">
            <Box>
              <h5 className="mb-4">Support</h5>
              <ul>
                <li>
                  <h6>Help Center</h6>
                </li>
                <li>
                  <h6>AirCover</h6>
                </li>
                <li>
                  <h6>Supporting people with diabilities</h6>
                </li>
                <li>
                  <h6>Cancellation options</h6>
                </li>
                <li>
                  <h6>Out COVID-19 Response</h6>
                </li>
                <li>
                  <h6>Report a neighbourhoob problem</h6>
                </li>
              </ul>
            </Box>
          </GridItem>
          <GridItem colSpan="1">
            <Box>
              <h5 className="mb-4">Support</h5>
              <ul>
                <li>
                  <h6>Help Center</h6>
                </li>
                <li>
                  <h6>AirCover</h6>
                </li>
                <li>
                  <h6>Supporting people with diabilities</h6>
                </li>
                <li>
                  <h6>Cancellation options</h6>
                </li>
                <li>
                  <h6>Out COVID-19 Response</h6>
                </li>
                <li>
                  <h6>Report a neighbourhoob problem</h6>
                </li>
              </ul>
            </Box>
          </GridItem>
        </Grid>
        <hr />
        <Box display="flex" justifyContent="space-between" className="pb-2">
          <Box display="flex" className="p-2">
            <a href="/">
              <h6 className="px-2">&#169; 2023 Airbnb, Inc</h6>
            </a>
            <a href="/">
              <h6 className="px-2">Privacy</h6>
            </a>
            <a href="/">
              <h6 className="px-2">Terms</h6>
            </a>
            <a href="/">
              <h6 className="px-2">Company details</h6>
            </a>
          </Box>
          <Box display="flex" alignItems="center">
            <BsGlobe className=" mb-2"></BsGlobe>
            <h5 className="px-2">English (IN)</h5>
            <h5 className="px-2">$ USD</h5>
            <AiFillInstagram className="mx-1 mb-2"></AiFillInstagram>
            <AiFillFacebook className="mx-1 mb-2"></AiFillFacebook>
            <AiFillTwitterSquare className="mx-1 mb-2"></AiFillTwitterSquare>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
