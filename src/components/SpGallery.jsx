import { StarIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoShare } from "react-icons/go";

export default function SpGallery() {
  return (
    <div className="single-page-gallery container mt-4">
      <Box className="sp-gallery">
        <Box className="sp-heading">
          <Heading>Vihang Farmhouse: Florican Room</Heading>
        </Box>
        <Box
          className="sp-ratings"
          display="flex"
          justifyContent="space-between"
        >
          <Box className="sp-ratings-box1 py-2" display="flex">
            <StarIcon className="mx-1"> </StarIcon>

            <h6>
              4.86{" "}
              <span style={{ fontWeight: "400", fontSize: "16px" }}>
                99 reviews
              </span>
            </h6>
            <h6 className="mx-2">Nashik, Maharashtra, India</h6>
          </Box>
          <Box className="sp-ratings-box2 d-flex " >
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
            <GridItem colSpan="2" bg="red" rowSpan="2" className="GridItem">
              <Box className="sp-gallery-img1" w="100%" h="100%">
                <img
                  src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
            <GridItem colSpan="1" bg="green" className="GridItem">
              <Box className="sp-gallery-img2" w="100%" h="100%">
                <img
                  src="https://a0.muscache.com/im/pictures/1a284fe1-9332-412d-9635-4fefb3ca124d.jpg?im_w=720"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
            <GridItem colSpan="1" bg="green" className="GridItem">
              <Box className="sp-gallery-img3" w="100%" h="100%">
                <img
                  src="https://a0.muscache.com/im/pictures/876d422d-5537-4ea8-8b10-026e5d7bcfd5.jpg?im_w=720"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
            <GridItem colSpan="1" bg="green" className="GridItem">
              <Box className="sp-gallery-img4" w="100%" h="100%">
                <img
                  src="https://a0.muscache.com/im/pictures/c669ec9b-f901-4065-88ff-fb209a40cb7f.jpg?im_w=720"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
            <GridItem colSpan="1" bg="green" className="GridItem">
              <Box className="sp-gallery-img5" w="100%" h="100%">
                <img
                  src="https://a0.muscache.com/im/pictures/c6ffa85d-ef71-46a1-8ab2-8ed86bb51138.jpg?im_w=720"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
