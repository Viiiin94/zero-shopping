import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

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
      <ul className={styles.ul}>
        {filterProducts &&
          filterProducts.map((product, idx) => (
            <li className={styles.list} key={idx}>
              <Link to={`/products/${product.id}`} state={product}>
                {product.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchInput;
