import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  //console.log(getData);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  //console.log(price);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (item) => {
    dispatch(DLT(item));
  };

  const total = () => {
    let price = 0;
    getData.map((item) => (price = item.price + price));
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

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
          <Badge
            badgeContent={getData.length < 1 ? "0" : getData.length}
            color="primary"
            onClick={handleClick}
          >
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
        {getData.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getData?.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>
                        <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                          <img
                            src={item.imgdata}
                            style={{ width: "5rem", height: "5rem" }}
                          />
                        </NavLink>
                      </td>
                      <td>
                        <p>{item.rname}</p>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.qnty}</p>
                        <p
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => dlt(item)}
                        >
                          <i className="fas fa-trash smalltrash"></i>
                        </p>
                      </td>
                      <td
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                        onClick={() => dlt(item)}
                      >
                        <i className="fas fa-trash largetrash"></i>
                      </td>
                    </tr>
                  );
                })}
                <p className="text-center">Total: ₹{price}</p>
              </tbody>
            </Table>
          </div>
        ) : (
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
        )}
      </Menu>
    </>
  );
};

export default Header;
