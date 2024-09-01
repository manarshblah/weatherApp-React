import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import bg from "../assets/bg-5.png";
import GetData from "../hooks/getData";
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  const [data, saerchCity, setsSaerchCity, loading, error, fetchData, imags] =
    GetData();
  // style={{ backgroundImage: "#a09a9f" }}
  return (
    <Container fluid className="main-div "
      style={{
        backgroundImage: `url(${imags})`
      }}>
      <div className="justify-content-md-center py-5 container body">
        <div  className="info">
          <Card className="Card-Content">
            <Card.Img src={imags} className="Card-img" />
            <Card.ImgOverlay>
              <Card.Title className="text-center">
                <h1
                  style={{
                    color: "#d86647",
                    textShadow: "1.5px 1.5px #fff",
                    paddingTop: "1em",
                    marginBottom: "0em",
                    fontWeight: "900",
                  }}
                  data-aos="fade-up"
                >
                  Weather App
                </h1>
              </Card.Title>
              <Card.Body className="text-center">
                <div className="search row g-3">
                  <div className="col text-align-center"

                    style={{
                      display: "flex",
                      width: "10%!important",
                      textAlign: "center",
                      justifyContent: "center"
                    }}>
                    <input
                      type="text"
                      className="form-control"
                      value={saerchCity}
                      placeholder="Inter City Name"
                      onChange={(e) => setsSaerchCity(e.target.value)}
                    />
                    <button className="btn-search" onClick={fetchData}>
                     <FaSearch className="icon-search"/>
                    </button>
                  </div>
                </div>
                {loading && <h1>Loading....</h1>}
                {data ? (
                  <div className="row " style={{ marginTop: "7rem" }}>
                    <div
                      className="col-lg-7 col-sm-12 "
                      style={{
                        paddingTop: "1em",
                      }}
                    >
                      <div className="row text-center" style={{ justifyContent: "center" }}>
                        <div
                          className="col-5 col-sm-5"
                          style={{
                            padding: 0,
                          }}
                        >
                          <Image
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            // class="img-fluid"
                            alt={data.weather[0].description}
                            style={{ height: "7em" }}
                          />
                        </div>
                        <div className="col-5 col-sm-5  align-content-center">
                          {" "}
                          <h3
                            className="card-subtitle text-start"
                            style={{
                              color: "#EEEEEE",
                              font: "3em",
                              fontWeight: "bold",
                              textShadow: "1.5px 1.5px black"
                            }}
                          >
                            {data.name} {data.sys.country}
                          </h3>
                          <div className="d-flex flex-rowd-flex">
                            <h1
                              className="card-subtitle text-start p-2"
                              style={{
                                color: "#EEEEEE",
                                // paddingTop: "0.5em",
                                font: "3em ",
                                fontWeight: "bold",
                                textShadow: "1.5px 1.5px black"
                              }}
                            >
                              {data.main.temp}
                            </h1>
                            <span
                              className="p-2"
                              style={{
                                color: "#EEEEEE",
                                font: "12px !important",
                                fontWeight: "600 !important",
                                textShadow: "1.5px 1.5px black"
                              }}
                            >
                              °C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="col-9 col-sm-9 ">
                          <h4
                            style={{
                              color: "#EEEEEE",
                              paddingTop: "0.75em",
                              font: "3em",
                              fontWeight: "bold",
                              textShadow: "1.5px 1.5px black",
                              marginTop: "20px"
                            }}
                          >
                            {data.weather[0].description}
                          </h4>
                        </div>
                        <div className="col-3 col-sm-3 "></div>
                      </div>
                    </div>
                    <div
                      className="col-lg-5 col-sm-12 Details"
                      style={{
                        paddingTop: "2em",
                        backgroundColor: "#ffffff24",
                        borderRadius: "10px",
                        paddingBottom: "30px"
                      }}
                    >
                      {" "}
                      <h5
                        className="card-subtitle"
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "0em !important",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Temp Max : 
                        <span style={{color: "#d19a9a", textShadow: "1px 1px black",  marginLeft: "20px" }}>
                          {data.main.temp_max}
                        </span>
                        <span> °c</span>
                      </h5>
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Temp Min :

                        <span style={{color: "#d19a9a", textShadow: "1px 1px black",  marginLeft: "20px" }}>
                          {data.main.temp_min}
                        </span>
                        <span> °c</span>
                      </h5>
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Feels Like :

                        <span style={{ color: "#d19a9a", textShadow: "1px 1px black",  marginLeft: "20px" }}>
                          {data.main.feels_like}
                        </span>
                        <span> °c</span>
                      </h5>
                      {/* <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Humidity : {data.main.humidity} %
                      </h5>
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Wind Speed : {data.wind.speed} m/sec
                      </h5> */}
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Pressure :

                        <span style={{ color: "#d19a9a", textShadow: "1px 1px black", marginLeft: "15px" }}>
                          {data.main.pressure}
                        </span>
                        <span> hPa</span>
                      </h5>
                    </div>
                    {/* <div className="col-1"></div> */}
                  </div>
                ) : error ? (
                  <div className="row ">
                    <div
                      className="col-12 col-sm-12 text-center "
                      style={{
                        paddingTop: "1em",
                      }}
                    >
                      <h3
                        style={{
                          color: "#d86647",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "0em",
                          marginBottom: "0em",
                          fontWeight: "600",
                        }}
                      >
                        There Is No City With This Name, Inter a Valid City Name
                      </h3>
                    </div>
                  </div>
                ) : null}
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Weather;
