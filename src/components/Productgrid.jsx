import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Card from "./Card";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default function ProductGrid() {
  //  const [documentData, setDocumentData] = useState(null);
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const collectionRef = collection(db, "bnbs");
        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach((doc) => {
          const docId = doc.id;
          console.log("Document ID:", docId);
          // You can store the document IDs in state or use them in any way you need
        });
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

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
