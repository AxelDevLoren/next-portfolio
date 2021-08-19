import React from "react";
import "animate.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Card, Grid } from "@material-ui/core";
import styles from "../styles/Works.module.css";
import { Animated } from "react-animated-css";
import CardActionArea from "@material-ui/core/CardActionArea";

export default function Works() {
  return (
    <div className="WorksBox">
      <br />

      <Container maxWidth="lg">
        <Grid item lg={12}>
          <div>
            <h1
              id={styles.titles}
              className="animate__animated animate__bounce"
            >
              My reccent work
            </h1>
          </div>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid item lg={4}>
            <div className={styles.boxAnimate}>
              <Card className={styles.cards}>
                <CardActionArea>
                  <div className="img__wrap">
                    {" "}
                    <img
                      alt="ganfit-site"
                      className={styles.cardImg}
                      style={{ height: "auto", width: "100%" }}
                      src="/fitgang.png"
                    />
                    <p className="img__description">
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        alt="next-app"
                        href="https://fit-gang.vercel.app/"
                      >
                        <h1> My Next/Contentful app</h1>
                      </a>
                    </p>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={styles.boxAnimate}>
              <Card className={styles.cards}>
                <CardActionArea>
                  <div className="img__wrap">
                    <img
                      alt="files"
                      className={styles.cardImg}
                      style={{ height: "auto", width: "100%" }}
                      src="/gihubFiles.jpg"
                    />
                    <p className="img__description">
                      {" "}
                      <a
                        alt="github"
                        style={{ textDecoration: "none", color: "white" }}
                        href="https://github.com/Profrantit/Fitter"
                      >
                        <h1> Strapi/React project files</h1>
                      </a>
                    </p>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className={styles.boxAnimate}>
              <Card className={styles.cards}>
                <CardActionArea>
                  <div className="img__wrap">
                    <img alt="ux" className={styles.img} src="/ux-mobile.jpg" />
                    <p className="img__description">
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href="https://www.figma.com/proto/yKTmbEXW2Cn83FfxO8u03i/Untitled?node-id=208%3A1314"
                      >
                        <h1>Figma design/UX project</h1>
                      </a>
                    </p>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
      <style jsx>{`
        .WorksBox {
          padding-top: 100px;
        }
        .title {
          color: #6c63ff;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .cards {
          max-width: 345;
          height: 200;
        }
        .img {
          width: 100%;
          height: auto;
        }
        .img__description {
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: large;
          transform: translate(-50%, -50%);
          font-weight: bold;
          color: white;
          visibility: hidden;
          opacity: 0;

          /* transition effect. not necessary */
          transition: opacity 0.2s, visibility 0.2s;
        }

        .img__wrap:hover .img__description {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
