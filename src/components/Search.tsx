import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../hooks/useRedux";

import styles from "./Search.module.scss";

const SearchInput = () => {
  const products = useAppSelector((state) => state.product.products);

  const [search, setSearch] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filterProducts = products.filter((product) => {
    if (!search) return;

    return product.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  // console.log(filterProducts);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={search}
        onChange={onChange}
        placeholder="상품을 검색하세요"
        className={styles.input}
      />
      <ul>
        {filterProducts &&
          filterProducts.map((product) => (
            <li className={styles.list}>{product.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchInput;
