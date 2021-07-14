import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="" />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/explore">
          <img src="/images/invite.png" alt="" />
        </Link>
        <Link exact to="/upcoming">
          <img src="/images/calendar.png" alt="" />
        </Link>
        <Link exact to="/upcoming">
          <img src="/images/noti.png" alt="" />
        </Link>
        <Link exact to="/profile">
          <img src="/images/vipul1.jpg" alt="" className={style.vipul1} />
        </Link>
      </div>
    </div>
  );
}
