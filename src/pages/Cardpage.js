import React from "react";
// import Navbar from '../components/Navbar'
import { BsGlobe } from "react-icons/bs";
import { SearchIcon } from "@chakra-ui/icons";
import SpGallery from "../components/SpGallery";
import Spcontent from "../components/Spcontent";
import { Box } from "@chakra-ui/react";

export default function Cardpage() {
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
                              <input type="text" placeholder="Start your search"/>
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

      <SpGallery />

      <Spcontent />
    </div>
  );
}
