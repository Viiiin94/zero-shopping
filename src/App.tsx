import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { fetchProduct } from "./hooks/useProduct";
import { useEffect } from "react";

function App() {
  const product = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  });

  console.log(product);
  return <div>1</div>;
}

export default App;
