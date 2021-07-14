import React, { useState } from "react";

import style from "../style/phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";

import { Link } from "react-router-dom";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p className="mb-3 mt-2">
        By Entering Your number,you're agreeing to our
        <span> Terms of Service and Privacy Policy</span> Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center "
      >
        Next <img className="ms-2" src="/images/nextArrowIcon.svg" alt="" />
      </Link>
    </div>
  );
}
