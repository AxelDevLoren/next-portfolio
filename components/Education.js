import React from "react";

import { Grid } from "@material-ui/core";

export default function Education() {
  return (
    <>
      <div className="titleBox">
        <h2 className="eduTitle">My University education</h2>
      </div>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={3}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/stockholmU.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Stockholm Universitet </h1>
                <p>Medie-Kommunikationsvetenskap</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={3}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/södertörnH.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Södertörns Högskola</h1>
                <p>Makro-ekonomi</p>
                <p>Journalistik</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="space"></div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={3}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/kyh.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>KYH</h1>
                <p>Front-end Utvecklare</p>
                <p>UX, JS, HTML5, CSS3, React etc..</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={3}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/kth.png"
                  alt="Avatar"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "20px"
                  }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Kungliga Tekninska Högskolan</h1>
                <p>Dataingenjör (pågående)</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <style jsx>
        {`
          .titleBox {
            padding-top: 100px;
            margin-bottom: -30px;
          }
          .eduTitle {
            text-align: center;
            color: white;
          }
          .space {
            padding-top: 50px;
          }
          .flip-card {
            margin: 20px;
            background-color: transparent;
            width: 300px;
            height: 300px;
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          .flip-card-front {
            border-radius: 20px;
            background-color: white;
            color: black;
          }

          .flip-card-back {
            border-radius: 20px;
            background-color: black;
            color: white;
            transform: rotateY(180deg);
          }
        `}
      </style>
    </>
  );
}
