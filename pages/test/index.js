import React from "react";
import styles from "../../styles/Test.module.css";
export default function index() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.brand}>Axel</h1>
        <div className={styles.wrapper}>
          <div className={styles.companyInfo}>
            <h3>Loren</h3>
            <ul className={styles.ul}>
              <li>address</li>
              <li>555 555 555</li>
              <li>test@email.com</li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>email me:</h3>
            <form className={styles.form}>
              <p>
                <label>Name</label>
                <input type="text" name="name"></input>
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="name" />
              </p>
              <p>
                <label>email</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone</label>
                <input type="text" name="phone" />
              </p>
              <p className={styles.full}>
                <label>message</label>
                <textarea type="text" rows="5" name="message"></textarea>
              </p>
              <p className={styles.full}>
                <button className={styles.button}>submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
