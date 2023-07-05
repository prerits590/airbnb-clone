import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import {StarIcon} from '@chakra-ui/icons';
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Card() {
  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Lonavala, India",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Link to="/Single/3">
      <div className="card-div">
        <SimpleGrid minChildWidth="120px" spacing="5rem">
          <Box height="auto" className="card-box">
            <Container>
              <Flex p={0} w="full" alignItems="center" justifyContent="center">
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  className="img-div"
                >
                  <Image
                    src={property.imageUrl}
                    alt={property.imageAlt}
                    roundedTop="lg"
                  />

                  <Box p="0">
                    <Box
                      display="flex"
                      alignItems="baseline"
                      className="name-box"
                    >
                      <Box className="text-box2">
                        <h6>{property.title}</h6>

                        <Box className="rating-box">
                          <AiFillStar className="AiFillStar"></AiFillStar>
                          <p className="rating">4.2</p>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="fav-icon">
                      <FiHeart
                        className="FiHeart"
                        // style={{ backgroundColor: 'rgba(0, 0, 0, 0.5) '}}
                        color="white"
                      ></FiHeart>
                    </Box>

                    <Box className="extra-text">
                      <p>63 Kilometers away</p>
                      <p>6-7 Jul</p>
                    </Box>
                    <Box className="d-flex py-2">
                      <h6>{property.formattedPrice}</h6>
                      <p className="px-1">night</p>
                     
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Container>
          </Box>
        </SimpleGrid>
      </div>
    </Link>
  );
}
