import { ChangeEvent, useState } from "react";

import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [autoFindValue, setAutoFindValue] = useState([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="상품을 검색하세요"
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
