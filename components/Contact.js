import React from "react";
import "animate.css";
export default function Contact() {
  return (
    <>
      <div>
        <h1>wanna come in contact?</h1>
        <div className="center">
          <a href="/contactPage" className="button">
            <h2>Contact me!</h2>
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
          }
          @keyframes pulse {
            0% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
            }

            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }

            100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }
          .button:hover {
            background: #cc6500;
            color: white;
            box-shadow: 10px 10px 10px blue;
            transition: box-shadow 0.3s;
            animation: pulse 2s infinite;
          }
          h1 {
            padding-top: 30px;
            text-align: center;
            color: white;
          }
          .button {
            border-radius: 10px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            background-color: black;
            border: 1px solid white;
            color: white;
            padding: 10px 22px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin-top: -150px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
