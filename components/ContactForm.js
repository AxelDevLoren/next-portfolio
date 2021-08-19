import emailjs from "emailjs-com";
import "animate.css";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_213z9m3",
        "template_sc2qypt",
        e.target,
        "user_1mrNfJzRjxgz5quaY3FbL"
      )
      .then(
        result => {
          alert("Email sent, thank you!");
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {/* new */}
      <div className="animate__animated animate__bounceInLeft">
        <div className={styles.all}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.companyInfo}>
                <h3>Axel Lorén</h3>
                <ul className={styles.ul}>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faRoad} /> Attundagränd 3
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> 070 5950 831
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} /> Axel.loren@gmail.com
                  </li>
                </ul>
              </div>
              <div className={styles.contact}>
                <h3>Contact me:</h3>
                <form
                  className={styles.form}
                  onSubmit={sendEmail}
                  id="contact-form"
                >
                  <p>
                    <label>Name:</label>
                    <input
                      placeholder="name"
                      name="name"
                      type="text"
                      id="name"
                      required
                    />
                  </p>
                  <p>
                    <label>Company:</label>
                    <input type="text" name="name" />
                  </p>
                  <p>
                    <label>Email:</label>
                    <input
                      placeholder="name"
                      name="name"
                      type="text"
                      id="email"
                      required
                    />
                  </p>
                  <p>
                    <label>Phone number:</label>
                    <input
                      placeholder="phone number"
                      name="name"
                      type="text"
                      id="phone"
                    />
                  </p>
                  <p className={styles.full}>
                    <label>Message:</label>
                    <textarea
                      placeholder="write ur message"
                      name="message"
                      rows="5"
                      id="message"
                      required
                    ></textarea>
                  </p>
                  <p className={styles.full}>
                    <button className={styles.button} type="submit">
                      submit
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
