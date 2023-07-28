import { useState } from "react";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [autoFindValue, setAutoFindValue] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={() => {}}
        placeholder="상품을 검색하세요."
      />
    </div>
  );
};

export default SearchInput;
