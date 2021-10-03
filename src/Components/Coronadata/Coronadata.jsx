import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import Coronacard from "../Coronacard/Coronacard";
import styles from "./Coronadata.module.css";
import cn from "classnames";
import Filter from "../FilterField/Filter";

export default function Coronadata() {
  const currentTime = new Date(Date.now()).toJSON().slice(0, 10);
  const [coronaArray, setCoronaArray] = useState([]);
  const [corona, setCorona] = useState({});
  const [load, setLoad] = useState(true);
  const [count, setCount] = useState(0);
  const [coronaRegion, setCoronaRegion] = useState([]);

  useEffect(() => {
    console.log(9999);
    axios
      .get(`https://api-covid19.rnbo.gov.ua/data?to=${currentTime}`)
      .finally(() => setLoad(false))
      .then((res) => {
        setCorona(res.data);
        setCoronaArray(res.data["ukraine"]);
        setCoronaRegion(Object.keys(res.data));
      })
      .catch((error) => console.warn(error));
  }, []);

  const currentCount = (idx) => {
    setCount(idx);
    setCoronaArray(corona[coronaRegion[idx]]);
  };
  return (
    <>
      <div className={cn(styles.wrapperBtn)}>
        {coronaRegion.map((item, idx) => (
          <button
            onClick={() => currentCount(idx)}
            key={idx}
            className={
              idx === count ? cn(styles.btn, styles.btnActive) : cn(styles.btn)
            }
          >
            {item}
          </button>
        ))}
      </div>
      <Filter arraySet={setCoronaArray} array={coronaArray} />

      <GeneralInfo array={coronaArray} />

      {load ? (
        <h1 className={styles.load}>Loading</h1>
      ) : (
        <div>
          {coronaArray.map((item) => (
            <div key={item.id}>
              <Coronacard array={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
