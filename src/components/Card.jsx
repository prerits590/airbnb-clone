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
  <Link to='/Single/3'>
    <div className="card-div my-2">
        <SimpleGrid minChildWidth="120px" spacing="5rem">
          <Box bg="tomato" height="auto" className="card-box">
            <Container>
              <Flex
                bg="#edf3f8"
                _dark={{
                  bg: "#3e3e3e",
                }}
                p={0}
                w="full"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  bg="white"
                  _dark={{
                    bg: "gray.800",
                  }}
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
                        <Text
                          mt="1"
                          fontWeight="semibold"
                          as="p"
                          lineHeight="tight"
                          noOfLines={1}
                        >
                          {property.title}
                        </Text>

                        <Box className="rating-box">
                          <AiFillStar className="AiFillStar"></AiFillStar>
                          <p className="rating">4.2</p>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="fav-icon">
                      <FiHeart className="FiHeart" color="white"></FiHeart>
                    </Box>

                    <Box className="extra-text">
                      <Text>63 Kilometers away</Text>
                      <Text>6-7 Jul</Text>
                    </Box>
                    <Box>
                      {property.formattedPrice}
                      <Box as="span" fontSize="sm" p="1">
                        night
                      </Box>
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
