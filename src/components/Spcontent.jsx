import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaAccessibleIcon,
  FaMedal,
  FaMountain,
  FaSnowflake,
  FaUserLarge,
} from "react-icons/fa6";
import { BiBed } from "react-icons/bi";
import SpFooter from "./SpFooter";
import { FaLuggageCart, FaSwimmingPool } from "react-icons/fa";
import { TbParking, TbToolsKitchen2 } from "react-icons/tb";
import { PiFlowerTulipFill, PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineBalcony, MdVerified } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { StarIcon } from "@chakra-ui/icons";
import { GoVerified, IconName } from "react-icons/go";

export default function Spcontent() {
  return (
    <div className="sp-content container mt-5 ">
      <Box className="sp-content pt-4 px-4">
        <Grid
          templateColumns={["repeat(3, 1fr)"]}
          height="fit-content"
          gap="6"
          className="grid1"
        >
          <GridItem colSpan="2">
            <Box className="sp-sidebar1">
              <Box
                className="sp-heading1 "
                display="flex"
                justifyContent="space-between"
                p="10px"
              >
                <Box className="sp-text1 " width="100%">
                  <h4>Place to stay in a farm stay hosted by Madhumita</h4>
                  <h6> 3 guests 1 bedroom 2 beds 1 private bathroom</h6>
                </Box>
                <Box
                  className="sp-profile p-3"
                  // border="solid white"
                  height="fit-content"
                  borderRadius="50%"
                  bg={"#232323"}
                  color={"white"}
                >
                  <FaUserLarge></FaUserLarge>
                </Box>
              </Box>
              <hr />
              <Box className="sp-content-amenities " p="10px">
                <Box className="amenities1 py-3">
                  <Box className="sp-content-icon">
                    <FaAccessibleIcon></FaAccessibleIcon>
                  </Box>

                  <Box className="sp-content-icon-text">
                    <h5>Self check-in</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                  </Box>
                </Box>
                <Box className="amenities1 py-3">
                  <Box className="sp-content-icon">
                    <FaSwimmingPool></FaSwimmingPool>
                  </Box>

                  <Box className="sp-content-icon-text">
                    <h5>Dive right in</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                  </Box>
                </Box>
                <Box className="amenities1 py-3">
                  <Box className="sp-content-icon">
                    <FaMedal></FaMedal>
                  </Box>

                  <Box className="sp-content-icon-text">
                    <h5>Experianced host</h5>
                    <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                  </Box>
                </Box>
              </Box>
              <hr />

              <Box className="sp-content-description" p="10px">
                <h6>
                  We don’t offer any discounts for bookings below 7 days nor
                  take bookings outside of Airbnb.
                </h6>
                <h6>
                  Vihang Farmhouse is airy, bright, and simplistic with a
                  wonderful view of the backwaters and grasslands of Gangapur
                  Dam, an Important Bird Area! We are located a 20 minute drive
                  away from Sula, York, and Soma vineyards and wineries which
                  are on the opposite
                </h6>
              </Box>
              <hr />
              <Box className="where-you-will-sleep pt-4" p="10px">
                <h4>Where you will sleep</h4>
                <Box className="sleep-content border py-3">
                  <Box className="sleep-icons d-flex p-1">
                    <BiBed className="mx-2"></BiBed>
                    <BiBed></BiBed>
                  </Box>
                  <Box className="sleep-box ">
                    <Box w="fit-content">
                      <h5>Bedroom</h5>
                    </Box>
                    <Box w="60%">
                      <h6>1 queen bed ,1 single bed</h6>
                    </Box>
                  </Box>
                </Box>
                <hr />

                <Box className="what-this-offers">
                  <Box className="offerings-list">
                    <h4 className="py-2 px-0">What this place offers</h4>
                    <Box className="offering-box">
                      <Grid templateColumns="1fr 1fr" gap={2}>
                        <GridItem w="100% " h="fit-content">
                          <ul>
                            <li>
                              {" "}
                              <TbToolsKitchen2></TbToolsKitchen2>
                              <h6>Kitchen</h6>
                            </li>
                            <li>
                              <TbParking></TbParking>
                              <h6>Parking access</h6>
                            </li>
                            <li>
                              <PiTelevisionSimpleBold></PiTelevisionSimpleBold>
                              <h6>Television</h6>
                            </li>
                            <li>
                              <MdOutlineBalcony></MdOutlineBalcony>
                              <h6>Balcony</h6>
                            </li>
                            <li>
                              <BsPersonWorkspace></BsPersonWorkspace>
                              <h6>Personal workplace</h6>
                            </li>
                          </ul>
                        </GridItem>
                        <GridItem w="100% " h="fit-content">
                          <ul>
                            <li>
                              <FaSnowflake></FaSnowflake>
                              <h6>Air conditioning</h6>
                            </li>
                            <li>
                              <FaSwimmingPool></FaSwimmingPool>

                              <h6>Private pool</h6>
                            </li>
                            <li>
                              <FaLuggageCart></FaLuggageCart>
                              <h6>Luggage cart available</h6>
                            </li>
                            <li>
                              <FaMountain></FaMountain>
                              <h6>Mountain view</h6>
                            </li>
                            <li>
                              <PiFlowerTulipFill></PiFlowerTulipFill>
                              <h6>Private garden</h6>
                            </li>
                          </ul>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box
                      className="mx-2 my-4 p-1"
                      border="1px solid gray"
                      borderRadius="5px"
                      w="fit-content"
                    >
                      <button className="px-4 py-2">
                        <h5>Show all amenities</h5>
                      </button>
                    </Box>
                  </Box>
                  <hr />
                  <Box className="sp-reviews">
                    <Box className="review" display="flex">
                      <StarIcon className="mx-1 mt-1"> </StarIcon>
                      <h4>
                        4.86{" "}
                        <span style={{ fontWeight: "400", fontSize: "16px" }}>
                          99 reviews
                        </span>
                      </h4>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            colSpan="1"
            height="fit-content"
            className="sp-sidebar2 p-3"
            position="sticky"
            top="0"
            overflowY="auto"
            border="solid 1px gray"
            borderRadius="10px"
          >
            {/* <Box className="sp-sidebar2 " position="sticky" overflowY="auto"> */}
            <Box display="flex" justifyContent="space-between" className="pt-1">
              <h4>
                $500{" "}
                <span style={{ fontWeight: "400", fontSize: "16px" }}>
                  night
                </span>
              </h4>
              <Box display="flex">
                <StarIcon className="mx-1 mt-1"> </StarIcon>

                <h4>
                  4.86{" "}
                  <span style={{ fontWeight: "400", fontSize: "16px" }}>
                    99 reviews
                  </span>
                </h4>
                {/* <h6 className="mx-1 align-items-center d-flex " color="#717171">
                  99 reviews
                </h6> */}
              </Box>
            </Box>
            <Box className="sp-input pt-3" display="flex">
              <Box maxWidth="50%">
                <input
                  type="number"
                  placeholder="Check-in Date"
                  width="100%"
                  className="input-areaa"
                />
              </Box>
              <Box maxWidth="50%">
                <input
                  type="number"
                  placeholder="Check-out Date"
                  width="100% "
                  className="input-areaa"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p="1px"
              className="sp-btn-box mt-1"
            >
              <Box>
                <input
                  width="100%"
                  type="number"
                  placeholder="Guests"
                  className="input-areaa"
                />
              </Box>
              <button className="mt-2 main-btn" type="submit">
                Reserve
              </button>
            </Box>
            <Box
              m={3}
              display={"flex"}
              justifyContent={"center"}
              className="py-2"
            >
              <h6>You won't be charged yet.</h6>
            </Box>
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className="pb-3"
              >
                <h6>$500 x 5 nights</h6>
                <h6>$2500</h6>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <h6>Airbnb sservice fee</h6>
                <h6>352</h6>
              </Box>

              <hr />
              <Box
                display="flex"
                justifyContent="space-between"
                className="p-2"
              >
                <h5>Total before taxes</h5>

                <h5>$2852</h5>
              </Box>
            </Box>
            {/* </Box> */}
          </GridItem>
        </Grid>

        <Box className="owner-info">
          <Box display="flex">
            <Box
              // border="solid white"
              bg="gray.700"
              height="fit-content"
              borderRadius="50%"
              p="5"
              color="white"
            >
              <Box>
                <FaUserLarge></FaUserLarge>
              </Box>
            </Box>
            <Box px="4">
              <h4>Hosted by Madhimita</h4>
              <h6>Joined in April 2022</h6>
            </Box>
          </Box>
          <Box display="flex" mt="4">
            <Box pr="4" display="flex">
              <StarIcon className="mx-2"></StarIcon>
              <h5>3 Reviews</h5>
            </Box>
            <Box display="flex" pr="4">
              <MdVerified className="mx-2"></MdVerified>
              <h5>Identity Verrified</h5>
            </Box>
          </Box>
          <Box className="mx-2 mt-4 mb-3" w="40%">
            <h5>During your stay</h5>
            <h6>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati dolores architecto similique labore libero iste quos?
              Ex, sequi, suscipit
            </h6>
          </Box>
          <Box className="mx-2">
            <h5>Response rate: 100%</h5>
            <h5>Response time: with in an hour</h5>
          </Box>
          <Box
            className="mx-2 my-4 p-1"
            border="1px solid gray"
            borderRadius="5px"
            w="fit-content"
          >
            <button className="px-4 py-2">
              <h5>Contact host</h5>
            </button>
          </Box>
          <hr />

          <Box className="my-5">
            <Box className="my-4">
              <h4>Things to know</h4>
            </Box>
            <Box>
              <Grid templateColumns="1fr 1fr 1fr" gap="4" height="fit-content">
                <GridItem colSpan="1">
                  <Box>
                    <Box>
                      <h5>House rules</h5>
                    </Box>
                    <Box>
                      <h6>Check-in :2:00 pm- 11:00 pm</h6>
                      <h6>Checkout before 11:00 am</h6>
                      <h6>No pets</h6>
                    </Box>
                    <Box className="mt-3">
                      <button>Show more</button>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem colSpan="1">
                  <Box>
                    <Box>
                      <h5>House rules</h5>
                    </Box>
                    <Box>
                      <h6>Check-in :2:00 pm- 11:00 pm</h6>
                      <h6>Checkout before 11:00 am</h6>
                      <h6>No pets</h6>
                    </Box>
                    <Box className="mt-3">
                      <button>Show more</button>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem colSpan="1">
                  <Box>
                    <Box>
                      <h5>House rules</h5>
                    </Box>
                    <Box>
                      <h6>Check-in :2:00 pm- 11:00 pm</h6>
                      <h6>Checkout before 11:00 am</h6>
                      <h6>No pets</h6>
                    </Box>
                    <Box className="mt-3">
                      <button>Show more</button>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box>
          <SpFooter></SpFooter>
        </Box>
      </Box>
    </div>
  );
}
