import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
// import React, { useEffect, useState } from "react";


function Header({ inputHandler, setPage ,allGenres}) {

    const x = useNavigate();
    const RedirectToHome = (e) => {
        if (e.key === 'Enter') {
            return x('/')
        }
    }


    return (
        <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand ><Link to={'/'} className="nav-link text-decoration-none"><BiMoviePlay className="display-6 bg-home p-1 rounded-1 mx-1 " /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link text-decoration-none">Home</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            {allGenres.map((genre, index) => (
                                <Nav.Link href='#' key={index}>
                                    <Link
                                        to={`genre/${genre.id}`}
                                        className="dropdown-item  text-decoration-none"
                                        value={genre.id}
                                        key={genre.id}
                                        onClick={()=>{setPage(1)}}
                                    >
                                        {genre.name}
                                    </Link>
                                </Nav.Link>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Nav className="d-flex flex-row mx-2 my-2">
                        <Link to={'/#social'}><FaTwitter fill='white' className="display-6 bg-primary p-1 rounded-1 mx-1" /></Link>
                        <Link to={'/#social'}><FaLinkedin fill='white' className="display-6 bg-primary p-1 rounded-1 me-1" /></Link>
                        <Link to={'/#social'}><FaInstagram fill='white' className="display-6 bg-instagram p-1 rounded-1" /></Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            onKeyDown={RedirectToHome}
                            onChange={inputHandler}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header