import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Switchsec from "../components/Switchsec";
// import Productgrid from "../components/Productgrid";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Card";

// import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bnbs"));
        const dataArray = await querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDataArr(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("dataArr", dataArr);
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
            {dataArr?.map((item, index) => {
              return (
                <Box className="" w={"fit-content"}>
                  <Box
                   
                    height="auto"
                    p="1rem"
                    width="100%"
                    key={index}
                  >
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
