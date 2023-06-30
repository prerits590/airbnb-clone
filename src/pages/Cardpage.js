import React from 'react'
// import Navbar from '../components/Navbar'
import { BsGlobe } from 'react-icons/bs';
import { SearchIcon } from '@chakra-ui/icons';
import SpGallery from '../components/SpGallery';
import Spcontent from '../components/Spcontent';

export default function Cardpage() {
  return (
    <div className="card-page">
      <div className="card-page1 ">
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
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <div className="container">
                      <div className="row">
                        <div className="col-3 d-flex airbnb-icon">
                          <a class="navbar-brand" href="/">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-6 d-flex justify-content-center nav-items1">
                          <div className="nav-ul d-flex">
                            <ul class="navbar-nav">
                              <div className="start-search">
                                <p>Start you search</p>
                              </div>
                              <li class="nav-item search-icon">
                                <SearchIcon className="m-1"></SearchIcon>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-3 border border-primary d-flex justify-content-end">
                          <div class="header-right">
                            <div class="text-lg-end pt-3 d-flex text-div2">
                              <div className="p-tag-nav">
                                <p>Airbnb your home</p>
                              </div>
                              <div className="icon-navbar">
                                <BsGlobe></BsGlobe>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>

    <SpGallery/>


<Spcontent/>


    </div>
  );
}
