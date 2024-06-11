import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink
            to="/"
            className="text-decoration-none text-light mx-3"
            style={{ fontSize: "20px" }}
          >
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary" onClick={handleClick}>
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
      </Navbar>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          className="card_details d-flex justify-content-center align-items-center"
          style={{ padding: 10, position: "relative" }}
        >
          <i
            className="fas fa-close smallclose"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 2,
              right: 20,
              fontSize: "23px",
              cursor: "pointer",
            }}
          ></i>
          <p style={{ fontSize: 22 }}>Your cart is empty.</p>
          <img
            src="./cart.gif"
            alt="cart"
            className="emptycart_img"
            style={{ width: "5rem", padding: 10 }}
          />
        </div>
      </Menu>
    </>
  );
};

export default Header;
