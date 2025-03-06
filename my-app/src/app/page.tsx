"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {Container, Navbar, Nav, Form, FormControl, Button, Row, Col,} from "react-bootstrap";
import { Heart, Person, Cart, GlobeAmericas} from "react-bootstrap-icons";

const TopGrayNav = () => {
  return (
    <Navbar style={{ backgroundColor: "#F2F2F2" }}>
      <Container className="d-flex justify-content-between align-items-center">

        <Nav>
          <div className="d-flex align-items-left pt-3 me-2">
            <img
              src="/images/logitech.png"
              width={50}
              height={15}
              alt="Logitech logo"
            />
          </div>
          <Nav.Item>
            <Nav.Link as="span" className="text-muted me-2">
              |
            </Nav.Link>
          </Nav.Item>
          <div className="d-flex align-items-left pt-3 me-2">
            <img
              src="/images/logitech.png"
              width={50}
              height={15}
              alt="Another Logitech logo"
            />
            <img
              src="/images/logitech-icon.png"
              width={15}
              height={15}
              alt="Logitech small icon"
              className="ms-2"
            />
          </div>
          <Nav.Item>
            <Nav.Link as="span" className="text-muted">
              |
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-muted">
              Business
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="span" className="text-muted">
              |
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-muted">
              Education
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Empty Nav sections for spacing */}
        <Nav>
          <Nav.Item>
            <Nav.Link>

            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              
            </Nav.Link>
          </Nav.Item>
        </Nav>
        
        <Nav>
          <Nav.Item>
            <Nav.Link href="#" className="text-muted">
              Support
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="span" className="text-muted me-2">
              |
            </Nav.Link>
          </Nav.Item>
          <GlobeAmericas className="text-muted my-3"/>
          <Nav.Item>
            <Nav.Link as="span">
              <i className="bi bi-globe-americas text-muted"> US,EN</i>
              
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

const MainNav = () => {
  return (
    <Navbar bg="white" className="shadow-sm">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <img src="/images/logitech.png" width={80} alt="Logitech" />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#" className="text-dark me-4">
            Shop
          </Nav.Link>
          <Nav.Link href="#" className="text-dark me-4">
            Planet &amp; People
          </Nav.Link>
          <Nav.Link href="#" className="text-dark me-4">
            Software
          </Nav.Link>
          <Nav.Link href="#" className="text-dark me-4">
            Deals
          </Nav.Link>
        </Nav>

        <Form className="d-flex align-items-center">
          <FormControl
            type="search"
            placeholder=""
            className="rounded-pill me-3"
            style={{ backgroundColor: "#E9E9E9", width: "200px" }}
          />
          <Heart className="me-4 fs-5" />
          <Person className="me-4 fs-5" />
          <Cart className="fs-5" />
        </Form>
      </Container>
    </Navbar>
  );
};

const HeroSection = () => {
  return (
    <Container>
      <Row className="align-items-end">
        {/* Image Column */}
        <Col xs={12} md={6} className="text-center">
          <img
            src="/images/hero-webcam-mx-anywhere3s-product-desktop.webp"
            className="img-fluid"
            alt="MX Anywhere 3S Mouse"
          />
        </Col>
        {/* Text Column */}
        <Col xs={12} md={6} className="mb-5">
          <h1 className="mb-2 fs-3">MX Anywhere 3S</h1>
          <p style={{ fontSize: "3em", lineHeight: 1.2 }}>
            Tracks
            <br />
            everywhere,
            <br />
            goes anywhere
          </p>
          <p className="text-muted mb-2">$69.99 – $79.99</p>
          <Button
            className="btn-lg rounded-pill"
            style={{
              backgroundColor: "#02FDCF",
              borderColor: "#02FDCF",
              color: "#000",
              width: "170px",
            }}
            href="#"
          >
            LEARN MORE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const WorkspaceSection = () => {
  return (
    <section
      style={{
        background: `url('/images/girl-using-lift-vertical-ergonomic-mouse-desktop.jpg') center center / cover no-repeat`,
        position: "relative",
        color: "#fff",
        padding: "5rem 0",
      }}
    >
      <Container>
        <Row className="">
          <Col md={5} className="text-end">
            <p className="me-3" style={{ fontSize: "3em", lineHeight: 1.2 }}>
              Innovate your
              <br />
              workspace, unlock
              <br />
              your potential.
            </p>
            <ul className="me-3"  style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>
                <h3>$75 off $350</h3>
              </li>
              <li>
                <h3>$50 off $250</h3>
              </li>
              <li>
                <h3>$25 off $120</h3>
              </li>
            </ul>
            <p className="me-3 mb-4">
              Limited time offer. <u>Exclusions apply*</u>
            </p>
            <Button
              className="btn-lg rounded-pill me-3"
              style={{
                backgroundColor: "#02FDCF",
                borderColor: "#02FDCF",
                color: "#000",
                width: "170px",
              }}
              href="#"
            >
              SHOP NOW
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default function Home() {
  return (
    <main>
      <TopGrayNav />
      <MainNav />
      <HeroSection />
      <WorkspaceSection />
    </main>
  );
}
