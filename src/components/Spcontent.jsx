import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { FaAccessibleIcon, FaUserLarge } from "react-icons/fa6";
import { BiBed } from "react-icons/bi";

export default function Spcontent() {
  return (
    <div className="sp-content container mt-5 border">
      <Box className="sp-content p-4" border="solid black" bg="yellow">
        <Grid
          templateColumns={["repeat(3, 1fr)"]}
          height="200px"
          gap="6"
          className="grid1"
        >
          <GridItem colSpan="2" bg="green">
            <Box className="sp-sidebar1">
              <Box
                className="sp-heading1 "
                display="flex"
                justifyContent="space-between"
                p="10px"
              >
                <Box className="sp-text1 " width="100%">
                  <Text>Place to stay in a farm stay hosted by Madhumita</Text>
                  <Text>3 guests 1 bedroom 2 beds 1 private bathroom</Text>
                </Box>
                <Box
                  className="sp-profile p-4"
                  border="solid white"
                  height="fit-content"
                  borderRadius="50%"
                >
                  <FaUserLarge></FaUserLarge>
                </Box>
              </Box>
              <hr />
              <Box className="sp-content-amenities " p="10px">
                <Box className="amenities1">
                  <Box className="sp-content-icon">
                    <FaAccessibleIcon></FaAccessibleIcon>
                  </Box>

                  <Box className="sp-content-icon-text">
                    <Text>Self check-in</Text>
                    <Text>You can check in with the doorperson</Text>
                  </Box>
                </Box>
                <Box className="amenities1">
                  <Box className="sp-content-icon">
                    <FaAccessibleIcon></FaAccessibleIcon>
                  </Box>

                  <Box className="sp-content-icon-text">
                    <Text>Self check-in</Text>
                    <Text>You can check in with the doorperson</Text>
                  </Box>
                </Box>
                <Box className="amenities1">
                  <Box className="sp-content-icon">
                    <FaAccessibleIcon></FaAccessibleIcon>
                  </Box>

                  <Box className="sp-content-icon-text">
                    <Text>Self check-in</Text>
                    <Text>You can check in with the doorperson</Text>
                  </Box>
                </Box>
              </Box>
              <hr />

              <Box className="sp-content-description" p="10px">
                <Text>
                  We don’t offer any discounts for bookings below 7 days nor
                  take bookings outside of Airbnb.
                </Text>
                <Text>
                  Vihang Farmhouse is airy, bright, and simplistic with a
                  wonderful view of the backwaters and grasslands of Gangapur
                  Dam, an Important Bird Area! We are located a 20 minute drive
                  away from Sula, York, and Soma vineyards and wineries which
                  are on the opposite
                </Text>
              </Box>
              <hr />
              <Box className="where-you-will-sleep" p="10px">
                <Box className="sleep-content">
                  <Box className="sleep-icons d-flex ">
                    <BiBed className="mx-2"></BiBed>
                    <BiBed></BiBed>
                  </Box>
                  <Box className="sleep-box">
                    <Box border="solid red" w="fit-content">
                      <Text fontSize="m">Bedroom</Text>
                    </Box>
                    <Box border="solid red" w="80%">
                      <Text fontSize="sm">1 queen bed ,1 single bed</Text>
                    </Box>
                  </Box>
                </Box>
                <hr />

                <Box className="what-this-offers" p="10px">
                  <Box className="offerings-list">
                    <Text>What this place offers</Text>
                    <Box className="offering-box">
                      <Grid templateColumns="1fr 1fr" gap={2}>
                        <GridItem w="100% " h="fit-content">
                          <ul>
                            <li>Lake access</li>
                            <li>Lake access</li>
                            <li>Lake access</li>
                            <li>Lake access</li>
                            <li>Lake access</li>
                          </ul>
                        </GridItem>
                        <GridItem w="100% " h="fit-content">
                          <ul>
                            <li>Lake access</li>
                            <li>Lake access</li>
                            <li>Lake access</li>
                            <li>Lake access</li>
                            <li>Lake access</li>
                          </ul>
                        </GridItem>
                      </Grid>
                    </Box>
                    <button>Show all amenities</button>
                  </Box>
                  <hr />
                  <Box className="sp-reviews">
                    <Box className="review">
                      <Text>4.86 99 reviews</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan="1" bg="red" >
            <Box className="sp-sidebar2 " position='sticky' overflowY='auto'>
              <Box>
                <Text>$500 night</Text>
                <Text>$.86 99 reviews</Text>
              </Box>
              <Box>
                <input type="number" placeholder="Check-in Date" />
                <input type="number" placeholder="Check-out Date" />
                <input type="number" placeholder="Guests" />
                <button type="submit">Reserve</button>
                <Text>You won't be charged yet.</Text>
              </Box>
              <Box>
                <Text>$500 x 5 nights</Text>
                <Text>$2500</Text>
                <Text>Airbnb sservice fee</Text>
                <Text>352</Text>

                <hr />
                <Text>Total before taxes</Text>
                <Text>$2852</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Box className="owner-info"></Box>
      </Box>
    </div>
  );
}
