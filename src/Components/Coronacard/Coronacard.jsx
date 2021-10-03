import styles from "./Coronacard.module.css";
import React from "react";
function CoronaCardIformation({ array }) {
  function createArrow(number) {
    const arrowNumber =
      number === 0 ? (
        "-"
      ) : number > 0 ? (
        <>&#129045; {number}</>
      ) : (
        <>&#129047; {number}</>
      );
    return arrowNumber;
  }
  return (
    <dl className={styles["wrapper-data"]}>
      <dt className={styles["wrapper-data__country"]}>{array?.label?.uk}</dt>
      <dd className={styles["wrapper-data__confirmed"]}>
        <p>{array?.confirmed}</p>
        <p>{createArrow(array?.delta_confirmed)}</p>
      </dd>
      <dd className={styles["wrapper-data__deaths"]}>
        <p>{array?.deaths}</p>
        <p>{createArrow(array?.delta_deaths)}</p>
      </dd>
      <dd className={styles["wrapper-data__recovered"]}>
        <p>{array?.recovered}</p>
        <p>{createArrow(array?.delta_recovered)}</p>
      </dd>
      <dd className={styles["wrapper-data__existing"]}>
        <p>{array?.existing}</p>
        <p>{createArrow(array?.delta_existing)}</p>
      </dd>
    </dl>
  );
}

export default React.memo(CoronaCardIformation);
