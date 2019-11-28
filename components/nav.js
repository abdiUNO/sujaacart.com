import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare, faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './nav.css';
import Link from 'next/link';

const Wrapper = () => (
  <div className="wrapper">
    <Navbar collapseOnSelect className="navbar-default" expand="md">
      <div className="nav_container">
        <div className="menu_mobile">
          <Link href={'/'}>
            <Navbar.Brand className="header" href="#home">
              <h1 className="header_title  text-decoration-none">
                SUJAAC ARTS
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
              <Link href="/">
                <Nav.Link href="#home">Comic</Nav.Link>
              </Link>
              <Link href={'/about'}>
                <Nav.Link href="#link">About</Nav.Link>
              </Link>
              <Link href={'/contact'}>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Link>
            </Nav>

            <Nav className="social">
              <Nav.Link
                href="https://www.facebook.com/pages/category/Personal-Blog/Sujaac-Arts-119424006122869/"
                target="_blank"
                className="text-decoration-none text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/pages/category/Personal-Blog/Sujaac-Arts-119424006122869/"
                target="_blank"
                className="text-decoration-none text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link href="facebook.com">
                <FontAwesomeIcon icon={faShare} />
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </div>
);

export default Wrapper;
