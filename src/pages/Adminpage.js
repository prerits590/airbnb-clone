import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AiFillGift } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import {
  BsFillMenuAppFill,
  BsFillSearchHeartFill,
  BsGearFill,
} from "react-icons/bs";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa6";
import { MdHome } from "react-icons/md";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Add a new document in collection "cities"

export default function Adminpage() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;

    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{
          color: "gray.400",
        }}
        _hover={{
          bg: "gray.100",
          _dark: {
            bg: "gray.900",
          },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color="brand.500"
          _dark={{
            color: "white",
          }}
          fontWeight="semibold"
        >
          Airbnb
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Home</NavItem>
        <NavItem icon={FaRss}>Articles</NavItem>
        {/* <NavItem icon={HiCollection}>Collections</NavItem> */}
        {/* <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse> */}
        <NavItem icon={AiFillGift}>Changelog</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem>
      </Flex>
    </Box>
  );
  const [submitClicked, setSubmitClicked] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [gridImg1, setGridImg1] = useState("");
  const [gridImg2, setGridImg2] = useState("");
  const [gridImg3, setGridImg3] = useState("");
  const [gridImg4, setGridImg4] = useState("");
  const [gridImg5, setGridImg5] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTitle2 = (e) => {
    setTitle2(e.target.value);
  };
  const handleGridImg1 = (e) => {
    setGridImg1(e.target.value);
  };
  const handleGridImg2 = (e) => {
    setGridImg2(e.target.value);
  };
  const handleGridImg3 = (e) => {
    setGridImg3(e.target.value);
  };
  const handleGridImg4 = (e) => {
    setGridImg4(e.target.value);
  };
  const handleGridImg5 = (e) => {
    setGridImg5(e.target.value);
  };

  const toast = useToast();
  const navigate = useNavigate();

  const addDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "bnbs"), {
        hostedBy: name,
        location: location,
        price: price,
        title: title,
        title2: title2,
        gridImg1: gridImg1,
        gridImg2: gridImg2,
        gridImg3: gridImg3,
        gridImg4: gridImg4,
        gridImg5: gridImg5,
      });
      setName("");
      setLocation("");
      setPrice("");
      setTitle("");
      setTitle2("");
      setGridImg1("");
      setGridImg2("");
      setGridImg3("");
      setGridImg4("");
      setGridImg5("");
      setTimeout(() => {
        navigate("/Home/:id");
      }, 2000);

      // Set submitClicked to false to prevent infinite re-rendering
      setSubmitClicked(false);
      toast({
        title: "Success",
        description: "Property Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (submitClicked) {
      addDocument();
    }
  }, [submitClicked]);

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<BsFillMenuAppFill />}
            size="sm"
          />
          <InputGroup
            w="96"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <InputLeftElement color="gray.500">
              <BsFillSearchHeartFill />
            </InputLeftElement>
            <Input placeholder="Search..." />
          </InputGroup>

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Box>
            <div className="form w-100 h-100">
              <div className="title1 d-flex justify-content-center">
                Airbnb your home
              </div>
              <div className="subtitle d-flex justify-content-center">
                Let's create your account!
              </div>
              <div className="d-flex p-3 align-items-center justify-content-center">
                <div className="input-container p-1 ">
                  <input
                    placeholder="Name"
                    type="text"
                    className="input"
                    value={name}
                    onChange={handleName}
                  />
                  {/* <div className="cut "></div> */}
                </div>

                <div className="input-container p-1">
                  <input
                    placeholder="Location"
                    type="text"
                    className="input"
                    id="lastname"
                    value={location}
                    onChange={handleLocation}
                  />
                  {/* <div className="cut"></div>
                  <label className="iLabel" for="lastname">
                    Location
                  </label> */}
                </div>
              </div>
              <div className="d-flex p-3 align-items-center justify-content-center">
                <div className="input-container p-1 ">
                  <input
                    placeholder="Price"
                    type="text"
                    className="input"
                    value={price}
                    onChange={handlePrice}
                  />
                  {/* <div className="cut "></div>
                  <label className="iLabel" for="firstname">
                    Price
                  </label> */}
                </div>

                <div className="input-container p-1">
                  <input
                    placeholder="Title 1"
                    type="text"
                    className="input"
                    value={title}
                    onChange={handleTitle}
                  />
                </div>
              </div>
              <div className="d-flex p-3 align-items-center justify-content-center">
                <div className="input-container p-1 ">
                  <input
                    placeholder="Title 2"
                    type="text"
                    className="input"
                    value={title2}
                    onChange={handleTitle2}
                  />
                  {/* <div className="cut "></div>
                  <label className="iLabel" for="firstname">
                    Title 2
                  </label> */}
                </div>

                <div className="input-container p-1">
                  <input
                    placeholder="Image 1"
                    type="text"
                    className="input"
                    value={gridImg1}
                    onChange={handleGridImg1}
                  />
                  {/* <div className="cut"></div>
                  <label className="iLabel" for="lastname">
                    Image 1
                  </label> */}
                </div>
              </div>
              <div className="d-flex p-3 align-items-center justify-content-center">
                <div className="input-container p-1 ">
                  <input
                    placeholder="Image 2"
                    type="text"
                    className="input"
                    value={gridImg2}
                    onChange={handleGridImg2}
                  />
                  {/* <div className="cut "></div>
                  <label className="iLabel" for="firstname">
                    Image 2
                  </label> */}
                </div>

                <div className="input-container p-1">
                  <input
                    placeholder="Image 3"
                    type="text"
                    className="input"
                    value={gridImg3}
                    onChange={handleGridImg3}
                  />
                  {/* <div className="cut"></div>
                  <label className="iLabel" for="lastname">
                    Image 3
                  </label> */}
                </div>
              </div>
              <div className="d-flex p-3 align-items-center justify-content-center">
                <div className="input-container p-1 ">
                  <input
                    placeholder="Image 4"
                    type="text"
                    className="input"
                    value={gridImg4}
                    onChange={handleGridImg4}
                  />
                  {/* <div className="cut "></div>
                  <label className="iLabel" for="firstname">
                    Image 4
                  </label> */}
                </div>

                <div className="input-container p-1">
                  <input
                    placeholder="Image 5"
                    type="text"
                    className="input"
                    value={gridImg5}
                    onChange={handleGridImg5}
                  />
                  {/* <div className="cut"></div>
                  <label className="iLabel" for="lastname">
                    Image 5
                  </label> */}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="submit w-50"
                  type="submit"
                  onClick={() => setSubmitClicked(true)}
                >
                  Submit
                </button>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
