import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Category Listing</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      WOMEN
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgb(135, 206, 235)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                        MEN 
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
          rippleColor="dark"
          rippleTag="div"
          className="bg-image rounded hover-zoom shadow-1-strong"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
            fluid
            className="w-100"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "yellow" }}
            >
              <div className="d-flex justify-content-start align-items-start h-100">
                <h5>
                  <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                  ACCESSORIES
                  </span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </a>
          </MDBRipple>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  );
}

export default App;