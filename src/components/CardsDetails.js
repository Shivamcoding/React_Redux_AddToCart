import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT } from "../redux/actions/action";
import { ADD } from "../redux/actions/action";
import { REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();

  const compare = () => {
    let cartItem = getData.filter((item) => {
      return item.id == id;
    });
    setData(cartItem);
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const decrease = (e) => {
    dispatch(REMOVE(e));
  };

  const dlt = (item) => {
    dispatch(DLT(item));
    history("/");
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center"> Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((item) => {
              return (
                <>
                  <div className="items_img">
                    <img src={item.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant:</strong> {item.rname}
                          </p>
                          <p>
                            <strong>Price:</strong> ₹{item.price}
                          </p>
                          <p>
                            <strong>Dishes:</strong> {item.address}
                          </p>
                          <p>
                            <strong>Total:</strong> ₹{item.price * item.qnty}
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span>
                              <i
                                className="fas fa-minus"
                                onClick={item.qnty <= 1 ? () => dlt(item) : () => decrease(item)}
                              ></i>
                            </span>
                            <span>{item.qnty}</span>
                            <span>
                              <i
                                className="fas fa-plus"
                                onClick={() => send(item)}
                              ></i>
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "white",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {item.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review: </strong>{" "}
                            <span style={{}}>{item.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove: </strong>{" "}
                            <span style={{}}>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(item)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
