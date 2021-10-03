import styles from "./Filter.module.css";
import React, { useEffect, useState } from "react";

function Filter({ arraySet, array, status }) {
  const [value, setValue] = useState("");
  const [one, setOne] = useState([...array]);
  const filterField = ["en", "uk"];
  let word = "";
  let formattedArray = [];
  (function () {
    word = value
      .trim()
      .toLowerCase()
      .split(" ")
      .filter((word) => !!word)
      .splice(0, 1);
    formattedArray = array.filter((country) => {
      return filterField.some((field) => {
        return String(country.label[field]).toLowerCase().includes(word);
      });
    });
    // arraySet(formattedArray);
  })();
  console.log(formattedArray);

  //   useEffect(() => {
  //     word = value
  //       .trim()
  //       .toLowerCase()
  //       .split(" ")
  //       .filter((word) => !!word)
  //       .splice(0, 1);
  //     formattedArray = array.filter((country) => {
  //       return filterField.some((field) => {
  //         return String(country.label[field]).toLowerCase().includes(word);
  //       });
  //     }, []);
  //     // console.log(formattedArray);
  //     arraySet(formattedArray);
  // console.log(array);
  // console.log(formattedArray);
  // arraySet((prev) => console.log(prev));
  // arraySet((prev) => [...prev, ...formattedArray]);
  // console.log(array);

  // return arraySet((prev) => [...prev, ...formattedArray]);
  //   }, [value]);
  //   //   console.log(array);
  const handler = (e) => {
    setValue(e.target.value);
    status(!one);
    arraySet(formattedArray);
    return handler();
  };
  return (
    <form method="get" className={styles.searchForm} name="searchByRegion">
      <button type="submit" className={styles["searchForm__button"]} disabled>
        &#128269;
      </button>
      <input
        type="text"
        onChange={(e) => handler(e)}
        className={styles["searchForm__input"]}
        name="searchPlace"
        placeholder="search by region"
        id="searchPlaceEl"
        value={value}
      />
    </form>
  );
}
// export default React.memo(Filter);
export default Filter;
