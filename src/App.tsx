import { useAppDispatch } from "./hooks/useRedux";
import { fetchProduct } from "./hooks/useProduct";
import { useEffect } from "react";
import Router from "../src/router/Router";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return <Router />;
}

export default App;
