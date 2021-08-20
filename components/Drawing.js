import styles from "../styles/Hero.module.css";
import { Grid } from "@material-ui/core";
import Image from "next/image";

export default function Drawing() {
  return (
    <>
      <div className="draw">
        <Grid container justifyContent="center" alignItems="center">
          {" "}
          <Grid item lg={7}>
            <div className={styles.AboutBox}>
              <Image width={400} height={400}
                className={styles.aboutImg}
                alt="wavingNerd"
                src="/Dev.svg"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <style jsx>
        {`
          .draw {
            padding-top: 100px;
          }
        `}
      </style>
    </>
  );
}
