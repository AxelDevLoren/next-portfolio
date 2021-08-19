import { Grid } from "@material-ui/core";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img className={styles.avatar} alt="avatar" src="/AvatarMak.png" />
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        <h2 className={styles.welcome}>Front end Developer</h2>
      </Grid>
      <h3 className={styles.welcome}>I code, I review, I drink coffee</h3>{" "}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item></Grid>
        <Grid item xs={10} lg={6}>
          {" "}
          <p className={styles.aboutText}>
            I'm a high energy guy, always has been, always will. With that I
            tend to stay busy during the day, I wake up early drink some coffee
            and do some coding, by coding I mean I work on my own sites, review
            code or help some friends with their projects. When I get done with
            the "work", I always go to the gym to get some of that excess energy
            out of my body, after that I usually calm myself down with some
            videos or movies, with some food next to me.
          </p>
        </Grid>
      </Grid>
    </>
  );
}
