import React from "react";

import style from "../style/upComing.module.css";
// import ExploreStyle from "../style/explore.module.css";
import data from "../data/upcomingCard.json";
import { SubHeader } from "../components";
import { AiOutlineBell } from "react-icons/ai";

export default function UpComing() {
  return (
    <>
      <div className={style.upComingContainer}>
        <div className={style.header}>
          <SubHeader pageTitle="UPCOMING FOR YOU" />
          <p className={style.today}>TODAY</p>
        </div>
        <div className={style.peopleContainer}>
          {data.map((item) => (
            <div>
              <div className={style.time}>
                <p>{item.time} </p>
                <AiOutlineBell />
              </div>
              <h2>{item.title} </h2>
              <div className={style.imgContainer}>
                {item.images.map((img) => (
                  <div>
                    <img src={`/images/${img}`} alt="" />
                  </div>
                ))}
              </div>
              <p>{item.description} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
