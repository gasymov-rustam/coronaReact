import styles from "./Filter.module.css";
import React, { useEffect, useState } from "react";

function Filter({ arraySet, array }) {
  const [value, setValue] = useState("");
  const [one, setOne] = useState([...array]);
  const filterField = ["en", "uk"];
  let word = "";
  let formattedArray = [];
  //   (function () {
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
  //     });
  //   })();
  useEffect(() => setOne(array), []);

  useEffect(() => {
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
    }, []);
    // console.log(formattedArray);
    arraySet(formattedArray);
    // console.log(array);
    // console.log(formattedArray);
    // arraySet((prev) => console.log(prev));
    // arraySet((prev) => [...prev, ...formattedArray]);
    // console.log(array);

    // return arraySet((prev) => [...prev, ...formattedArray]);
  }, [value]);
  //   console.log(array);
  const handler = (e) => {
    e.preventDefault();
    return arraySet(formattedArray);
  };
  return (
    <form method="get" className={styles.searchForm} name="searchByRegion">
      <button
        type="submit"
        className={styles["searchForm__button"]}
        onClick={(e) => handler(e)}
      >
        &#128269;
      </button>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
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
