import React, { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import SpGallery from "../components/SpGallery";
import Spcontent from "../components/Spcontent";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { GoShare } from "react-icons/go";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdOutlineBalcony, MdVerified } from "react-icons/md";
import {
  FaAccessibleIcon,
  FaMedal,
  FaMountain,
  FaSnowflake,
  FaUserLarge,
} from "react-icons/fa6";
import { PiFlowerTulipFill } from "react-icons/pi";
import { BiBed } from "react-icons/bi";

import { FaLuggageCart, FaSwimmingPool } from "react-icons/fa";
import { TbParking, TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";

import { BsPersonWorkspace } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function Cardpage() {
  const param = useParams();
  const [bnbData, setBnbData]= useState({});
  console.log(param);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const collectionRef = collection(db, "bnbs");
        const docRef = doc(collectionRef,param.id );

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data= docSnap.data();
          setBnbData(data);
          // console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDocuments();
  }, [param.id]);

  return (
    <div className="card-page">
      <div className="navbar-div">
        <header id="full_nav">
          <div class="header">
            <div class="container">
              <nav class="navbar navbar-expand-lg">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
                  <i class=" navbar-toggler-icon"></i>
                </button>
                <div class="collapse navbar-collapse p-2" id="navbarNav">
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-3 d-flex airbnb-icon pb-2"
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <a
                          class="navbar-brand px-1"
                          style={{ margin: "0" }}
                          href="/"
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
                            alt=""
                          />
                        </a>
                        <h4 style={{ color: "#FF385C" }}>airbnb</h4>
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center nav-items1">
                        <div className="nav-ul  hover-effect-border">
                          <ul class="navbar-nav mx-auto">
                            <li class="nav-item d-flex align-items-center px-2">
                              <input
                                type="text"
                                placeholder="Start your search"
                              />
                            </li>

                            <li class="nav-item search-icon">
                              <SearchIcon className="m-2"></SearchIcon>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-3 px-5">
                        {/* <div class="header-right border ">
                        <div class="text-lg-end pt-3 text-div2">
                          <div className="p-tag-nav">
                            <h6>Airbnb your home</h6>
                          </div>
                          <div className="icon-navbar">
                          </div>
                          <div className="nav-user-btn">
                            <button className="nav-btn border d-flex">
                              <div className="user1 px-2">
                                <i class="fa-solid fa-bars"></i>
                              </div>
                              <div className="user2">
                                <i class="fa-solid fa-circle-user"></i>
                              </div>
                            </button>
                          </div>
                        </div>
                      
                      </div> */}
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          height={"100%"}
                          alignItems={"center"}
                          className="p-2"
                        >
                          <Box>
                            <h6>Airbnb your home</h6>
                          </Box>
                          <Box>
                            <BsGlobe></BsGlobe>
                          </Box>
                          <Box
                            display={"flex"}
                            borderRadius={"20px"}
                            className="hover-effect-border"
                          >
                            <button className="d-flex">
                              <Box className="px-2 py-1">
                                <i
                                  class="fa-solid fa-bars"
                                  style={{ color: "#717171" }}
                                ></i>
                              </Box>
                              <Box className="px-2 py-1">
                                <i
                                  class="fa-solid fa-circle-user"
                                  style={{ color: "#717171" }}
                                ></i>
                              </Box>
                            </button>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <div className="single-page-gallery container mt-4">
        <Box className="sp-gallery">
          <Box className="sp-heading">
            <Heading>{bnbData.title}</Heading>
          </Box>
          <Box
            className="sp-ratings"
            display="flex"
            justifyContent="space-between"
          >
            <Box className="sp-ratings-box1 py-2" display="flex">
              <StarIcon className="mx-1"> </StarIcon>

              <h6>
                {bnbData.rating}
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    marginLeft: "8px",
                  }}
                >
                  {bnbData.reviews} reviews
                </span>
              </h6>
              <h6 className="mx-2">{bnbData.location}</h6>
            </Box>
            <Box className="sp-ratings-box2 d-flex ">
              <button className="mx-2 d-flex">
                <GoShare className="mx-1"></GoShare>
                <h6>Share</h6>
              </button>
              <button className="d-flex">
                <AiOutlineHeart className="mx-1"></AiOutlineHeart>
                <h6>Save</h6>
              </button>
            </Box>
          </Box>

          <Box className="sp-gallery1 py-3">
            <Grid
              templateColumns={["1fr", "repeat(4, 1fr)"]}
              // height="auto"
              gap="2"
              className="grid"
            >
              <GridItem
                colSpan="2"
                bg="red"
                rowSpan="2"
                className="GridItem"
                height="auto"
              >
                <Box className="sp-gallery-img1" w="100%" h="100%">
                  <img
                    src={bnbData.gridImg1}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </GridItem>
              <GridItem colSpan="1" bg="green" className="GridItem">
                <Box className="sp-gallery-img2" w="100%" h="100%">
                  <img
                    src={bnbData.gridImg2}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </GridItem>
              <GridItem colSpan="1" bg="green" className="GridItem">
                <Box className="sp-gallery-img3" w="100%" h="100%">
                  <img
                    src={bnbData.gridImg3}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </GridItem>
              <GridItem colSpan="1" bg="green" className="GridItem">
                <Box className="sp-gallery-img4" w="100%" h="100%">
                  <img
                    src={bnbData.gridImg4}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </GridItem>
              <GridItem colSpan="1" bg="green" className="GridItem">
                <Box className="sp-gallery-img4" w="100%" h="100%">
                  <img
                    src={bnbData.gridImg5}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </div>

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
                    <h4>{bnbData.title2}</h4>
                    <h6 className="py-2">
                      {" "}
                      3 guests 1 bedroom 2 beds 1 private bathroom
                    </h6>
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
                      <p>Lorem ipsum dolor sit amet.</p>
                    </Box>
                  </Box>
                  <Box className="amenities1 py-3">
                    <Box className="sp-content-icon">
                      <FaSwimmingPool></FaSwimmingPool>
                    </Box>

                    <Box className="sp-content-icon-text">
                      <h5>Dive right in</h5>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </Box>
                  </Box>
                  <Box className="amenities1 py-3">
                    <Box className="sp-content-icon">
                      <FaMedal></FaMedal>
                    </Box>

                    <Box className="sp-content-icon-text">
                      <h5>Experianced host</h5>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
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
                    Dam, an Important Bird Area! We are located a 20 minute
                    drive away from Sula, York, and Soma vineyards and wineries
                    which are on the opposite
                  </h6>
                </Box>
                <hr />
                <Box className="where-you-will-sleep pt-4" p="10px">
                  <h4>Where you will sleep</h4>
                  <Box className="sleep-content py-3">
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
                      {/* <Box className="review" display="flex">
                        <StarIcon className="mx-1 mt-1"> </StarIcon>
                        <h4>
                          {bnbData.rating}
                          <span style={{ fontWeight: "400", fontSize: "16px", marginLeft:'8px' }}>
                            {bnbData.reviews} reviews
                          </span>
                        </h4>
                      </Box> */}
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
              // border="solid 1px gray"
              borderRadius="10px"
              border=" 1px solid lightGray"
              boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              {/* <Box className="sp-sidebar2 " position="sticky" overflowY="auto"> */}
              <Box
                display="flex"
                justifyContent="space-between"
                className="pt-1"
              >
                <h4>
                  ${bnbData.price}
                  <span
                    className="mx-1"
                    style={{ fontWeight: "400", fontSize: "16px" }}
                  >
                    night
                  </span>
                </h4>
                <Box display="flex">
                  <StarIcon className="mx-1 mt-1"> </StarIcon>

                  <h4>
                    {bnbData.rating}
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#717171",
                        marginLeft: "5px",
                      }}
                    >
                      {bnbData.reviews} reviews
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
                <h4>Hosted by {bnbData.hostedBy}</h4>
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
                <Grid
                  templateColumns="1fr 1fr 1fr"
                  gap="4"
                  height="fit-content"
                >
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
            <div className="conatiner mt-5">
              <Box>
                <Grid
                  templateColumns={"1fr 1fr 1fr 1fr"}
                  height="fit-content"
                  gap="4"
                >
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
                <Box
                  display="flex"
                  justifyContent="space-between"
                  className="pb-2"
                >
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
          </Box>
        </Box>
      </div>
    </div>
  );
}
