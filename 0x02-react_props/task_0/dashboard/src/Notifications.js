/** @format */

import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils.js";
import icon from "./close-icon.png";

export default function Notification() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <div>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            float: "right",
            top: 0,
            right: 0,
          }}
          aria-label='close'
          onClick={() => console.log("Close button has been clicked")}
        >
          <img src={icon} alt='icon'></img>
        </button>
      </div>
    </div>
  );
}
