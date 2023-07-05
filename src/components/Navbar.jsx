import React from "react";
import { BsGlobe } from "react-icons/bs";
// import { BiSolidUserCircle } from "react-icons/bi";
import { SearchIcon } from "@chakra-ui/icons";
// import { BiAtom, IconName } from "react-icons/bi";
import { Box, Divider, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div
      className="navbar-div"
      style={{ position: "sticky", top: "0", overflowY: "auto" , zIndex:'99999', backgroundColor:'white'}}
    >
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
                      <a class="navbar-brand px-1" style={{ margin: "0" }} href="/">
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
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              aria-current="page"
                              href="index.html"
                            >
                              <h6
                                className="px-3"
                                style={{ borderRight: "1px solid Lightgray" }}
                              >
                                {" "}
                                Anywhere
                              </h6>
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link" href="about.html">
                              <h6
                                className="px-3"
                                style={{ borderRight: "1px solid Lightgray" }}
                              >
                                {" "}
                                Any week
                              </h6>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="product.html">
                              <p>Add guests</p>
                            </a>
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
  );
}
//rgba(0, 0, 0, 0.1) 0px 4px 12px
