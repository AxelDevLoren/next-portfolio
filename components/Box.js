import Card from "@material-ui/core/Card";
import "animate.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Box.module.css";
import { Grid } from "@material-ui/core";
import Image from 'next/image'
export default function Box() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={10} lg={3}>
          <Card className={styles.boxContainer}>
            <CardActionArea>
              <div style={{ paddingTop: "20px" }} >
                <Image width={50} height={50} src="/design.png" alt="design" />
              </div>
              <CardContent>
                <Typography
                  className={styles.titles}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Design
                </Typography>
                <Typography
                  className={styles.texts}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I spend alot of time in the css files and learing diffrent
                  frameworks are libraries to match whatever Js framework i'm
                  currently working with, to that end i wanna explore all
                  possible ways to desing
                </Typography>
                <br />
                <Typography
                  className={styles.titles}
                  variant="h5"
                  component="p"
                >
                  What i enjoy:
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.sub}
                >
                  UX/UI
                </Typography>
                <Typography className={styles.sub} variant="body2">
                  Icons/Logos
                </Typography>
                <Typography className={styles.sub} variant="body2">
                  Webb
                </Typography>
                <br />
                <Typography
                  className={styles.titles}
                  variant="h5"
                  component="p"
                >
                  Tools:
                </Typography>
                <br />
                <Typography className={styles.sub} variant="body2">
                  Figma
                </Typography>
                <Typography className={styles.sub} variant="body2">
                  Adobe
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={10} lg={3}>
          <Card className={styles.boxContainer}>
            <div className={styles.boxAnimate}>
              <CardActionArea>
                <div style={{ paddingTop: "20px" }} >
                  <Image width={50} height={50} className={styles.icons} src="/coding.png" alt="design" />
                </div>
                <CardContent>
                  <Typography
                    className={styles.titles}
                    gutterBottom
                    variant="h4"
                    component="h2"
                  >
                    Front End
                  </Typography>
                  <Typography
                    className={styles.texts}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I spend most of my days working with React.js and vanila js,
                    i enjoy learing diffrent framworks, such as Vue, although i
                    have a deeper intresst for mobile first and React Native
                  </Typography>
                  <br />
                  <Typography
                    className={styles.titles}
                    variant="h5"
                    component="p"
                  >
                    What i enjoy:
                  </Typography>
                  <br />
                  <Typography className={styles.sub} variant="body2">
                    HTML5/CSS3
                  </Typography>
                  <Typography className={styles.sub} variant="body2">
                    Vanila Js, React.js, SQL
                  </Typography>
                  <Typography className={styles.sub} variant="body2">
                    Next.js, Contentful, Nuxt.js etc..
                  </Typography>
                  <br />
                  <Typography
                    className={styles.titles}
                    variant="h5"
                    component="p"
                  >
                    Tools:
                  </Typography>
                  <br />
                  <Typography className={styles.sub} variant="body2">
                    VScode
                  </Typography>
                  <Typography className={styles.sub} variant="body2">
                    Google
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
          </Card>
        </Grid>
        <Grid item xs={10} lg={3}>
          <Card className={styles.boxContainer}>
            <CardActionArea>
              <div style={{ paddingTop: "20px" }} >
                <Image width={50} height={50} className={styles.icons} src="/buisness.png" alt="design" />
              </div>
              <CardContent>
                <Typography
                  className={styles.titles}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Business
                </Typography>
                <Typography
                  className={styles.texts}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I have alot of experince with sales from diffrent jobs, i have
                  studied economy at univerity, also marketing and
                  communications. further than that i would say i know how to
                  sell that pen.
                </Typography>
                <br />
                <Typography
                  className={styles.titles}
                  variant="h5"
                  component="p"
                >
                  What i enjoy:
                </Typography>
                <br />
                <Typography className={styles.subs} variant="body2">
                  Marketing
                </Typography>
                <Typography className={styles.subs} variant="body2">
                  Sales
                </Typography>
                <Typography className={styles.subs} variant="body2">
                  Learing/Classes
                </Typography>
                <br />
                <Typography
                  className={styles.titles}
                  variant="h5"
                  component="h4"
                >
                  Tools:
                </Typography>
                <br />
                <Typography className={styles.subs} variant="body2">
                  Google analytics
                </Typography>
                <Typography className={styles.subs} variant="body2">
                  Trends
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
