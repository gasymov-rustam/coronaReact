import styles from "./GeneralInfo.module.css";

export default function GeneralInfo({ array }) {
  function createGeneralInformation(array, key) {
    return array.reduce((total, item) => {
      total += item[key];
      return total;
    }, 0);
  }

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
    <div className={styles["general-information"]}>
      <div className={styles["general-information__confirmed"]}>
        <p>Виявлено:</p>
        <p>{createGeneralInformation(array, "confirmed")}</p>
        <p className={styles["wrapper-data__delta"]}>
          {createArrow(createGeneralInformation(array, "delta_confirmed"))}
        </p>
      </div>

      <div className={styles["general-information__deaths"]}>
        <p>Померло:</p>
        <p>{createGeneralInformation(array, "deaths")}</p>
        <p className={styles["wrapper-data__delta"]}>
          {createArrow(createGeneralInformation(array, "delta_deaths"))}
        </p>
      </div>

      <div className={styles["general-information__recovered"]}>
        <p>Одужали:</p>
        <p>{createGeneralInformation(array, "recovered")}</p>
        <p className={styles["wrapper-data__delta"]}>
          {createArrow(createGeneralInformation(array, "delta_recovered"))}
        </p>
      </div>
      <div className={styles["general-information__existing"]}>
        <p>Одужали:</p>
        <p>{createGeneralInformation(array, "existing")}</p>
        <p className={styles["wrapper-data__delta"]}>
          {createArrow(createGeneralInformation(array, "delta_existing"))}
        </p>
      </div>
    </div>
  );
}
