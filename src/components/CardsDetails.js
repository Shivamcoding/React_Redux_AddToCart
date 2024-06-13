import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let cartItem = getData.filter((item) => {
      return item.id == id;
    });
    setData(cartItem);
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
                            <strong>Total:</strong> ₹300
                          </p>
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
