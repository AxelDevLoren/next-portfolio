import React from "react";

import { Grid } from "@material-ui/core";
import Image from "next/image";

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
          <div className="containerH">
            <div className="container">
              <Image width={300} height={300} src="/kyh.png" alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <h1>KYH</h1>
                  <h3>Front-end Utvecklare</h3>
                  <p>Two years</p>
                  <p>UX, JS, HTML5, CSS3, React etc..</p></div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={3}>
          <div className="containerH">
            <div className="container">
              <Image width={300} height={300} src="/södertörnH.png" alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <h1>Södertörn University</h1>
                  <h3>Economics and Journalism</h3>
                  <p>One year</p>
                  <p>Macro-Micro Economics</p></div>
              </div>
            </div>
          </div>





        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={3}>
          <div className="containerH">
            <div className="container">
              <Image width={300} height={300} src="/stockholmU.png" alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <h1>Stockholm University</h1>
                  <p>Medie-Communications Science</p>
                  <p>A 2 year education and a completed C-uppsats</p></div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={3}>
          <div className="containerH">
            <div className="container">
              <Image width={300} height={300} src="/kth_logo.png" alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <h1>KTH</h1>
                  <p>Dataingenjör</p>
                  <p>My current education to Dataingenjör</p></div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <style jsx>
        {`
        .containerH{
          margin:20px;
        }
.container {

  border-radius: 20px;
  background: white;
  position: relative;
  width: 100%;
}

.image {
  border: none;
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  border-radius: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: black;
}

.container:hover .overlay {
  opacity: 0.9;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.testContainer {
  margin: 20px; 
  border:white solid 1px;
  background: white;
  position: relative;
  width: 100%;
  border-radius: 20px;
}

#imageTest {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.textMiddle {
  transition: .5s ease;
  opacity: 0; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

}

.textMiddle:hover  {
  border-radius: 20px;
  width: 362px;
  height:310px;
  background: grey;
  opacity: 0.9;
}

.testText {
  
  color: black;
  font-size: 16px;
  padding: 16px 32px;
}



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
