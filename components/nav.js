import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare, faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Headroom from 'react-headroom';

import './nav.css';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './Layout';

function Wrapper(props) {
  return (
    <Headroom
      pinStart={200}
      calcHeightOnResize={true}
      style={{
        background: 'rgb(57, 111, 176)',
        boxShadow: '1px 1px 1px rgba(0,0,0,0.1)'
      }}>
      <div className="wrapper">
        <Navbar defaultExpanded={false} className="navbar-default" expand="md">
          <div className="nav_container">
            <div className="menu_mobile">
              <Link href={'/'}>
                <Navbar.Brand className="header">
                  <h1 className="header_title  text-decoration-none">
                    Sujaac Arts
                  </h1>
                </Navbar.Brand>
              </Link>

              <Navbar.Toggle variant="light" aria-controls="basic-navbar-nav">
                <div className="nav-icon">
                  <div></div>
                </div>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="menu_container">
                <Nav className="menu">
                  <Link href="/" passHref={true}>
                    <Nav.Link>Comic</Nav.Link>
                  </Link>
                  <Link href={'/about'} passHref={true} key={'/about'}>
                    <Nav.Link>About</Nav.Link>
                  </Link>

                  <Nav.Link
                    href="https://www.facebook.com/pages/category/Pqersonal-Blog/Sujaac-Arts-119424006122869/"
                    target="_blank">
                    Contact
                  </Nav.Link>
                </Nav>

                <Nav className="social">
                  <Nav.Link
                    href="https://www.facebook.com/pages/category/Personal-Blog/Sujaac-Arts-119424006122869/"
                    target="_blank"
                    className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Nav.Link>
                  <Nav.Link
                    href="https://twitter.com/SujaacArts"
                    target="_blank"
                    className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Nav.Link>
                  <Nav.Link href="/">
                    <FontAwesomeIcon icon={faShare} />
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </Headroom>
  );
}

export default Wrapper;
